import { useMemo, useState } from 'react'
import FoodCard from '../components/FoodCard'
import CategoryTabs from '../components/CategoryTabs'
import CartPanel from '../components/CartPanel'
import { menuItems, categoryFilters } from '../data/menu'
import type { MenuType } from '../types'

const TYPE_ORDER: MenuType[] = ['Pasta', 'Pizza']

export default function OrderOnline() {
  const [category, setCategory] = useState<string>('All catagory')

  const filtered = useMemo(
    () => (category === 'All catagory' ? menuItems : menuItems.filter((m) => m.category === category)),
    [category],
  )

  const grouped = useMemo(() => {
    return TYPE_ORDER.map((type) => ({
      type,
      items: filtered.filter((m) => m.type === type),
    })).filter((group) => group.items.length > 0)
  }, [filtered])

  return (
    <div className="container-x py-14">
      <h1 className="font-display font-bold text-4xl sm:text-5xl text-center">Menu</h1>

      <div className="mt-10">
        <CategoryTabs categories={categoryFilters} active={category} onChange={setCategory} />
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10 mt-12 items-start">
        <div className="space-y-14">
          {grouped.length === 0 && (
            <p className="text-center text-muted py-10">No dishes found in this category yet.</p>
          )}
          {grouped.map((group) => (
            <div key={group.type}>
              <h2 className="uppercase tracking-wide font-bold text-sm border-b-2 border-primary inline-block pb-1 mb-6">
                {group.type}
              </h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <FoodCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <CartPanel />
      </div>
    </div>
  )
}
