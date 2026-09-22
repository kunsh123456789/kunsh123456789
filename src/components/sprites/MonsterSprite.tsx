import { MONSTER_GRIDS } from '../../data/monsterSprites'
import type { Monster } from '../../types'
import { resolveGrid } from './pixelGrid'
import { PixelGridRenderer } from './PixelGridRenderer'

interface MonsterSpriteProps {
  monster: Monster
  color: string
  size?: number
  pose?: 'idle' | 'attack' | 'hit'
  lungeDirection?: 'left' | 'right'
  className?: string
}

function shade(hex: string, amount: number): string {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.min(255, (n >> 16) + amount))
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amount))
  const b = Math.max(0, Math.min(255, (n & 0xff) + amount))
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

export function MonsterSprite({ monster, color, size = 12, pose = 'idle', lungeDirection = 'left', className = '' }: MonsterSpriteProps) {
  const palette = {
    M: color,
    D: shade(color, -40),
    E: '#1c1c1c',
  }
  const cells = resolveGrid(MONSTER_GRIDS[monster.archetype], palette)

  return (
    <PixelGridRenderer
      cells={cells}
      pixelSize={size}
      pose={pose}
      lungeDirection={lungeDirection}
      className={className}
    />
  )
}
