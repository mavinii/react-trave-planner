import { MapPin, CalendarDays, Settings2, MoveRight } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepPropos {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput,
    }: DestinationAndDateStepPropos) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className="text-zinc-400 size-5" />
                <input disabled={isGuestsInputOpen} type="text" placeholder="Where is your next trip?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            {/* Input when */}
            <div className='flex items-center gap-2'>
                <CalendarDays className="text-zinc-400 size-5" />
                <input disabled={isGuestsInputOpen} type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
            </div>
            
            {/* Separator */}
            <div className='w-px h-6 bg-zinc-700' />

            {/* Button */}
            {isGuestsInputOpen ? (
                <Button variant="secondary" size="default" onClick={closeGuestsInput}>
                    Change place/date
                    <Settings2 className="size-5" />
                </Button>
            ) : (
                <Button variant="primary" size="default" onClick={openGuestsInput}>
                    Let's Go!
                    <MoveRight className="size-5" />
                </Button>
            )}
        </div>
    )
}