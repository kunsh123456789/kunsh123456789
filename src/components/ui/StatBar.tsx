interface StatBarProps {
  label: string
  value: number
  max: number
  colorClass: string
  showNumbers?: boolean
}

export function StatBar({ label, value, max, colorClass, showNumbers = true }: StatBarProps) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : 0
  return (
    <div className="w-full">
      <div className="flex justify-between items-baseline mb-1 px-0.5">
        <span className="font-pixel text-[10px] tracking-wide text-slate-300">{label}</span>
        {showNumbers && (
          <span className="font-pixel text-[9px] text-slate-400">
            {Math.max(0, Math.round(value))}/{max}
          </span>
        )}
      </div>
      <div className="h-4 w-full bg-slate-900 border-2 border-slate-700 rounded-sm overflow-hidden">
        <div
          className={`h-full ${colorClass} transition-all duration-500 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
