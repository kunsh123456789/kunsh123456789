import { BODY_GRID, HAIR_GRIDS } from '../../data/spritePixels'
import type { Appearance } from '../../types'
import { mergeGrids, resolveGrid } from './pixelGrid'
import { PixelGridRenderer } from './PixelGridRenderer'

interface PlayerSpriteProps {
  appearance: Appearance
  size?: number
  pose?: 'idle' | 'attack' | 'hit'
  lungeDirection?: 'left' | 'right'
  className?: string
}

const HEIGHT_SCALE: Record<Appearance['height'], number> = {
  short: 0.85,
  average: 1,
  tall: 1.15,
}

function shade(hex: string, amount: number): string {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.min(255, (n >> 16) + amount))
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amount))
  const b = Math.max(0, Math.min(255, (n & 0xff) + amount))
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

export function PlayerSprite({ appearance, size = 10, pose = 'idle', lungeDirection = 'right', className = '' }: PlayerSpriteProps) {
  const bodyPalette = {
    S: appearance.skinTone,
    O: appearance.outfitColor,
    D: shade(appearance.outfitColor, -35),
    E: '#1c1c1c',
  }
  const bodyCells = resolveGrid(BODY_GRID, bodyPalette)
  const hairCells = resolveGrid(HAIR_GRIDS[appearance.hairStyle], { H: appearance.hairColor })
  const cells = mergeGrids(bodyCells, hairCells)

  return (
    <PixelGridRenderer
      cells={cells}
      pixelSize={size}
      scale={HEIGHT_SCALE[appearance.height]}
      pose={pose}
      lungeDirection={lungeDirection}
      className={className}
    />
  )
}
