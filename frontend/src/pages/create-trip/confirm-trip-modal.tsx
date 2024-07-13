import { X, User, AtSign } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmaTripModalProps {
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip,
    }: ConfirmaTripModalProps) {
        
    return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
        <div className='w-[640px] bg-zinc-900 rounded-xl py-5 px-6 space-y-5 shadow-shape'>
            <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Confirm Trip</h2>
                    <button type='button' onClick={closeConfirmTripModal}>
                        <X className="size-5 text-zinc-400 hover:text-zinc-200" />
                    </button>
                </div>

                <p className='text-sm text-zinc-400 text-left'>
                    To conclute your trip to <strong className='font-semibold text-zinc-100'>Paris</strong> on <strong className='font-semibold text-zinc-100'>12/12/2022</strong>,
                    please fill the form below:
                </p>
            </div>

            <form onSubmitCapture={createTrip} className='space-y-3'>
                <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                    <User className='size-5 text-zinc-500' />
                    <input
                        name='name'
                        placeholder="Full name"
                        className="bg-transparent text-lg placeholder-zinc-500 outline-none flex-1"
                    />
                </div>

                <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                    <AtSign className='size-5 text-zinc-500' />
                    <input
                        type="email"
                        name='email'
                        placeholder="Your email"
                        className="bg-transparent text-lg placeholder-zinc-500 outline-none flex-1"
                    />
                </div>

                <button
                    type='submit'
                    className='bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-500 shadow-shape'>
                    CONFIRM TRIP
                </button>
            </form>
        </div>
    </div>
    )
}