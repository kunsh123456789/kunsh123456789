import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AVATAR_CLASSES, getSubject, HUB_POSITION, MAP_HEIGHT, MAP_WIDTH, SUBJECTS } from '../data/subjects'
import { drawQuestions } from '../data/questions'
import type {
  AvatarId,
  BattleQuestionResult,
  BattleState,
  Player,
  Screen,
  SubjectId,
  SubjectMastery,
} from '../types'

const QUESTIONS_PER_DRAW = 5
const BASE_HP = 30
const BASE_ATTACK = 8

function emptyMastery(): SubjectMastery {
  return { answered: 0, correct: 0, bestStreak: 0, battlesWon: 0 }
}

function xpToNextForLevel(level: number): number {
  return 50 + (level - 1) * 30
}

function makePlayer(name: string, avatar: AvatarId): Player {
  const cls = AVATAR_CLASSES.find((c) => c.id === avatar) ?? AVATAR_CLASSES[0]
  const mastery = {} as Record<SubjectId, SubjectMastery>
  for (const s of SUBJECTS) mastery[s.id] = emptyMastery()
  return {
    name: name.trim() || 'Adventurer',
    avatar,
    level: 1,
    xp: 0,
    xpToNext: xpToNextForLevel(1),
    hp: BASE_HP + cls.bonusHp,
    maxHp: BASE_HP + cls.bonusHp,
    attack: BASE_ATTACK + cls.bonusAttack,
    gold: 0,
    position: { ...HUB_POSITION },
    mastery,
  }
}

function pickMonster(subjectId: SubjectId, playerLevel: number) {
  const subject = getSubject(subjectId)
  if (!subject) throw new Error(`Unknown subject ${subjectId}`)
  const tier = playerLevel >= 6 ? 2 : playerLevel >= 3 ? 1 : 0
  const pool = subject.monsters.slice(0, Math.min(tier + 1, subject.monsters.length))
  const base = pool[Math.floor(Math.random() * pool.length)]
  const scaledHp = base.hp + (playerLevel - 1) * 4
  return { monster: base, hp: scaledHp }
}

interface GameStore {
  screen: Screen
  player: Player | null
  battle: BattleState | null
  lastLevelUp: number | null

  newGame: () => void
  createPlayer: (name: string, avatar: AvatarId) => void
  continueGame: () => void
  resetGame: () => void

  movePlayer: (dx: number, dy: number) => void
  startBattle: (subjectId: SubjectId) => void
  selectAnswer: (choiceIndex: number) => void
  nextQuestion: () => void
  acknowledgeBattleEnd: () => void
  clearLevelUp: () => void
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      screen: 'title',
      player: null,
      battle: null,
      lastLevelUp: null,

      newGame: () => set({ screen: 'create' }),

      createPlayer: (name, avatar) => {
        set({ player: makePlayer(name, avatar), screen: 'overworld', battle: null })
      },

      continueGame: () => {
        const { player } = get()
        if (player) set({ screen: 'overworld' })
        else set({ screen: 'create' })
      },

      resetGame: () => set({ player: null, battle: null, screen: 'title', lastLevelUp: null }),

      movePlayer: (dx, dy) => {
        const { player, screen } = get()
        if (!player || screen !== 'overworld') return
        const nx = Math.max(0, Math.min(MAP_WIDTH - 1, player.position.x + dx))
        const ny = Math.max(0, Math.min(MAP_HEIGHT - 1, player.position.y + dy))
        const newPlayer = { ...player, position: { x: nx, y: ny } }
        set({ player: newPlayer })

        const hitSubject = SUBJECTS.find((s) => s.mapPosition.x === nx && s.mapPosition.y === ny)
        if (hitSubject) {
          get().startBattle(hitSubject.id)
        }
      },

      startBattle: (subjectId) => {
        const { player } = get()
        if (!player) return
        const { monster, hp } = pickMonster(subjectId, player.level)
        const battle: BattleState = {
          subjectId,
          monster,
          monsterHp: hp,
          monsterMaxHp: hp,
          questions: drawQuestions(subjectId, QUESTIONS_PER_DRAW),
          questionIndex: 0,
          streak: 0,
          selectedChoice: null,
          result: null,
          playerHpStart: player.hp,
          goldEarned: 0,
          xpEarned: 0,
        }
        set({ battle, screen: 'battle' })
      },

      selectAnswer: (choiceIndex) => {
        const { battle, player } = get()
        if (!battle || !player || battle.result !== null) return
        const question = battle.questions[battle.questionIndex]
        const correct = choiceIndex === question.correctIndex
        const result: BattleQuestionResult = correct ? 'correct' : 'incorrect'

        const mastery = { ...player.mastery }
        const subjMastery = { ...mastery[battle.subjectId] }
        subjMastery.answered += 1

        let monsterHp = battle.monsterHp
        let playerHp = player.hp
        let streak = battle.streak

        if (correct) {
          subjMastery.correct += 1
          streak += 1
          subjMastery.bestStreak = Math.max(subjMastery.bestStreak, streak)
          const streakBonus = Math.floor(streak / 3) * 2
          monsterHp = Math.max(0, monsterHp - (player.attack + streakBonus))
        } else {
          streak = 0
          const monsterDamage = 5 + Math.floor(battle.monsterMaxHp / 12)
          playerHp = Math.max(0, playerHp - monsterDamage)
        }

        mastery[battle.subjectId] = subjMastery

        set({
          battle: { ...battle, monsterHp, streak, selectedChoice: choiceIndex, result },
          player: { ...player, hp: playerHp, mastery },
        })
      },

      nextQuestion: () => {
        const { battle, player } = get()
        if (!battle || !player) return

        if (battle.monsterHp <= 0) {
          const goldEarned = 15 + Math.round(battle.monsterMaxHp / 2)
          const xpEarned = 20 + Math.round(battle.monsterMaxHp / 2)
          const classBonus = player.avatar === 'scholar' ? 1.25 : 1
          const finalGold = Math.round(goldEarned * classBonus)
          const finalXp = Math.round(xpEarned * classBonus)

          const mastery = { ...player.mastery }
          mastery[battle.subjectId] = {
            ...mastery[battle.subjectId],
            battlesWon: mastery[battle.subjectId].battlesWon + 1,
          }

          let xp = player.xp + finalXp
          let level = player.level
          let maxHp = player.maxHp
          let attack = player.attack
          let xpToNext = player.xpToNext
          let leveledUp = false

          while (xp >= xpToNext) {
            xp -= xpToNext
            level += 1
            maxHp += 8
            attack += 2
            xpToNext = xpToNextForLevel(level)
            leveledUp = true
          }

          const hp = leveledUp ? maxHp : player.hp

          set({
            player: { ...player, gold: player.gold + finalGold, xp, level, maxHp, attack, xpToNext, hp, mastery },
            battle: { ...battle, goldEarned: finalGold, xpEarned: finalXp },
            screen: 'victory',
            lastLevelUp: leveledUp ? level : null,
          })
          return
        }

        if (player.hp <= 0) {
          const goldLost = Math.round(player.gold * 0.2)
          set({
            player: { ...player, gold: player.gold - goldLost },
            screen: 'defeat',
          })
          return
        }

        let { questions, questionIndex } = battle
        questionIndex += 1
        if (questionIndex >= questions.length) {
          questions = [...questions, ...drawQuestions(battle.subjectId, QUESTIONS_PER_DRAW)]
        }

        set({
          battle: { ...battle, questions, questionIndex, selectedChoice: null, result: null },
        })
      },

      acknowledgeBattleEnd: () => {
        const { player } = get()
        if (!player) return
        const restoredHp = player.hp <= 0 ? Math.ceil(player.maxHp / 2) : player.hp
        set({
          player: { ...player, hp: restoredHp, position: { ...HUB_POSITION } },
          battle: null,
          screen: 'overworld',
        })
      },

      clearLevelUp: () => set({ lastLevelUp: null }),
    }),
    {
      name: 'apademia-save',
      partialize: (state) => ({ player: state.player }),
    },
  ),
)
