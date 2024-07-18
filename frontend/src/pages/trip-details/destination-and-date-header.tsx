import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader(){
    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        
        {/* Input where */}
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianopolis, Brazil</span>
        </div>

        {/* Where, separator and change place btn */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="text-zinc-400 size-5" />
            <span className="text-zinc-100">19 to 25 April</span>
          </div>

          <div className="w-px h-6 bg-zinc-700" />

          <Button variant="secondary">
            Change place/date
            <Settings2 className="size-5" />
          </Button>
        </div>
      </div>
    )
}