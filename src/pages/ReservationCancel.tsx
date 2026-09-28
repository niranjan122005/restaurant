import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Button from '../components/Button'
import ModalPortal from '../components/ModalPortal'

interface LocationState {
  bookingId?: number
}

export default function ReservationCancel() {
  const { state } = useLocation() as { state: LocationState | null }
  const navigate = useNavigate()
  const [cancelled, setCancelled] = useState(false)
  const bookingId = state?.bookingId ?? 123456

  return (
    <ModalPortal>
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto py-10 px-4">
      <div className="max-w-lg mx-auto bg-white dark:bg-[#1e1e1e] rounded-3xl relative">
        <Link
          to="/"
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-cream-2 dark:bg-white/10 hover:bg-cream dark:hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </Link>

        <div className="p-8 pt-14">
          <Logo />

          {cancelled ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-danger/10 text-danger flex items-center justify-center mx-auto text-2xl">✕</div>
              <h1 className="font-display font-bold text-2xl mt-5">Reservation cancelled</h1>
              <p className="text-muted mt-2 text-sm">Booking #{bookingId} has been cancelled. We hope to see you another time.</p>
              <Link to="/reservation" className="inline-block mt-6">
                <Button>Book a new table</Button>
              </Link>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-danger/10 text-danger flex items-center justify-center mx-auto text-2xl">!</div>
              <h1 className="font-display font-bold text-2xl mt-5">Cancel this reservation?</h1>
              <p className="text-muted mt-2 text-sm">
                Booking #{bookingId} will be cancelled. This action can't be undone.
              </p>
              <div className="flex gap-4 mt-8 justify-center">
                <button onClick={() => navigate(-1)} className="btn btn-outline px-6 py-3 text-sm">
                  Go back
                </button>
                <button onClick={() => setCancelled(true)} className="btn bg-danger text-white hover:opacity-90 px-6 py-3 text-sm">
                  Yes, cancel it
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </ModalPortal>
  )
}
