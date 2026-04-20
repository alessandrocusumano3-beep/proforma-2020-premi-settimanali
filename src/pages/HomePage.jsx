import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { homeMenuItems, weeklyReward, weeklyTraining } from '../data/mockData'

function HomePage() {
  const circles = Array.from({ length: weeklyTraining.target }).map((_, index) => index < weeklyTraining.completed)

  return (
    <main className="space-y-4 pb-6">
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4">
        <ul className="space-y-1 text-sm">
          {homeMenuItems.map((item, index) => (
            <li
              key={item}
              className={`${
                item === 'Premi'
                  ? 'font-semibold text-emerald-300'
                  : 'text-zinc-400'
              } ${index === 0 ? 'text-zinc-200' : ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.48), rgba(10,10,10,0.8)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mt-40 flex items-center justify-between">
          <p className="text-xl font-semibold text-zinc-100">{weeklyReward.label}</p>
          <Link
            to="/premi"
            className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/35"
          >
            {weeklyReward.cta}
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-700 bg-zinc-100 p-5 text-zinc-900">
        <p className="text-2xl font-bold">
          {weeklyTraining.completed}/{weeklyTraining.target}{' '}
          <span className="text-lg font-semibold text-zinc-700">
            allenamenti questa settimana
          </span>
        </p>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {circles.map((done, idx) => (
            <div
              key={`circle-${idx}`}
              className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                done
                  ? 'border-emerald-500 bg-emerald-100 text-emerald-600 shadow-[0_0_16px_rgba(34,197,94,0.35)]'
                  : 'border-zinc-300 bg-white text-zinc-400'
              }`}
            >
              {done ? <CheckCircleIcon className="h-7 w-7" /> : null}
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-500">
          {weeklyTraining.days.map((day, idx) => (
            <span key={`${day.label}-${idx}`}>{day.label}</span>
          ))}
        </div>

        <Link
          to="/allenamenti"
          className="mt-5 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-emerald-600 hover:text-zinc-950"
        >
          Controlla i miei progressi
        </Link>
      </section>
    </main>
  )
}

export default HomePage
