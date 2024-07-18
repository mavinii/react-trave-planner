import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { GuestsInvited } from "./guests-invited";
import { ActivityList } from "./activities-list";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal(){
    setIsCreateActivityModalOpen(true)
  }
  
  function closeCreateActivityModal(){
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />
        
      {/* Main content */}
      <main className="flex gap-16 px-4">

        {/* FIRST CONTAINER */}
        <div className="flex-1 space-y-6">
          
          {/* Title and Button */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Daily Activities</h2>
            <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-500 shadow-shape'>
              <Plus className="size-5" />
              New Activity
            </button>
          </div>

          {/* Daily Activitis Lists */}
          <ActivityList />
        </div>

        {/* SECOND CONTAINER */}
        <div className="w-80 space-y-6">

          {/* Important Links */}
          <ImportantLinks />

          {/* Separator */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Guests Invited */}
          <GuestsInvited />
 
        </div>

      </main>

      {/* Create Activity Modal */}
      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

    </div>
  )
}