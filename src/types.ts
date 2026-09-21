export type SubjectId =
  | 'biology'
  | 'calculus'
  | 'usHistory'
  | 'computerScience'
  | 'chemistry'

export interface Question {
  id: string
  unit: string
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export interface Monster {
  name: string
  emoji: string
  hp: number
}

export interface Subject {
  id: SubjectId
  name: string
  shortName: string
  fullApName: string
  emoji: string
  color: string
  glow: string
  zoneName: string
  zoneDescription: string
  mapPosition: { x: number; y: number }
  monsters: Monster[]
}

export type AvatarId = 'mage' | 'warrior' | 'ranger' | 'scholar'

export interface AvatarClass {
  id: AvatarId
  name: string
  emoji: string
  description: string
  bonusHp: number
  bonusAttack: number
}

export interface SubjectMastery {
  answered: number
  correct: number
  bestStreak: number
  battlesWon: number
}

export interface Player {
  name: string
  avatar: AvatarId
  level: number
  xp: number
  xpToNext: number
  hp: number
  maxHp: number
  attack: number
  gold: number
  position: { x: number; y: number }
  mastery: Record<SubjectId, SubjectMastery>
}

export type BattleQuestionResult = 'correct' | 'incorrect' | null

export interface BattleState {
  subjectId: SubjectId
  monster: Monster
  monsterHp: number
  monsterMaxHp: number
  questions: Question[]
  questionIndex: number
  streak: number
  selectedChoice: number | null
  result: BattleQuestionResult
  playerHpStart: number
  goldEarned: number
  xpEarned: number
}

export type Screen =
  | 'title'
  | 'create'
  | 'overworld'
  | 'battle'
  | 'victory'
  | 'defeat'
