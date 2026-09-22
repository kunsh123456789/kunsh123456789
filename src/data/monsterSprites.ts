import type { MonsterArchetype } from '../types'

// 9 cols x 9 rows. Chars: M=main color, D=shadow accent, E=eye, .=transparent
export const MONSTER_GRID_COLS = 9
export const MONSTER_GRID_ROWS = 9

export const MONSTER_GRIDS: Record<MonsterArchetype, string[]> = {
  blob: [
    '.........',
    '..MMMMM..',
    '.MMMMMMM.',
    'MMEMMEMMM',
    'MMMMMMMMM',
    'MMMDDDMMM',
    '.MMMMMMM.',
    '..MMMMM..',
    '...MMM...',
  ],
  golem: [
    '..MMMMM..',
    '.MMEMEMM.',
    '.MMMMMMM.',
    'MMMMMMMMM',
    'MDMMMMMDM',
    'MDMMMMMDM',
    '.MMMMMMM.',
    '.MM.M.MM.',
    '.MM...MM.',
  ],
  winged: [
    'M.......M',
    'MM.....MM',
    '.MM...MM.',
    '..MMMMM..',
    '.MMEMEMM.',
    'MMMMMMMMM',
    '.MMDDDMM.',
    '..MM.MM..',
    '...M.M...',
  ],
  spirit: [
    '..MMMMM..',
    '.MMMMMMM.',
    'MMMMMMMMM',
    'MMEMMMEMM',
    'MMMMMMMMM',
    'MMMMMMMMM',
    'MMMMMMMMM',
    'M.M.M.M.M',
    '.........',
  ],
}
