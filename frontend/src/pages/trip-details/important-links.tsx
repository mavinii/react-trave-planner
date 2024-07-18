import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
    return(
        <div className="space-y-6">
        <h2 className="font-semibold text-xl">Important Links</h2>

        <div className="space-y-5">
            
          {/* Link 1 */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 truncate">AirBnb Reservation Example</span>
              <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
                www.airbnb.com.br/rooms/123456
              </a>
            </div>
            <Link2 className="text-zinc-400 size-5 shrink-0" />
          </div>

          {/* Link 2 */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 truncate">Concert Reservation Example</span>
              <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
                www.concert.com.br/rooms/123456
              </a>
            </div>
            <Link2 className="text-zinc-400 size-5 shrink-0" />
          </div>              
        </div>

        <Button variant="secondary" size="full">
            <Plus className="size-5" />
            Add new link
        </Button>
      </div>
    )
}