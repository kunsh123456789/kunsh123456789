interface PixelGridRendererProps {
  cells: (string | null)[][]
  pixelSize?: number
  scale?: number
  mirror?: boolean
  pose?: 'idle' | 'attack' | 'hit'
  lungeDirection?: 'left' | 'right'
  className?: string
}

export function PixelGridRenderer({
  cells,
  pixelSize = 8,
  scale = 1,
  mirror = false,
  pose = 'idle',
  lungeDirection = 'right',
  className = '',
}: PixelGridRendererProps) {
  const rows = cells.length
  const cols = cells[0]?.length ?? 0

  const poseClass =
    pose === 'attack'
      ? lungeDirection === 'left'
        ? 'animate-monster-lunge'
        : 'animate-lunge'
      : pose === 'hit'
        ? 'animate-shake'
        : 'animate-bob'

  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      width={cols * pixelSize * scale}
      height={rows * pixelSize * scale}
      shapeRendering="crispEdges"
      className={`${poseClass} ${className}`}
      style={mirror ? { transform: 'scaleX(-1)' } : undefined}
    >
      {cells.map((row, r) =>
        row.map((color, c) =>
          color ? <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill={color} /> : null,
        ),
      )}
    </svg>
  )
}
