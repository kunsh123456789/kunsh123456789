import { useEffect } from 'react'
import { HUB_POSITION, MAP_HEIGHT, MAP_WIDTH, SUBJECTS } from '../../data/subjects'
import { useGameStore } from '../../store/gameStore'
import { PlayerSprite } from '../sprites/PlayerSprite'
import { StatBar } from '../ui/StatBar'

const TILE = 44

export function OverworldScreen() {
  const player = useGameStore((s) => s.player)
  const movePlayer = useGameStore((s) => s.movePlayer)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const map: Record<string, [number, number]> = {
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
        w: [0, -1],
        s: [0, 1],
        a: [-1, 0],
        d: [1, 0],
      }
      const dir = map[e.key]
      if (dir) {
        e.preventDefault()
        movePlayer(dir[0], dir[1])
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [movePlayer])

  if (!player) return null

  return (
    <div className="min-h-screen bg-[#0b1020] flex flex-col">
      {/* HUD */}
      <div className="pixel-border bg-slate-900/90 m-2 rounded-lg p-3 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <PlayerSprite appearance={player.appearance} size={36} pose="idle" />
          </div>
          <div>
            <div className="font-pixel text-[11px] text-white">{player.name}</div>
            <div className="font-pixel text-[9px] text-violet-300">Lv.{player.level} Adventurer</div>
          </div>
        </div>
        <div className="w-40">
          <StatBar label="HP" value={player.hp} max={player.maxHp} colorClass="bg-emerald-500" />
        </div>
        <div className="w-40">
          <StatBar label="XP" value={player.xp} max={player.xpToNext} colorClass="bg-blue-500" />
        </div>
        <div className="font-pixel text-xs text-amber-300 ml-auto">🪙 {player.gold}</div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-3 p-2 overflow-auto">
        {/* Map */}
        <div className="flex-1 flex items-center justify-center overflow-auto">
          <div
            className="relative pixel-border bg-[#132615] rounded-lg"
            style={{ width: MAP_WIDTH * TILE, height: MAP_HEIGHT * TILE }}
          >
            {/* grass tiles */}
            {Array.from({ length: MAP_WIDTH * MAP_HEIGHT }).map((_, i) => {
              const x = i % MAP_WIDTH
              const y = Math.floor(i / MAP_WIDTH)
              const checker = (x + y) % 2 === 0
              return (
                <div
                  key={i}
                  className={checker ? 'bg-[#173318]' : 'bg-[#152d16]'}
                  style={{
                    position: 'absolute',
                    left: x * TILE,
                    top: y * TILE,
                    width: TILE,
                    height: TILE,
                  }}
                />
              )
            })}

            {/* hub */}
            <div
              className="flex items-center justify-center text-2xl"
              style={{
                position: 'absolute',
                left: HUB_POSITION.x * TILE,
                top: HUB_POSITION.y * TILE,
                width: TILE,
                height: TILE,
              }}
              title="Home Hub"
            >
              🏠
            </div>

            {/* subject zones */}
            {SUBJECTS.map((subj) => (
              <div
                key={subj.id}
                className="flex flex-col items-center justify-center rounded-md animate-bob"
                style={{
                  position: 'absolute',
                  left: subj.mapPosition.x * TILE,
                  top: subj.mapPosition.y * TILE,
                  width: TILE,
                  height: TILE,
                  boxShadow: `0 0 14px 2px ${subj.glow}`,
                  background: `${subj.glow}`,
                }}
                title={subj.zoneName}
              >
                <span className="text-2xl leading-none">{subj.emoji}</span>
              </div>
            ))}

            {/* player */}
            <div
              className="flex items-end justify-center overflow-visible transition-all duration-150 ease-out z-10"
              style={{
                position: 'absolute',
                left: player.position.x * TILE,
                top: player.position.y * TILE,
                width: TILE,
                height: TILE,
              }}
            >
              <PlayerSprite appearance={player.appearance} size={28} pose="idle" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-72 space-y-3">
          <div className="pixel-border bg-slate-900/90 rounded-lg p-3">
            <div className="font-pixel text-[10px] text-slate-300 mb-2">Move With Arrows / WASD</div>
            <div className="grid grid-cols-3 gap-1 w-32 mx-auto">
              <div />
              <DPad onClick={() => movePlayer(0, -1)} label="↑" />
              <div />
              <DPad onClick={() => movePlayer(-1, 0)} label="←" />
              <DPad onClick={() => movePlayer(0, 1)} label="↓" />
              <DPad onClick={() => movePlayer(1, 0)} label="→" />
            </div>
          </div>

          <div className="pixel-border bg-slate-900/90 rounded-lg p-3">
            <div className="font-pixel text-[10px] text-slate-300 mb-3">AP Kingdoms</div>
            <div className="space-y-2">
              {SUBJECTS.map((subj) => {
                const m = player.mastery[subj.id]
                const acc = m.answered > 0 ? Math.round((m.correct / m.answered) * 100) : 0
                return (
                  <div key={subj.id} className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{subj.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-200 truncate">{subj.fullApName}</div>
                      <div className="text-xs text-slate-500">
                        {m.answered > 0 ? `${acc}% acc · ${m.battlesWon} won` : 'Not visited yet'}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DPad({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-700 hover:bg-slate-600 active:translate-y-0.5 border-b-4 border-slate-900 rounded-md h-10 font-pixel text-sm text-white"
    >
      {label}
    </button>
  )
}
