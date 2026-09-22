import type { Appearance } from '../../types'

interface PlayerSpriteProps {
  appearance: Appearance
  facing?: 'left' | 'right'
  size?: number
  pose?: 'idle' | 'attack' | 'hit'
  className?: string
}

const HEIGHT_SCALE: Record<Appearance['height'], number> = {
  short: 0.85,
  average: 1,
  tall: 1.15,
}

const GENDER_SHOULDER: Record<Appearance['gender'], number> = {
  female: 30,
  male: 38,
  nonbinary: 34,
}

function shade(hex: string, amount: number): string {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.min(255, (n >> 16) + amount))
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amount))
  const b = Math.max(0, Math.min(255, (n & 0xff) + amount))
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

function Hair({ style, color, shoulderWidth }: { style: Appearance['hairStyle']; color: string; shoulderWidth: number }) {
  const headCx = 50
  const headCy = 32
  const headR = 16

  switch (style) {
    case 'bald':
      return null
    case 'short':
      return <path d={`M ${headCx - headR - 1} ${headCy} a ${headR + 1} ${headR + 1} 0 0 1 ${(headR + 1) * 2} 0 v-4 a ${headR + 1} ${headR + 1} 0 0 0 -${(headR + 1) * 2} 0 z`} fill={color} />
    case 'long':
      return (
        <>
          <path d={`M ${headCx - headR - 1} ${headCy - 2} a ${headR + 1} ${headR + 1} 0 0 1 ${(headR + 1) * 2} 0 v-6 a ${headR + 1} ${headR + 1} 0 0 0 -${(headR + 1) * 2} 0 z`} fill={color} />
          <rect x={headCx - headR - 3} y={headCy - 2} width={6} height={30} rx={3} fill={color} />
          <rect x={headCx + headR - 3} y={headCy - 2} width={6} height={30} rx={3} fill={color} />
        </>
      )
    case 'ponytail':
      return (
        <>
          <path d={`M ${headCx - headR - 1} ${headCy} a ${headR + 1} ${headR + 1} 0 0 1 ${(headR + 1) * 2} 0 v-5 a ${headR + 1} ${headR + 1} 0 0 0 -${(headR + 1) * 2} 0 z`} fill={color} />
          <rect x={headCx + headR - 4} y={headCy - 6} width={7} height={26} rx={3.5} fill={color} transform={`rotate(12 ${headCx + headR} ${headCy})`} />
        </>
      )
    case 'curly':
      return (
        <g fill={color}>
          <circle cx={headCx - 14} cy={headCy - 10} r={7} />
          <circle cx={headCx - 4} cy={headCy - 16} r={8} />
          <circle cx={headCx + 6} cy={headCy - 16} r={8} />
          <circle cx={headCx + 15} cy={headCy - 9} r={7} />
          <circle cx={headCx} cy={headCy - 18} r={7} />
        </g>
      )
    case 'mohawk':
      return (
        <>
          <rect x={headCx - 3} y={headCy - 24} width={6} height={18} rx={2} fill={color} />
          <rect x={headCx - shoulderWidth * 0.15 - 2} y={headCy - 4} width={4} height={8} fill={color} opacity={0.6} />
        </>
      )
    default:
      return null
  }
}

export function PlayerSprite({ appearance, facing = 'right', size = 96, pose = 'idle', className = '' }: PlayerSpriteProps) {
  const scale = HEIGHT_SCALE[appearance.height]
  const shoulderWidth = GENDER_SHOULDER[appearance.gender]
  const outfitDark = shade(appearance.outfitColor, -30)
  const skinDark = shade(appearance.skinTone, -25)

  const poseClass =
    pose === 'attack'
      ? facing === 'left'
        ? 'animate-lunge-left'
        : 'animate-lunge'
      : pose === 'hit'
        ? 'animate-shake'
        : 'animate-bob'

  return (
    <svg
      viewBox="0 0 100 160"
      width={size * scale}
      height={size * scale * 1.4}
      className={`${poseClass} ${className}`}
      style={{ transform: facing === 'left' ? 'scaleX(-1)' : undefined }}
    >
      {/* legs */}
      <rect x={38} y={110} width={10} height={38} rx={3} fill={outfitDark} />
      <rect x={52} y={110} width={10} height={38} rx={3} fill={outfitDark} />
      {/* torso */}
      <path
        d={`M ${50 - shoulderWidth / 2} 62 Q 50 56 ${50 + shoulderWidth / 2} 62 L ${50 + shoulderWidth / 2 - 4} 112 L ${50 - shoulderWidth / 2 + 4} 112 Z`}
        fill={appearance.outfitColor}
      />
      {/* arms */}
      <rect x={50 - shoulderWidth / 2 - 8} y={64} width={9} height={38} rx={4} fill={appearance.skinTone} />
      <rect x={50 + shoulderWidth / 2 - 1} y={64} width={9} height={38} rx={4} fill={appearance.skinTone} />
      {/* neck */}
      <rect x={45} y={46} width={10} height={10} fill={appearance.skinTone} />
      {/* head */}
      <circle cx={50} cy={32} r={16} fill={appearance.skinTone} />
      {/* simple face */}
      <circle cx={44} cy={31} r={1.6} fill={skinDark} />
      <circle cx={56} cy={31} r={1.6} fill={skinDark} />
      <path d="M 45 38 Q 50 41 55 38" stroke={skinDark} strokeWidth={1.4} fill="none" strokeLinecap="round" />
      {/* hair (drawn on top) */}
      <Hair style={appearance.hairStyle} color={appearance.hairColor} shoulderWidth={shoulderWidth} />
    </svg>
  )
}
