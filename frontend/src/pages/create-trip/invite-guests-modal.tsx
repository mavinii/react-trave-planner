import { X, AtSign, Plus } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"

interface InviteGuestsModalProps {
    closeGuestsModal: () => void
    emailsToInvite: string[]
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
    removeEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal({ 
    closeGuestsModal,
    emailsToInvite, 
    addNewEmailToInvite, 
    removeEmailFromInvites,
    }: InviteGuestsModalProps) {

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
        <div className='w-[640px] bg-zinc-900 rounded-xl py-5 px-6 space-y-5 shadow-shape'>
            <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Send Invites</h2>
                    <button type='button' onClick={closeGuestsModal}>
                        <X className="size-5 text-zinc-400 hover:text-zinc-200" />
                    </button>
                </div>

                <p className='text-sm text-zinc-400 text-left'>
                    Invite friends by email, e.g john@example.com
                </p>
            </div>

            {/* Email boxes */}
            <div className='flex flex-wrap gap-2'>
                {emailsToInvite.map(email => {
                    return (
                        <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                            <span className='text-zinc-400'>{email}</span>
                            <button type='button' onClick={() => removeEmailFromInvites(email)}>
                                <X className="size-4 text-zinc-400 hover:text-zinc-200" />
                            </button>
                        </div>
                    )
                })}
            </div>

            {/* Separator */}
            <div className='w-full h-px bg-zinc-800' />

            {/* Add email form and button */}
            <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 shadow-shape rounded-lg flex items-center gap-2'>
                <div className='px-2 flex flex-1 items-center gap-2'>
                    <AtSign className='size-5 text-zinc-500' />
                    <input
                        type="email"
                        name='email'
                        placeholder="john.doe@example.com"
                        className="bg-transparent text-lg placeholder-zinc-500 outline-none flex-1"
                    />
                </div>

                <Button type='submit' variant="primary" size="default">
                    INVITE
                    <Plus className="size-5" />
                </Button>
            </form>
        </div>
    </div>
  )
}