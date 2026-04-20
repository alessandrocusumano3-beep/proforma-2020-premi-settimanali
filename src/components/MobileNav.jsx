import {
  CalendarDaysIcon,
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
  { to: '/corsi', label: 'Corsi', icon: CalendarDaysIcon },
  { to: '/profilo', label: 'Profilo', icon: UserCircleIcon },
]

function MobileNav() {
  return (
    <>
      <aside className="nav-soft-in hidden lg:flex lg:min-h-screen lg:w-64 lg:flex-col lg:justify-between lg:rounded-3xl lg:border lg:border-zinc-800 lg:bg-zinc-900/90 lg:p-5 lg:backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Proforma 2020</p>
          <p className="mt-1 text-sm text-zinc-400">Longevity & Fitness Hub</p>
          <ul className="mt-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={`desktop-${item.to}`}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                        isActive
                          ? 'liquid-active text-emerald-300'
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
        </div>
        <p className="text-xs text-zinc-500">Allenati con costanza, sblocca premi.</p>
      </aside>

      <nav className="nav-soft-in fixed inset-x-4 bottom-4 z-40 rounded-2xl border border-zinc-800 bg-zinc-900/90 p-2 backdrop-blur lg:hidden">
        <ul className="grid grid-cols-5 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs transition ${
                      isActive
                        ? 'liquid-active text-emerald-300'
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
    </>
  )
}

export default MobileNav
