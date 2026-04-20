import { ClockIcon, UserIcon } from '@heroicons/react/24/outline'
import SectionTitle from '../components/SectionTitle'
import { courses } from '../data/mockData'

function CoursesPage() {
  return (
    <main className="space-y-4 pb-4">
      <SectionTitle
        eyebrow="Allenamenti"
        title="Prenota la tua prossima sessione"
        subtitle="Completa il check-in e avvicinati al premio settimanale."
      />
      {courses.map((course) => (
        <article
          key={course.id}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg shadow-black/10"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">{course.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{course.level}</p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-300">
              {course.spots} posti
            </span>
          </div>
          <div className="mt-3 space-y-2 text-sm text-zinc-400">
            <p className="flex items-center gap-2">
              <UserIcon className="h-4 w-4 text-emerald-300" /> {course.coach}
            </p>
            <p className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-emerald-300" /> {course.time}
            </p>
          </div>
          <button className="mt-4 w-full rounded-xl bg-emerald-500 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]">
            Prenota corso
          </button>
        </article>
      ))}
    </main>
  )
}

export default CoursesPage
