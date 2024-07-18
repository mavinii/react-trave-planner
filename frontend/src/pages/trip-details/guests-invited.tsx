import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function GuestsInvited() {
    return (
        <div className="space-y-6">
        <h2 className="font-semibold text-xl">Guests Invited</h2>

        <div className="space-y-5">

          {/* Guest Lists */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 truncate">John Due</span>
              <span className="block text-sm text-zinc-400">
                john.due@example.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          </div>

          {/* Link 2 */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 truncate">Marcos Oliveira</span>
              <span className="block text-sm text-zinc-400">
                example.1@example.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          </div>

          {/* Link 3 */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 truncate">Lorem Ipsum</span>
              <span className="block text-sm text-zinc-400">
                lorem.ipsum@example.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          </div>       
        </div>            

        <Button variant="secondary" size="full">
          <UserCog className="size-5" />
          Guests Settings
        </Button>
      </div>
    )
}