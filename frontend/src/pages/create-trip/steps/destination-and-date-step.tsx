import { MapPin, CalendarDays, Settings2, MoveRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepPropos {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
    setDestination: (destination: string) => void
    selectedDate: DateRange | undefined
    setSelectedDate: (date: DateRange | undefined) => void
}

export function DestinationAndDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput,
    setDestination,
    selectedDate,
    setSelectedDate,
    }: DestinationAndDateStepPropos) {
        const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

        function openDatePicker() {
            return setIsDatePickerOpen(true)
        }

        function closeDatePicker() {
            return setIsDatePickerOpen(false)
        }

        // Displayed Date
        const displayedDate = selectedDate && selectedDate.from && selectedDate.to ? 
        `${format(selectedDate.from, 'MMM d')} - ${format(selectedDate.to, 'MMM d')}` 
        : null

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className="text-zinc-400 size-5" />
                <input 
                    disabled={isGuestsInputOpen} 
                    type="text" 
                    placeholder="Where is your next trip?" 
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                    onChange={(event) => setDestination(event.target.value)}
                />
            </div>

            {/* Input when */}
            <button onClick={openDatePicker} disabled={isGuestsInputOpen} className='flex items-center gap-2 text-left'>
                <CalendarDays className="text-zinc-400 size-5" />
                <span className="text-lg text-zinc-400 w-40">
                    {displayedDate || 'When?'}
                </span>
            </button>

            {/* Date Picker */}
            {isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                    <div className='bg-zinc-900 rounded-xl py-5 px-6 space-y-5 shadow-shape'>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-lg font-semibold'>Select the Date</h2>
                                <button type='button' onClick={closeDatePicker}>
                                    <X className="size-5 text-zinc-400 hover:text-zinc-200" />
                                </button>
                            </div>

                            <p className='text-sm text-zinc-400 text-left'>
                                Select the start and the end.
                            </p>
                        </div>

                        <DayPicker
                            mode="range"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="custom-daypicker"
                        />
                    </div>
                </div>
            )}

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