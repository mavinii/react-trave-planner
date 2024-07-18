import { MapPin, CalendarDays, Settings2, MoveRight } from "lucide-react";

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
                <button onClick={closeGuestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 shadow-shape'>
                    Change place/date
                    <Settings2 className="size-5" />
                </button>
            ) : (
                <button onClick={openGuestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-500 shadow-shape'>
                    Let's Go!
                    <MoveRight className="size-5" />
                </button>
            )}
        </div>
    )
}