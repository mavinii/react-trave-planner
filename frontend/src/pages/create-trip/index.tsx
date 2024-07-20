import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';
import { DateRange } from 'react-day-picker';

export function CreateTripPage() {

  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>();

  const [emailsToInvite, setEmailsToInvite] = useState([
    'joe@example.com',
  ])
  
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

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  // Add email to the list of invites
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
  
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    // Check if email is empty
    if(!email) { 
      return
    }

    // Check if email is already in the list
    if(emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  // Remove email from the list of invites
  function removeEmailFromInvites(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  // Create trip
  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log({
      destination,
      ownerName,
      ownerEmail,
      selectedDate,
      emailsToInvite
    })

    // navigate('/trips/123')
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
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
            setDestination={setDestination}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          {/* Guests input */}
          {isGuestsInputOpen && (
            <InviteGuestsStep 
              openGuestsModal={openGuestsModal}
              openConfirmTripModal={openConfirmTripModal}
              emailsToInvite={emailsToInvite}
            />
          )}
        </div>
          
        {/* Terms of use */}
        <p className="text-sm text-zinc-500">
          By using Travel Planner you altomatically agree with our <br /> <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="#">privacy policy</a>.
        </p>
      </div>

      {/* Modal Send Invites */}
      {isGuestsModalOpen && (
        <InviteGuestsModal 
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {/* Moral Confirmation Trip */}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
        closeConfirmTripModal={closeConfirmTripModal}
        createTrip={createTrip}
        setOwnerName={setOwnerName}
        setOwnerEmail={setOwnerEmail}
        />
      )}

    </div>
  )
}
