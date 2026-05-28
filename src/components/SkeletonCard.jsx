export default function SkeletonCard({ type = 'coin' }) {
  if (type === 'news') {
    return (
      <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
        <div className="h-44 skeleton rounded-none" />
        <div className="flex flex-col gap-3 p-4">
          <div className="h-3.5 skeleton rounded-md w-full" />
          <div className="h-3.5 skeleton rounded-md w-4/5" />
          <div className="h-2.5 skeleton rounded-md w-3/5 mt-1" />
          <div className="h-2.5 skeleton rounded-md w-2/5 mt-auto pt-2 border-t border-slate-800/40" />
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 skeleton rounded-full" />
          <div className="flex flex-col gap-1.5">
            <div className="h-3.5 skeleton rounded w-20" />
            <div className="h-2.5 skeleton rounded w-10" />
          </div>
        </div>
        <div className="h-6 skeleton rounded-md w-10" />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="h-5 skeleton rounded w-28" />
        <div className="h-3.5 skeleton rounded w-16" />
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
        <div className="flex flex-col gap-1">
          <div className="h-2 skeleton rounded w-14" />
          <div className="h-3 skeleton rounded w-20" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-2 skeleton rounded w-14" />
          <div className="h-3 skeleton rounded w-20" />
        </div>
      </div>
    </div>
  )
}
