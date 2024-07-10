import { MapPin, CalendarDays, MoveRight, UserRoundPlus, Settings2 } from 'lucide-react';
import { useState } from 'react';

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  // const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  
  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
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
              <div className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className="text-zinc-400 size-5" />
                <input type="text" placeholder="Who are you going with?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              </div>

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
      </div>
    </div>
  )
}
