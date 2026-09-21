import { AVATAR_CLASSES, getSubject } from '../../data/subjects'
import { useGameStore } from '../../store/gameStore'
import { StatBar } from '../ui/StatBar'
import { PixelButton } from '../ui/PixelButton'

const CHOICE_LETTERS = ['A', 'B', 'C', 'D']

export function BattleScreen() {
  const player = useGameStore((s) => s.player)
  const battle = useGameStore((s) => s.battle)
  const selectAnswer = useGameStore((s) => s.selectAnswer)
  const nextQuestion = useGameStore((s) => s.nextQuestion)

  if (!player || !battle) return null
  const subject = getSubject(battle.subjectId)!
  const avatarInfo = AVATAR_CLASSES.find((c) => c.id === player.avatar)
  const question = battle.questions[battle.questionIndex]
  const answered = battle.result !== null

  return (
    <div
      className="min-h-screen flex flex-col p-3 gap-3"
      style={{
        background: `radial-gradient(circle at 50% 0%, ${subject.glow}, #0b1020 70%)`,
      }}
    >
      {/* combatants */}
      <div className="pixel-border bg-slate-900/85 rounded-lg p-4 grid grid-cols-2 gap-6">
        <div className="text-center">
          <div
            className={`text-6xl mb-2 ${battle.result === 'incorrect' ? 'animate-shake' : ''}`}
          >
            {avatarInfo?.emoji}
          </div>
          <div className="font-pixel text-[10px] text-slate-300 mb-2">{player.name}</div>
          <StatBar label="HP" value={player.hp} max={player.maxHp} colorClass="bg-emerald-500" />
        </div>
        <div className="text-center">
          <div
            className={`text-6xl mb-2 ${battle.result === 'correct' ? 'animate-shake' : ''}`}
          >
            {battle.monster.emoji}
          </div>
          <div className="font-pixel text-[10px] text-slate-300 mb-2">{battle.monster.name}</div>
          <StatBar
            label="HP"
            value={battle.monsterHp}
            max={battle.monsterMaxHp}
            colorClass="bg-rose-500"
          />
        </div>
      </div>

      {battle.streak > 1 && (
        <div className="text-center font-pixel text-xs text-amber-300 animate-pop-in">
          🔥 {battle.streak} answer streak!
        </div>
      )}

      {/* question card */}
      <div className="flex-1 pixel-border bg-slate-900/90 rounded-lg p-5 flex flex-col">
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
                <span className="font-pixel text-[10px] text-slate-400 mt-0.5">
                  {CHOICE_LETTERS[idx]}
                </span>
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
            <PixelButton variant="primary" onClick={nextQuestion}>
              Continue
            </PixelButton>
          </div>
        )}
      </div>
    </div>
  )
}
