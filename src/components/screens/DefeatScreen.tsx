import { getSubject } from '../../data/subjects'
import { useGameStore } from '../../store/gameStore'
import { PixelButton } from '../ui/PixelButton'

export function DefeatScreen() {
  const battle = useGameStore((s) => s.battle)
  const acknowledgeBattleEnd = useGameStore((s) => s.acknowledgeBattleEnd)

  if (!battle) return null
  const subject = getSubject(battle.subjectId)!

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2a1414] to-[#0b1020] p-4">
      <div className="pixel-border bg-slate-900/90 rounded-lg p-8 max-w-md w-full text-center animate-pop-in">
        <div className="text-6xl mb-3">💤</div>
        <h2 className="font-pixel text-lg text-rose-400 mb-1">Knocked Out!</h2>
        <p className="text-slate-300 mb-8">
          The {battle.monster.name} of {subject.zoneName} proved too tough this time. Rest up
          at the hub and study before your next attempt.
        </p>
        <PixelButton variant="danger" className="w-full" onClick={acknowledgeBattleEnd}>
          Return to Hub
        </PixelButton>
      </div>
    </div>
  )
}
