import { FireIcon } from '@heroicons/react/24/solid'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/mockData'

function ProfilePage() {
  return (
    <main className="flex min-h-full flex-col gap-4">
      <SectionTitle
        eyebrow="Profilo"
        title={profile.name}
        subtitle="Dati personali, progressi e storico allenamenti."
      />

      <section className="card-fade-in rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg shadow-black/20 sm:p-5">
        <p className="text-sm text-zinc-500">Membership</p>
        <p className="text-base font-semibold text-zinc-100">{profile.membership}</p>
        <p className="mt-2 text-sm text-zinc-400">{profile.email}</p>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <article className="card-fade-in rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg shadow-black/20 sm:p-5" style={{ animationDelay: '70ms' }}>
          <p className="text-xs text-zinc-500">Allenamenti mese</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-100">{profile.workoutsThisMonth}</p>
        </article>
        <article className="card-fade-in rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg shadow-black/20 sm:p-5" style={{ animationDelay: '120ms' }}>
          <p className="text-xs text-zinc-500">Streak attuale</p>
          <p className="mt-1 flex items-center gap-1 text-2xl font-semibold text-emerald-300">
            <FireIcon className="h-6 w-6" /> {profile.currentStreak}
          </p>
        </article>
      </section>

      <section className="card-fade-in rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg shadow-black/20 sm:p-5" style={{ animationDelay: '170ms' }}>
        <h3 className="mb-3 font-semibold text-zinc-100">Storico allenamenti</h3>
        <ul className="space-y-2">
          {profile.history.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default ProfilePage
