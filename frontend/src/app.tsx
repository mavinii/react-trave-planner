import { MapPin, CalendarDays, MoveRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react';
import { useState } from 'react';

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  
  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  } 

  return (
    <div className="h-screen flex items-center justify-center bg-default bg-center">
      <div className="max-w-3xl w-full text-center space-y-10">

        {/* Logo and Title */}
        <div className='flex flex-col items-center gap-3" '>
          <img src="/logo.svg" alt="Travel Planner" className='w-72'/>
          <p className="text-zinc-300 text-lg">Invite your friends and plan your next trip.</p>
        </div>
        
        {/* Input where */}
        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className="text-zinc-400 size-5"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Where is your next trip?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            {/* Input when */}
            <div className='flex items-center gap-2'>
              <CalendarDays className="text-zinc-400 size-5"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
            </div>

            <div className='w-px h-6 bg-zinc-700'/>

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
              </button>)}
          </div>

          { isGuestsInputOpen && (
            // Guests Input 
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
                <UserRoundPlus className="text-zinc-400 size-5" />
                <span className="text-zinc-400 text-lg flex-1">Who are you going with?</span>
              </button>

              <div className='w-px h-6 bg-zinc-700' />

              <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-500 shadow-shape'>
                Confirm!
                <MoveRight className="size-5" />
              </button>
            </div>
          )}
        </div>
          
        {/* Terms of use */}
        <p className="text-sm text-zinc-500">
          By using Travel Planner you altomatically agree with our <br /> <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="#">privacy policy</a>.
        </p>

        {/* Modal */}
        {isGuestsModalOpen && (
          <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] bg-zinc-900 rounded-xl py-5 px-6 space-y-5 shadow-shape'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold'>Send invites</h2>
                  <button type='button' onClick={closeGuestsModal}>
                    <X className="size-5 text-zinc-400 hover:text-zinc-200" />
                  </button>
                </div>

                <p className='text-sm text-zinc-400 text-left'>
                  Invite friends by email, e.g john@example.com
                </p>
              </div>

              {/* Emails boxes */}
              <div className='flex flex-wrap gap-2'>
                <div className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                  <span className='text-zinc-400'>john.doe@gmail.com</span>
                  <button type='button'>
                    <X className="size-4 text-zinc-400 hover:text-zinc-200" />
                  </button>
                </div>

                <div className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                  <span className='text-zinc-400'>doe@example.com</span>
                  <button type='button'>
                    <X className="size-4 text-zinc-400 hover:text-zinc-200" />
                  </button>
                </div>

                <div className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                  <span className='text-zinc-400'>12345asdaasda@example.com</span>
                  <button type='button'>
                    <X className="size-4 text-zinc-400 hover:text-zinc-200" />
                  </button>
                </div>                
              </div>

              {/* Separator */}
              <div className='w-full h-px bg-zinc-800'/>

              {/* Add email */}
              <form className='p-2.5 bg-zinc-950 shadow-shape rounded-lg flex items-center gap-2'>
                <div className='px-2 flex flex-1 items-center gap-2'>
                  <AtSign className='size-5 text-zinc-500' />
                  <input type="text" placeholder="john.doe@example.com" className="bg-transparent text-lg placeholder-zinc-500 outline-none flex-1" />
                </div>

                <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-500 shadow-shape'>
                  SEND
                  <Plus className="size-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
