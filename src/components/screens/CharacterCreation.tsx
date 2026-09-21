import { useState } from 'react'
import { AVATAR_CLASSES } from '../../data/subjects'
import { useGameStore } from '../../store/gameStore'
import type { AvatarId } from '../../types'
import { PixelButton } from '../ui/PixelButton'

export function CharacterCreation() {
  const createPlayer = useGameStore((s) => s.createPlayer)
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState<AvatarId>('mage')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#151a34] to-[#0b1020] px-4 py-10">
      <h1 className="font-pixel text-xl text-violet-300 mb-8 text-center">
        Create Your Hero
      </h1>

      <div className="w-full max-w-xl pixel-border bg-slate-900/80 rounded-lg p-6 space-y-6">
        <div>
          <label className="font-pixel text-xs text-slate-300 block mb-2">Hero Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={18}
            placeholder="Enter a name..."
            className="w-full bg-slate-800 border-2 border-slate-600 rounded px-3 py-2 text-lg text-white outline-none focus:border-violet-400"
          />
        </div>

        <div>
          <label className="font-pixel text-xs text-slate-300 block mb-3">Choose Your Class</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {AVATAR_CLASSES.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setAvatar(cls.id)}
                className={`text-left p-4 rounded-lg border-2 transition-all ${
                  avatar === cls.id
                    ? 'border-violet-400 bg-violet-900/40'
                    : 'border-slate-700 bg-slate-800/60 hover:border-slate-500'
                }`}
              >
                <div className="text-3xl mb-1">{cls.emoji}</div>
                <div className="font-pixel text-[11px] text-white mb-2">{cls.name}</div>
                <p className="text-sm text-slate-400 leading-snug">{cls.description}</p>
                <div className="mt-2 text-xs text-emerald-400 font-mono">
                  {cls.bonusHp > 0 && `+${cls.bonusHp} HP `}
                  {cls.bonusAttack > 0 && `+${cls.bonusAttack} ATK`}
                </div>
              </button>
            ))}
          </div>
        </div>

        <PixelButton
          variant="primary"
          className="w-full"
          onClick={() => createPlayer(name, avatar)}
          disabled={name.trim().length === 0}
        >
          Begin Adventure
        </PixelButton>
      </div>
    </div>
  )
}
