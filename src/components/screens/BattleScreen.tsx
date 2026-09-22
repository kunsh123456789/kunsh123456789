import { getSubject } from '../../data/subjects'
import { useGameStore } from '../../store/gameStore'
import { FBDSelector } from '../battle/FBDSelector'
import { PlayerSprite } from '../sprites/PlayerSprite'
import { StatBar } from '../ui/StatBar'
import { PixelButton } from '../ui/PixelButton'

const CHOICE_LETTERS = ['A', 'B', 'C', 'D']

export function BattleScreen() {
  const player = useGameStore((s) => s.player)
  const battle = useGameStore((s) => s.battle)
  const chooseDirection = useGameStore((s) => s.chooseDirection)
  const selectAnswer = useGameStore((s) => s.selectAnswer)
  const nextTurn = useGameStore((s) => s.nextTurn)

  if (!player || !battle) return null
  const subject = getSubject(battle.subjectId)!
  const question = battle.currentQuestion
  const answered = battle.result !== null

  const playerPose = battle.result === 'correct' ? 'attack' : battle.result === 'incorrect' ? 'hit' : 'idle'
  const monsterClass =
    battle.result === 'correct' ? 'animate-shake' : battle.result === 'incorrect' ? 'animate-monster-lunge' : 'animate-bob'

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(180deg, ${subject.glow}, #0b1020 55%)`,
      }}
    >
      {/* combatant HUD */}
      <div className="flex justify-between gap-4 p-3">
        <div className="w-40 sm:w-56 pixel-border bg-slate-900/85 rounded-lg p-2">
          <div className="font-pixel text-[9px] text-slate-300 mb-1 truncate">{player.name}</div>
          <StatBar label="HP" value={player.hp} max={player.maxHp} colorClass="bg-emerald-500" showNumbers={false} />
        </div>
        <div className="w-40 sm:w-56 pixel-border bg-slate-900/85 rounded-lg p-2 text-right">
          <div className="font-pixel text-[9px] text-slate-300 mb-1 truncate">{battle.monster.name}</div>
          <StatBar label="HP" value={battle.monsterHp} max={battle.monsterMaxHp} colorClass="bg-rose-500" showNumbers={false} />
        </div>
      </div>

      {/* side-view stage */}
      <div className="relative h-52 sm:h-64 mx-3 rounded-lg overflow-hidden pixel-border bg-slate-900/40">
        <div className="absolute inset-x-0 bottom-0 h-10 bg-black/30 border-t-4 border-black/40" />
        <div className="absolute bottom-8 left-6 sm:left-12">
          <PlayerSprite appearance={player.appearance} size={110} facing="right" pose={playerPose} />
        </div>
        <div className={`absolute bottom-8 right-6 sm:right-16 text-7xl sm:text-8xl leading-none ${monsterClass}`}>
          {battle.monster.emoji}
        </div>
      </div>

      {battle.streak > 1 && (
        <div className="text-center font-pixel text-xs text-amber-300 animate-pop-in mt-2">
          🔥 {battle.streak} answer streak!
        </div>
      )}

      {/* interaction panel */}
      <div className="flex-1 pixel-border bg-slate-900/90 rounded-lg m-3 p-5 flex flex-col">
        {battle.phase === 'select' && subject.fbdCategories ? (
          <div className="flex-1 flex items-center justify-center">
            <FBDSelector categories={subject.fbdCategories} onChoose={chooseDirection} />
          </div>
        ) : question ? (
          <>
            <div className="font-pixel text-[9px] text-violet-300 mb-2">
              {subject.fullApName} · {question.unit}
            </div>
            <p className="text-xl text-white leading-snug mb-5 whitespace-pre-line">{question.prompt}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {question.choices.map((choice, idx) => {
                let extra = 'border-slate-600 bg-slate-800/70 hover:border-violet-400'
                if (answered) {
                  if (idx === question.correctIndex) {
                    extra = 'border-emerald-400 bg-emerald-900/40'
                  } else if (idx === battle.selectedChoice) {
                    extra = 'border-rose-400 bg-rose-900/40'
                  } else {
                    extra = 'border-slate-700 bg-slate-800/30 opacity-60'
                  }
                }
                return (
                  <button
                    key={idx}
                    disabled={answered}
                    onClick={() => selectAnswer(idx)}
                    className={`text-left px-4 py-3 rounded-lg border-2 transition-all disabled:cursor-default flex gap-3 items-start ${extra}`}
                  >
                    <span className="font-pixel text-[10px] text-slate-400 mt-0.5">{CHOICE_LETTERS[idx]}</span>
                    <span className="text-slate-100 text-base">{choice}</span>
                  </button>
                )
              })}
            </div>

            {answered && (
              <div className="mt-auto pixel-border bg-slate-800/80 rounded-lg p-4 animate-pop-in">
                <div
                  className={`font-pixel text-xs mb-2 ${
                    battle.result === 'correct' ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {battle.result === 'correct' ? '✔ Correct!' : '✘ Not quite'}
                </div>
                <p className="text-slate-300 text-base leading-snug mb-4">{question.explanation}</p>
                <PixelButton variant="primary" onClick={nextTurn}>
                  Continue
                </PixelButton>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  )
}
