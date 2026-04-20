import {
  GiftIcon,
  HomeIcon,
  TrophyIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/allenamenti', label: 'Allenamenti', icon: TrophyIcon },
  { to: '/premi', label: 'Premi', icon: GiftIcon },
  { to: '/profilo', label: 'Profilo', icon: UserCircleIcon },
]

function MobileNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-zinc-800 bg-zinc-900/90 p-2 backdrop-blur">
      <ul className="grid grid-cols-4 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs transition ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 shadow-[0_0_18px_rgba(34,197,94,0.35)]'
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-emerald-200'
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MobileNav
