import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

      {/* Header */}
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

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 shadow-shape">
            Change place/date
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>
        
      {/* Main content */}
      <main className="flex gap-16 px-4">

        {/* TODO: First Container */}
        <div className="flex-1 space-y-6">
          
          {/* Title and Button */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Daily Activities</h2>
            <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-500 shadow-shape'>
              <Plus className="size-5" />
              New Activity
            </button>
          </div>

          {/* Daily Activitis Lists */}
          <div className="space-y-8">
            
            {/* Days X */}
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Day 17</span> 
                <span className="text-xs text-zinc-500">Saturday</span>
              </div>
              <p className="text-sm text-zinc-500">No activities added for this day.</p>
            </div>

            {/* Days X */}
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Day 18</span> 
                <span className="text-xs text-zinc-500">Sunday</span>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 rounded-xl bg-zinc-900 shadow-shape flex items-center gap-3">
                  <CircleCheck className="text-lime-300 size-5"/>
                  <span className="text-zinc-100">Kart Driven</span>
                  <span className="text-zinc-400 text-sm ml-auto">16:00h</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-zinc-900 shadow-shape flex items-center gap-3">
                  <CircleCheck className="text-lime-300 size-5"/>
                  <span className="text-zinc-100">Gym with friends</span>
                  <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TODO: Second Container */}
        <div className="w-80 space-y-6">

          {/* Important Links */}
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

            <button className="bg-zinc-800 text-zinc-200 rounded-lg w-full px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 shadow-shape">
              <Plus className="size-5" />
              Add new link
            </button>  
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Guests Info */}
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Guests Invited</h2>

            <div className="space-y-5">

              {/* Guest Lists */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 truncate">John Due</span>
                  <span className="block text-sm text-zinc-400">
                    john.due@example.com
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              </div>

              {/* Link 2 */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 truncate">Marcos Oliveira</span>
                  <span className="block text-sm text-zinc-400">
                    example.1@example.com
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              </div>

              {/* Link 3 */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 truncate">Lorem Ipsum</span>
                  <span className="block text-sm text-zinc-400">
                    lorem.ipsum@example.com
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              </div>       
            </div>            

            <button className="bg-zinc-800 text-zinc-200 rounded-lg w-full px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 shadow-shape">
              <UserCog className="size-5" />
              Guests Settings
            </button>  
          </div>
        </div>

      </main>
    </div>
  )
}