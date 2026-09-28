import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'

type OrderTime = 'now' | 'later'
type OrderMethod = 'delivery' | 'takeaway'
type PaymentMethod = 'cod' | 'bca' | 'card'

const paymentOptions: { id: PaymentMethod; label: string; hint: string; icon: string }[] = [
  { id: 'cod', label: 'Cash on Delivery', hint: 'Pay when your order arrives', icon: '💵' },
  { id: 'bca', label: 'BCA Virtual Account', hint: 'Bank transfer, confirmed instantly', icon: '🏦' },
  { id: 'card', label: 'Credit Card', hint: 'Visa, Mastercard, Amex', icon: '💳' },
]

export default function Checkout() {
  const { items, subtotal, taxFee, voucherDiscount, total } = useCart()
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true, state: { from: '/checkout' } })
    }
  }, [isLoggedIn, navigate])

  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', note: '' })
  const [orderTime, setOrderTime] = useState<OrderTime>('now')
  const [orderMethod, setOrderMethod] = useState<OrderMethod>('delivery')
  const [payment, setPayment] = useState<PaymentMethod>('cod')
  const [address, setAddress] = useState('')
  const [placed, setPlaced] = useState(false)

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPlaced(true)
  }

  if (!isLoggedIn) {
    return null
  }

  if (items.length === 0 && !placed) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-display font-bold text-3xl">Your cart is empty</h1>
        <p className="text-muted mt-3">Add some delicious dishes before checking out.</p>
        <button onClick={() => navigate('/order')} className="inline-block mt-6">
          <Button>Browse the menu</Button>
        </button>
      </div>
    )
  }

  if (placed) {
    return (
      <div className="container-x py-24 max-w-lg mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto text-2xl">✓</div>
        <h1 className="font-display font-bold text-3xl mt-6">Order placed!</h1>
        <p className="text-muted mt-3">
          Thanks {form.firstName || 'there'}, your order is being prepared. A confirmation has
          been sent to {form.email || 'your email'}.
        </p>
        <button onClick={() => navigate('/')} className="inline-block mt-8">
          <Button>Back to home</Button>
        </button>
      </div>
    )
  }

  return (
    <div className="container-x py-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 mb-10">
        <button onClick={() => navigate(-1)} aria-label="Go back" className="w-10 h-10 rounded-full bg-[#2b1c10] text-white flex items-center justify-center shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-center">Checkout</h1>
        <span className="w-10" aria-hidden="true" />
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
          <section className="bg-cream-2 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-lg mb-5">Contact details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="First name" value={form.firstName} onChange={set('firstName')} className="input-field" />
              <input required placeholder="Last name" value={form.lastName} onChange={set('lastName')} className="input-field" />
              <input required placeholder="Phone number" value={form.phone} onChange={set('phone')} className="input-field" />
              <input required type="email" placeholder="Email address" value={form.email} onChange={set('email')} className="input-field" />
            </div>
            <textarea placeholder="Note for the kitchen (optional)" rows={3} value={form.note} onChange={set('note')} className="input-field resize-none mt-4" />
          </section>

          <section className="bg-cream-2 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-lg mb-5">When &amp; how</h2>

            <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2.5">Order time</p>
            <div className="inline-flex bg-white dark:bg-[#1e1e1e] rounded-full p-1 mb-6">
              {(['now', 'later'] as OrderTime[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setOrderTime(v)}
                  className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                    orderTime === v ? 'bg-primary text-white' : 'text-ink/70'
                  }`}
                >
                  Order {v}
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2.5">Order method</p>
            <div className="inline-flex bg-white dark:bg-[#1e1e1e] rounded-full p-1">
              {([
                { id: 'delivery', label: 'Delivery' },
                { id: 'takeaway', label: 'Take away' },
              ] as { id: OrderMethod; label: string }[]).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setOrderMethod(m.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    orderMethod === m.id ? 'bg-primary text-white' : 'text-ink/70'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </section>

          <section className="bg-cream-2 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-lg mb-5">Payment method</h2>
            <div className="space-y-3">
              {paymentOptions.map((p) => (
                <label
                  key={p.id}
                  className={`flex items-center gap-4 text-sm bg-white dark:bg-[#1e1e1e] rounded-2xl px-5 py-4 cursor-pointer border-2 transition-colors ${
                    payment === p.id ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === p.id}
                    onChange={() => setPayment(p.id)}
                    className="accent-primary w-4 h-4 shrink-0"
                  />
                  <span className="text-xl shrink-0">{p.icon}</span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{p.label}</span>
                    <span className="block text-xs text-muted mt-0.5">{p.hint}</span>
                  </span>
                </label>
              ))}
            </div>
          </section>

          {orderMethod === 'delivery' && (
            <section className="bg-cream-2 rounded-3xl p-6 sm:p-8">
              <h2 className="font-display font-bold text-lg mb-5">Shipping address</h2>
              <div className="flex gap-3">
                <input
                  placeholder="Please type your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input-field"
                />
                <button type="button" className="px-6 rounded-xl bg-[#4a90e2] text-white text-sm font-semibold shrink-0">
                  Search
                </button>
              </div>
              <button type="button" className="text-danger text-sm font-medium mt-3 flex items-center gap-2">
                📍 Use your current location
              </button>
              <div className="h-56 rounded-2xl overflow-hidden mt-4 bg-white dark:bg-[#1e1e1e]">
                <iframe
                  title="Delivery location map"
                  className="w-full h-full border-0"
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(address || 'Bronx, NY 10463')}&output=embed`}
                />
              </div>
            </section>
          )}
        </form>

        {/* Order summary sidebar */}
        <aside className="bg-cream-2 rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24">
          <h2 className="font-display font-bold text-lg mb-5">Your order</h2>
          <ul className="space-y-4 max-h-64 overflow-y-auto pr-1">
            {items.map(({ item, qty }) => (
              <li key={item.id} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-white dark:bg-[#1e1e1e]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-fill" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-muted mt-0.5">Qty {qty}</p>
                </div>
                <span className="text-sm font-semibold shrink-0">${(item.price * qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2.5 text-sm border-t border-ink/10 pt-5">
            <div className="flex justify-between"><span className="text-muted">Subtotal</span><span className="font-semibold">${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted">Tax fee</span><span className="font-semibold">${taxFee.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted">Voucher</span><span className="font-semibold">-${voucherDiscount.toFixed(2)}</span></div>
            <div className="flex justify-between text-base pt-2 border-t border-ink/10"><span className="font-semibold">Total</span><span className="font-bold text-primary">${total.toFixed(2)}</span></div>
          </div>

          <Button type="submit" form="checkout-form" full size="lg" className="mt-6">Place order</Button>
          <p className="text-[11px] text-muted text-center mt-3">By placing your order you agree to our terms &amp; conditions.</p>
        </aside>
      </div>
    </div>
  )
}
