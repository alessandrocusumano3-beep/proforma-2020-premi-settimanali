import { GiftTopIcon } from '@heroicons/react/24/solid'
import SectionTitle from '../components/SectionTitle'
import {
  levelMilestones,
  weeklyReward
} from '../data/mockData'

function RewardsPage() {
  return (
    <main className="flex min-h-full flex-col gap-4 lg:gap-5">
      <SectionTitle
        eyebrow="Premi"
        title="I tuoi traguardi"
        subtitle="Completa settimane consecutive per sbloccare premi crescenti."
      />

      <section className="card-fade-in rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/20 sm:p-6">
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
          {levelMilestones.map((milestone) => (
            <article
              key={milestone.weeks}
              className={`rounded-2xl border px-4 py-3 ${
                milestone.current >= milestone.weeks
                  ? 'liquid-accent'
                  : 'border-zinc-800 bg-zinc-950'
              }`}
            >
              <p className="text-sm font-medium text-zinc-300">
                Premio per il tuo traguardo di {milestone.weeks} settimane di fila
              </p>
              <p className="mt-1 text-right text-xs font-semibold text-emerald-300">
                {milestone.current}/{milestone.weeks}
              </p>
            </article>
          ))}
        </div>

        <button className="btn-interactive mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3 text-sm font-bold text-zinc-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-600">
          <GiftTopIcon className="h-5 w-5" />
          {weeklyReward.available} ricompensa disponibile
        </button>
      </section>
    </main>
  )
}

export default RewardsPage
