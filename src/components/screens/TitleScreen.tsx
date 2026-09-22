import { useGameStore } from '../../store/gameStore'
import { PixelButton } from '../ui/PixelButton'

export function TitleScreen() {
  const player = useGameStore((s) => s.player)
  const newGame = useGameStore((s) => s.newGame)
  const continueGame = useGameStore((s) => s.continueGame)
  const resetGame = useGameStore((s) => s.resetGame)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#151a34] to-[#0b1020] px-4 text-center scanlines">
      <div className="animate-bob mb-6 text-6xl">🎓⚔️</div>
      <h1 className="font-pixel text-2xl sm:text-4xl text-violet-300 drop-shadow-[0_2px_0_#000] mb-3">
        Apademia
      </h1>
      <p className="text-slate-400 max-w-md mb-10 text-lg">
        An RPG quest across five AP kingdoms. Battle monsters with real exam
        questions, level up, and master every subject.
      </p>

      <div className="flex flex-col gap-4 w-64">
        {player && (
          <PixelButton variant="primary" onClick={continueGame}>
            Continue as {player.name}
          </PixelButton>
        )}
        <PixelButton variant={player ? 'secondary' : 'primary'} onClick={newGame}>
          New Game
        </PixelButton>
        {player && (
          <PixelButton
            variant="ghost"
            onClick={() => {
              if (confirm('This will erase your saved hero. Are you sure?')) resetGame()
            }}
          >
            Erase Save
          </PixelButton>
        )}
      </div>

      <p className="mt-12 text-xs text-slate-600 font-pixel">
        AP BIO · AP CALC AB · AP CHEM · AP US HIST · AP CS A · AP PHYSICS 1
      </p>
    </div>
  )
}
