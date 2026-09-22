import { useState } from 'react'
import {
  DEFAULT_APPEARANCE,
  GENDER_OPTIONS,
  HAIR_COLORS,
  HAIR_STYLES,
  HEIGHT_OPTIONS,
  OUTFIT_COLORS,
  SKIN_TONES,
} from '../../data/appearance'
import { useGameStore } from '../../store/gameStore'
import type { Appearance } from '../../types'
import { PlayerSprite } from '../sprites/PlayerSprite'
import { PixelButton } from '../ui/PixelButton'

function SwatchRow({
  colors,
  selected,
  onSelect,
}: {
  colors: string[]
  selected: string
  onSelect: (color: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`w-8 h-8 rounded-full border-2 transition-transform ${
            selected === c ? 'border-white scale-110' : 'border-slate-600 hover:scale-105'
          }`}
          style={{ background: c }}
          aria-label={c}
        />
      ))}
    </div>
  )
}

function OptionRow<T extends string>({
  options,
  selected,
  onSelect,
}: {
  options: { id: T; label: string }[]
  selected: T
  onSelect: (id: T) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onSelect(opt.id)}
          className={`px-3 py-2 rounded-lg border-2 font-pixel text-[9px] transition-colors ${
            selected === opt.id
              ? 'border-violet-400 bg-violet-900/40 text-white'
              : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-500'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export function CharacterCreation() {
  const createPlayer = useGameStore((s) => s.createPlayer)
  const [name, setName] = useState('')
  const [appearance, setAppearance] = useState<Appearance>(DEFAULT_APPEARANCE)

  function update<K extends keyof Appearance>(key: K, value: Appearance[K]) {
    setAppearance((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#151a34] to-[#0b1020] px-4 py-10">
      <h1 className="font-pixel text-xl text-violet-300 mb-8 text-center">Create Your Hero</h1>

      <div className="w-full max-w-3xl pixel-border bg-slate-900/80 rounded-lg p-6 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
        {/* live preview */}
        <div className="flex flex-col items-center justify-start gap-3">
          <div className="pixel-border bg-slate-800/60 rounded-lg p-4 flex items-center justify-center w-full h-56">
            <PlayerSprite appearance={appearance} size={14} pose="idle" />
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={18}
            placeholder="Enter a name..."
            className="w-full bg-slate-800 border-2 border-slate-600 rounded px-3 py-2 text-lg text-white outline-none focus:border-violet-400 text-center"
          />
        </div>

        {/* customization controls */}
        <div className="space-y-5">
          <div>
            <label className="font-pixel text-[10px] text-slate-300 block mb-2">Gender</label>
            <OptionRow options={GENDER_OPTIONS} selected={appearance.gender} onSelect={(v) => update('gender', v)} />
          </div>

          <div>
            <label className="font-pixel text-[10px] text-slate-300 block mb-2">Height</label>
            <OptionRow options={HEIGHT_OPTIONS} selected={appearance.height} onSelect={(v) => update('height', v)} />
          </div>

          <div>
            <label className="font-pixel text-[10px] text-slate-300 block mb-2">Skin Tone</label>
            <SwatchRow colors={SKIN_TONES} selected={appearance.skinTone} onSelect={(v) => update('skinTone', v)} />
          </div>

          <div>
            <label className="font-pixel text-[10px] text-slate-300 block mb-2">Hair Style</label>
            <OptionRow options={HAIR_STYLES} selected={appearance.hairStyle} onSelect={(v) => update('hairStyle', v)} />
          </div>

          <div>
            <label className="font-pixel text-[10px] text-slate-300 block mb-2">Hair Color</label>
            <SwatchRow colors={HAIR_COLORS} selected={appearance.hairColor} onSelect={(v) => update('hairColor', v)} />
          </div>

          <div>
            <label className="font-pixel text-[10px] text-slate-300 block mb-2">Outfit Color</label>
            <SwatchRow colors={OUTFIT_COLORS} selected={appearance.outfitColor} onSelect={(v) => update('outfitColor', v)} />
          </div>

          <PixelButton
            variant="primary"
            className="w-full"
            onClick={() => createPlayer(name, appearance)}
            disabled={name.trim().length === 0}
          >
            Begin Adventure
          </PixelButton>
        </div>
      </div>
    </div>
  )
}
