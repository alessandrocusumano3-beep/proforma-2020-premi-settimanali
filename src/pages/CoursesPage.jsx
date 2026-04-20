import { PlayIcon } from '@heroicons/react/24/solid'
import SectionTitle from '../components/SectionTitle'
import { courses } from '../data/mockData'

function CoursesPage() {
  return (
    <main className="flex min-h-full flex-col gap-4">
      <SectionTitle
        eyebrow="Allenamenti"
        title="Corsi Esclusivi Les Mills"
        subtitle="L'unico centro affiliato ufficiale Les Mills nelle province di Pavia e Lodi."
      />

      <section className="card-fade-in rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/20 sm:p-6">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1600&q=80&v=pro-hero-course"
            alt="Corsi Les Mills"
            className="h-56 w-full object-cover sm:h-64"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button className="btn-interactive rounded-full bg-zinc-900/80 p-4 text-zinc-100 backdrop-blur-sm">
              <PlayIcon className="h-8 w-8" />
            </button>
          </div>
        </div>

        <h3 className="mt-5 text-3xl font-bold leading-tight text-zinc-100">
          L'Unica Les Mills di Pavia e Lodi
        </h3>
        <p className="mt-3 text-lg leading-relaxed text-zinc-300">
          Programmi certificati, aggiornati trimestralmente dai coreografi internazionali.
        </p>
      </section>

      <div className="grid gap-4 xl:grid-cols-3">
        {courses.map((course, idx) => (
          <article
            key={course.id}
            className="card-fade-in overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/20"
            style={{ animationDelay: `${idx * 70}ms` }}
          >
            <img
              src={course.image}
              alt={course.name}
              className="h-56 w-full object-cover sm:h-60"
            />
            <div className="p-5 sm:p-6">
              <h3 className="text-4xl font-bold text-emerald-400">{course.name}</h3>
              <p className="mt-3 text-xl leading-relaxed text-zinc-200">{course.description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="card-fade-in rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/20 sm:p-6">
        <h3 className="text-2xl font-bold leading-tight text-zinc-100">
          Perche scegliere i nostri corsi Les Mills:
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-lg text-zinc-300">
          <li>Unici nel territorio con programmi certificati Les Mills</li>
          <li>Istruttori formati secondo rigidi standard internazionali</li>
          <li>Aggiornamenti trimestrali con le ultime release</li>
          <li>Adatti a tutti i livelli, dal principiante all'avanzato</li>
        </ul>

        <button className="btn-interactive mt-6 w-full rounded-2xl bg-emerald-500 py-3 text-base font-bold text-zinc-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-600 sm:w-auto sm:px-8">
          SCOPRI DI PIU
        </button>
      </section>
    </main>
  )
}

export default CoursesPage
