import { CircleCheck } from "lucide-react";

export function ActivityList() {
    return (
        <div className="space-y-8">
            
        {/* Days 1 */}
        <div className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">Day 17</span> 
            <span className="text-xs text-zinc-500">Saturday</span>
          </div>
          <p className="text-sm text-zinc-500">No activities added for this day.</p>
        </div>

        {/* Days 2 */}
        <div className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">Day 18</span> 
            <span className="text-xs text-zinc-500">Sunday</span>
          </div>

          <div className="space-y-2.5">
            <div className="px-4 py-2.5 rounded-xl bg-zinc-900 shadow-shape flex items-center gap-3">
              <CircleCheck className="text-lime-300 size-5"/>
              <span className="text-zinc-100">Kart Driven</span>
              <span className="text-zinc-400 text-sm ml-auto">16:00h</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-zinc-900 shadow-shape flex items-center gap-3">
              <CircleCheck className="text-lime-300 size-5"/>
              <span className="text-zinc-100">Gym with friends</span>
              <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
            </div>
          </div>
        </div>
        
      </div>
    )
}