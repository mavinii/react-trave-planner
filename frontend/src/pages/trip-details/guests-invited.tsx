import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function GuestsInvited() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Guests Invited</h2>

      <div className="space-y-5">

        {/* Guests Lists */}
        {participants.map((participant, index) => {
          return (
            <div key={participant.id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100 truncate">{participant.name ?? `Guest ${index}`}</span>
                <span className="block text-sm text-zinc-400">{participant.email}</span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className="size-5 text-lime-400" />
              ) : (
                <CircleDashed className="size-5 text-zinc-400" />
              )}
            </div>
          )
        })}            
      </div>            

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Guests Settings
      </Button>
    </div>
  )
}