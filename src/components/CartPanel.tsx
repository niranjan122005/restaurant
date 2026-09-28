import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import Button from './Button'

export default function CartPanel() {
  const { items, incrementItem, decrementItem, removeItem, subtotal, taxFee, voucherDiscount, applyVoucher, total } = useCart()
  const { isLoggedIn } = useAuth()
  const [code, setCode] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: location.pathname } })
      return
    }
    navigate('/checkout')
  }

  return (
    <aside className="bg-cream-2 rounded-3xl p-6 h-fit lg:sticky lg:top-24">
      <div className="bg-[#5b3fa0] text-white text-center font-semibold rounded-2xl py-3 mb-5">
        Order list
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-muted text-center py-8">Your cart is empty. Add something tasty!</p>
      ) : (
        <ul className="space-y-4">
          {items.map(({ item, qty }) => (
            <li key={item.id} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="text-danger shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="text-sm font-medium truncate">{item.name}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => decrementItem(item.id)}
                  className="w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center text-xs"
                >
                  −
                </button>
                <span className="text-sm w-4 text-center">{qty}</span>
                <button
                  onClick={() => incrementItem(item.id)}
                  className="w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center text-xs"
                >
                  +
                </button>
                <span className="text-sm font-semibold w-14 text-right">${(item.price * qty).toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <label className="text-xs font-medium text-muted">Voucher Code</label>
        <div className="flex gap-2 mt-1.5">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="FREETOEAT"
            className="input-field !py-2.5 !bg-white dark:!bg-[#242424] flex-1"
          />
          <button
            onClick={() => applyVoucher(code)}
            className="w-10 h-10 shrink-0 rounded-xl bg-[#4a90e2] text-white flex items-center justify-center"
            aria-label="Apply voucher"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-2.5 text-sm border-t border-ink/10 pt-5">
        <div className="flex justify-between"><span className="text-muted">Subtotal</span><span className="font-semibold text-primary">${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span className="text-muted">Tax fee</span><span className="font-semibold text-primary">${taxFee.toFixed(2)}</span></div>
        <div className="flex justify-between"><span className="text-muted">Voucher</span><span className="font-semibold text-primary">${voucherDiscount.toFixed(2)}</span></div>
        <div className="flex justify-between text-base pt-2 border-t border-ink/10"><span className="font-semibold">Total</span><span className="font-bold">${total.toFixed(2)}</span></div>
      </div>

      <Button
        variant="success"
        full
        className="mt-6"
        disabled={items.length === 0}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </aside>
  )
}
