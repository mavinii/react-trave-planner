import { UserRoundPlus, MoveRight } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestsModal: () => void
    openConfirmTripModal: () => void
    emailsToInvite: string[]
}

export function InviteGuestsStep({
    openGuestsModal,
    openConfirmTripModal,
    emailsToInvite,
    } : InviteGuestsStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
                <UserRoundPlus className="text-zinc-400 size-5" />

                {/* Number of guests invited */}
                {emailsToInvite.length > 0 ? (
                    <span className="text-zinc-100 text-lg flex-1">
                        {emailsToInvite.length} people invited
                    </span>
                ) : (
                    <span className="text-zinc-400 text-lg flex-1">Who are you going with?</span>
                )}
            </button>

            <div className='w-px h-6 bg-zinc-700' />

            <button onClick={openConfirmTripModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-500 shadow-shape'>
                Confirm!
                <MoveRight className="size-5" />
            </button>
        </div>
    )
}
