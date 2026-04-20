import { GiftTopIcon } from '@heroicons/react/24/solid'
import SectionTitle from '../components/SectionTitle'
import {
  levelMilestones,
  weeklyReward
} from '../data/mockData'

function RewardsPage() {
  return (
    <main className="space-y-4 pb-6">
      <SectionTitle
        eyebrow="Premi"
        title="I tuoi traguardi"
        subtitle="Completa settimane consecutive per sbloccare premi crescenti."
      />

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
        <div className="space-y-2">
          {levelMilestones.map((milestone) => (
            <article
              key={milestone.weeks}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3"
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

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3 text-sm font-bold text-zinc-950 transition hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]">
          <GiftTopIcon className="h-5 w-5" />
          {weeklyReward.available} ricompensa disponibile
        </button>
      </section>
    </main>
  )
}

export default RewardsPage
