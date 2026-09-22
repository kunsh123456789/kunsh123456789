import type { Direction, FbdCategory } from '../../types'

interface FBDSelectorProps {
  categories: Record<Direction, FbdCategory>
  onChoose: (direction: Direction) => void
}

const ARROW_GLYPH: Record<Direction, string> = {
  up: '↑',
  down: '↓',
  left: '←',
  right: '→',
}

const POSITION_CLASS: Record<Direction, string> = {
  up: 'top-0 left-1/2 -translate-x-1/2',
  down: 'bottom-0 left-1/2 -translate-x-1/2',
  left: 'left-0 top-1/2 -translate-y-1/2',
  right: 'right-0 top-1/2 -translate-y-1/2',
}

export function FBDSelector({ categories, onChoose }: FBDSelectorProps) {
  const directions: Direction[] = ['up', 'down', 'left', 'right']

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-pixel text-[10px] text-slate-300 text-center">
        Choose a force direction on the free-body diagram to attack!
      </p>
      <div className="relative w-64 h-64 sm:w-72 sm:h-72">
        {/* the object at the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-md bg-slate-700 border-2 border-slate-400 flex items-center justify-center font-pixel text-[8px] text-slate-300">
            OBJ
          </div>
        </div>

        {directions.map((dir) => (
          <button
            key={dir}
            onClick={() => onChoose(dir)}
            className={`absolute ${POSITION_CLASS[dir]} flex flex-col items-center gap-1 group`}
          >
            <span className="text-3xl text-rose-400 group-hover:text-rose-300 group-hover:scale-125 transition-transform leading-none">
              {ARROW_GLYPH[dir]}
            </span>
            <span className="font-pixel text-[8px] text-slate-300 bg-slate-900/90 border border-slate-600 rounded px-1.5 py-1 max-w-[7.5rem] text-center leading-snug">
              {categories[dir].label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
