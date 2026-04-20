import { FireIcon } from '@heroicons/react/24/solid'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/mockData'

function ProfilePage() {
  return (
    <main className="space-y-4 pb-4">
      <SectionTitle
        eyebrow="Profilo"
        title={profile.name}
        subtitle="Dati personali, progressi e storico allenamenti."
      />

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
        <p className="text-sm text-zinc-500">Membership</p>
        <p className="text-base font-semibold text-zinc-100">{profile.membership}</p>
        <p className="mt-2 text-sm text-zinc-400">{profile.email}</p>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-500">Allenamenti mese</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-100">{profile.workoutsThisMonth}</p>
        </article>
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-500">Streak attuale</p>
          <p className="mt-1 flex items-center gap-1 text-2xl font-semibold text-emerald-300">
            <FireIcon className="h-6 w-6" /> {profile.currentStreak}
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
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
