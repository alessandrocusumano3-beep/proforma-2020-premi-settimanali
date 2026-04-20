import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { homeMenuItems, profile, weeklyReward, weeklyTraining } from '../data/mockData'

function HomePage() {
  const circles = Array.from({ length: weeklyTraining.target }).map((_, index) => index < weeklyTraining.completed)
  const welcomeMessage = profile.gender === 'female' ? 'Benvenuta in Proforma' : 'Benvenuto in Proforma'
  const quickAccessLinks = {
    'Prenotazione corsi': '/corsi',
    Premi: '/premi',
    Allenamenti: '/allenamenti',
    'Vantaggi per livello': '/dashboard',
  }

  return (
    <main className="page-fade-in flex min-h-full flex-col gap-6 pb-2 lg:gap-7">
      <section className="card-fade-in rounded-3xl border border-emerald-500/25 bg-zinc-900/70 px-5 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur">
        <p className="welcome-message-animated text-sm font-semibold tracking-wide text-emerald-200 sm:text-base">
          <span className="typing-soft">{welcomeMessage}</span>
        </p>
      </section>

      <section
        className="hero-slide-in relative overflow-hidden rounded-4xl border border-zinc-700/70 bg-zinc-900 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:p-8"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(9,9,11,0.74) 20%, rgba(9,9,11,0.38) 60%, rgba(16,185,129,0.26) 100%), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.26em] text-emerald-200/90">Proforma 2020</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Costruisci costanza.
            <br />
            Guadagna risultati.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-zinc-200/95 sm:text-base">
            Ogni allenamento conta: trasforma la tua routine in progresso reale, con premi e motivazione su misura.
          </p>
          <Link
            to="/allenamenti"
            className="btn-interactive mt-7 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_28px_rgba(52,211,153,0.35)] hover:bg-emerald-300"
          >
            Inizia oggi
          </Link>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
        <article className="card-fade-in card-interactive rounded-3xl border border-zinc-700 bg-zinc-100 p-6 text-zinc-900 shadow-lg shadow-black/20" style={{ animationDelay: '80ms' }}>
          <p className="text-3xl font-bold">
            {weeklyTraining.completed}/{weeklyTraining.target}{' '}
            <span className="text-lg font-semibold text-zinc-700">allenamenti</span>
          </p>
          <p className="mt-1 text-sm text-zinc-600">Progressi settimanali</p>

          <div className="mt-5 grid grid-cols-3 gap-3 sm:max-w-xs">
            {circles.map((done, idx) => (
              <div
                key={`circle-${idx}`}
                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                  done
                    ? 'border-emerald-500 bg-emerald-100 text-emerald-600 shadow-[0_0_16px_rgba(34,197,94,0.35)]'
                    : 'border-zinc-300 bg-white text-zinc-400'
                }`}
              >
                {done ? <CheckCircleIcon className="check-pop h-7 w-7" /> : null}
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-500 sm:max-w-sm">
            {weeklyTraining.days.map((day, idx) => (
              <span key={`${day.label}-${idx}`}>{day.label}</span>
            ))}
          </div>

          <Link
            to="/allenamenti"
            className="btn-interactive mt-5 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-emerald-600 hover:text-zinc-950"
          >
            Controlla i miei progressi
          </Link>
        </article>

        <article className="card-fade-in card-interactive rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/20 sm:p-6" style={{ animationDelay: '150ms' }}>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Ricompense</p>
          <p className="mt-4 text-2xl font-semibold text-zinc-100">{weeklyReward.label}</p>
          <p className="mt-2 text-sm text-zinc-400">Mantieni il ritmo e sblocca vantaggi esclusivi ogni settimana.</p>
          <Link
            to="/premi"
            className="liquid-active btn-interactive mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold text-emerald-200"
          >
            {weeklyReward.cta}
          </Link>
        </article>

        <article className="card-fade-in card-interactive rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/20 sm:p-6" style={{ animationDelay: '220ms' }}>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Accesso rapido</p>
          <ul className="mt-4 space-y-2 text-sm">
            {homeMenuItems.slice(1, 5).map((item) => (
              <li key={item}>
                <Link
                  to={quickAccessLinks[item] ?? '/'}
                  className="btn-interactive flex rounded-xl border border-zinc-800 bg-zinc-800/60 px-3 py-2 text-zinc-200 hover:border-emerald-400/40 hover:text-emerald-100"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default HomePage
