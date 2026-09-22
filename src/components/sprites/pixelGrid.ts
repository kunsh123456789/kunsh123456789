export function resolveGrid(grid: string[], palette: Record<string, string>): (string | null)[][] {
  return grid.map((row) => row.split('').map((ch) => (ch === '.' ? null : (palette[ch] ?? null))))
}

export function mergeGrids(base: (string | null)[][], overlay: (string | null)[][]): (string | null)[][] {
  return base.map((row, r) => row.map((cell, c) => overlay[r]?.[c] ?? cell))
}
