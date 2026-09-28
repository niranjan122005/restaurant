import type { MenuItem, Chef, Testimonial } from '../types'


const img = (n: number) => `/images/dish-${n}.png`

export const menuItems: MenuItem[] = [
  { id: 'spaghetti', name: 'Spaghetti', price: 12.05, rating: 4, image: img(1), category: 'Dinner', type: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'gnocchi', name: 'Gnocchi', price: 12.05, rating: 4, image: img(2), category: 'Dinner', type: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'ravioli', name: 'Ravioli', price: 12.05, rating: 4, image: img(3), category: 'Lunch', type: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'penne-alla-vodak', name: 'Penne Alla Vodak', price: 12.05, rating: 4, image: img(4), category: 'Lunch', type: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'risoto', name: 'Risoto', price: 12.05, rating: 4, image: img(5), category: 'Dinner', type: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'splitza-signature', name: 'Splitza Signature', price: 12.05, rating: 4, image: img(6), category: 'Dinner', type: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'linguine', name: 'Linguine', price: 12.05, rating: 4, image: img(2), category: 'Lunch', type: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'capellini', name: 'Capellini', price: 12.05, rating: 4, image: img(3), category: 'Dinner', type: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'fettuccine', name: 'Fettuccine', price: 12.05, rating: 4, image: img(4), category: 'Dinner', type: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'super-supreme', name: 'Super Supreme', price: 12.05, rating: 4, image: img(5), category: 'Dinner', type: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'veggie-garden', name: 'Veggie Garden', price: 12.05, rating: 4, image: img(1), category: 'Dessert', type: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'meat-lovers', name: 'Meat Lovers', price: 12.05, rating: 4, image: img(2), category: 'Dinner', type: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'tuna-delight', name: 'Tuna Delight', price: 12.05, rating: 4, image: img(3), category: 'Drink', type: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
  { id: 'extravaganzza', name: 'Extravaganzza', price: 12.05, rating: 4, image: img(4), category: 'Dinner', type: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.' },
]

export const chefs: Chef[] = [
  { id: 'betran', name: 'Betran Komar', role: 'Head chef', image: '/images/chef 1.png', bg: 'bg-[#d9d9d9]' },
  { id: 'ferry', name: 'Ferry Sauwi', role: 'Chef', image: '/images/chef 2.png', bg: 'bg-[#fbe0c4]' },
  { id: 'iswan', name: 'Iswan Dracho', role: 'Chef', image: '/images/chef 3.png', bg: 'bg-[#e7dcd6]' },
]

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Starla Virgoun', role: 'Financial advisor', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' },
  { id: 't2', name: 'Marcus Elian', role: 'Food blogger', quote: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
  { id: 't3', name: 'Amelia Cruz', role: 'Local guide', quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop' },
  { id: 't4', name: 'Daniel Khost', role: 'Regular customer', quote: 'The pasta here reminds me of my trip to Rome. Genuinely the best Italian spot in the neighborhood.', avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop' },
  { id: 't5', name: 'Priya Nandan', role: 'Event planner', quote: 'Booked this place for a client dinner and everyone was impressed. Service was quick and warm.', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop' },
  { id: 't6', name: 'Owen Castillo', role: 'Chef, verified diner', quote: 'As someone in the industry, I really respect how consistent the plating and flavor are here.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop' },
  { id: 't7', name: 'Sofia Lindqvist', role: 'Travel writer', quote: 'Cozy atmosphere, friendly staff, and a menu that keeps surprising me every visit.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop' },
  { id: 't8', name: 'Sai sudhar', role: 'Engneer', quote: 'Cozy atmosphere, friendly staff, and a menu that keeps surprising me every visit.', avatar: 'https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=1024x1024&w=is&k=20&c=y6ekaWOU98cltT8YkEn8dykF4-hLdCu3nNBGPvC4AG8=' },
]

export const categoryFilters: Array<'All catagory' | 'Dinner' | 'Lunch' | 'Dessert' | 'Drink'> = [
  'All catagory', 'Dinner', 'Lunch', 'Dessert', 'Drink',
]
