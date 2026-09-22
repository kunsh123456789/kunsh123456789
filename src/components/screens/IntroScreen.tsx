import { useGameStore } from '../../store/gameStore'
import { PixelButton } from '../ui/PixelButton'

// Placeholder lore — structure is in place, copy can be revised later.
const LORE_PARAGRAPHS = [
  'Long ago, the realm of Apademia was whole — a single kingdom where every field of knowledge lived in balance.',
  'Then came the Sundering. The realm split into five (soon six) warring kingdoms, each guarded by monsters born from confusion, doubt, and unanswered questions.',
  'You are the newest Apprentice, called to wander the overworld, enter each kingdom, and defeat its monsters by mastering the knowledge they guard.',
  'Only by proving your understanding — one battle, one question at a time — can Apademia be made whole again.',
]

export function IntroScreen() {
  const continueToCreate = useGameStore((s) => s.continueToCreate)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#151a34] to-[#0b1020] px-4 py-10 scanlines">
      <div className="w-full max-w-2xl pixel-border bg-slate-900/85 rounded-lg p-6 sm:p-8">
        <h1 className="font-pixel text-lg text-violet-300 mb-6 text-center">The Sundering</h1>
        <div className="space-y-4">
          {LORE_PARAGRAPHS.map((p, i) => (
            <p key={i} className="text-slate-300 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <PixelButton variant="ghost" className="flex-1" onClick={continueToCreate}>
            Skip
          </PixelButton>
          <PixelButton variant="primary" className="flex-1" onClick={continueToCreate}>
            Continue
          </PixelButton>
        </div>
      </div>
    </div>
  )
}
