import { getSubject } from '../../data/subjects'
import { useGameStore } from '../../store/gameStore'
import { PixelButton } from '../ui/PixelButton'

export function VictoryScreen() {
  const player = useGameStore((s) => s.player)
  const battle = useGameStore((s) => s.battle)
  const lastLevelUp = useGameStore((s) => s.lastLevelUp)
  const acknowledgeBattleEnd = useGameStore((s) => s.acknowledgeBattleEnd)
  const clearLevelUp = useGameStore((s) => s.clearLevelUp)

  if (!player || !battle) return null
  const subject = getSubject(battle.subjectId)!

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a2a1a] to-[#0b1020] p-4">
      <div className="pixel-border bg-slate-900/90 rounded-lg p-8 max-w-md w-full text-center animate-pop-in">
        <div className="text-6xl mb-3">🏆</div>
        <h2 className="font-pixel text-lg text-emerald-400 mb-1">Victory!</h2>
        <p className="text-slate-300 mb-6">
          You defeated the {battle.monster.name} in {subject.zoneName}.
        </p>

        {lastLevelUp && (
          <div className="mb-6 pixel-border bg-amber-900/30 rounded-lg p-4 animate-pop-in">
            <div className="font-pixel text-sm text-amber-300 mb-1">⭐ LEVEL UP!</div>
            <p className="text-amber-100">You reached level {lastLevelUp}!</p>
          </div>
        )}

        <div className="flex justify-center gap-8 mb-8">
          <div>
            <div className="font-pixel text-xs text-amber-300">🪙 +{battle.goldEarned}</div>
            <div className="text-xs text-slate-500 mt-1">Gold</div>
          </div>
          <div>
            <div className="font-pixel text-xs text-blue-300">✨ +{battle.xpEarned}</div>
            <div className="text-xs text-slate-500 mt-1">XP</div>
          </div>
        </div>

        <PixelButton
          variant="primary"
          className="w-full"
          onClick={() => {
            clearLevelUp()
            acknowledgeBattleEnd()
          }}
        >
          Return to Overworld
        </PixelButton>
      </div>
    </div>
  )
}
