import {
  CheckCircleIcon,
  CheckIcon,
  FireIcon,
} from '@heroicons/react/24/solid'
import { useState } from 'react'
import {
  progressCalendar,
  progressSummary,
  streakData,
  weeklyTraining,
} from '../data/mockData'

function DashboardPage() {
  const [completed, setCompleted] = useState(weeklyTraining.completed)
  const [days, setDays] = useState(weeklyTraining.days)
  const [streak, setStreak] = useState(streakData.consecutiveWeeks)
  const [weekCompleted, setWeekCompleted] = useState(false)
  const [animateTop, setAnimateTop] = useState(false)
  const [checkinPulse, setCheckinPulse] = useState(false)
  const [checkAnimationIndex, setCheckAnimationIndex] = useState(null)

  const target = weeklyTraining.target
  const progressPercent = (completed / target) * 100

  function handleWorkoutCheckIn() {
    if (completed >= target) return
    const nextIndex = days.findIndex((day) => !day.done)
    if (nextIndex === -1) return

    const updated = days.map((day, idx) =>
      idx === nextIndex ? { ...day, done: true } : day
    )
    setDays(updated)
    const nextCompleted = completed + 1
    setCompleted(nextCompleted)
    setAnimateTop(true)
    setCheckinPulse(true)
    setCheckAnimationIndex(nextIndex)
    window.setTimeout(() => setAnimateTop(false), 950)
    window.setTimeout(() => setCheckinPulse(false), 650)
    window.setTimeout(() => setCheckAnimationIndex(null), 550)

    if (nextCompleted === target && !weekCompleted) {
      setWeekCompleted(true)
      setStreak((prev) => prev + 1)
    }
  }

  function handleNextWeek() {
    if (completed < target) {
      setStreak(0)
    }
    setCompleted(0)
    setDays(weeklyTraining.days.map((day) => ({ ...day, done: false })))
    setWeekCompleted(false)
  }

  return (
    <main className="space-y-4 pb-6">
      <header>
        <h1 className="text-2xl font-semibold text-zinc-100">I miei progressi</h1>
      </header>
      <section
        className={`rounded-3xl border bg-zinc-900 p-5 transition ${
          animateTop ? 'glow-green border-emerald-500/60' : 'border-zinc-800'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-500/10 text-xl font-bold text-emerald-300">
              {completed}/{target}
            </div>
            <p className="max-w-[120px] text-sm text-zinc-300">
              {progressSummary.weeklyVisitsLabel}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-zinc-200">
              {streak} settimana di fila
            </p>
            <div className="mt-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
              <CheckIcon className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="mt-4 h-3 rounded-full bg-zinc-800 p-[2px]">
          <div
            className="progress-fill h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-1000"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="mt-4 grid grid-cols-7 gap-2.5">
          {days.map((day, idx) => (
            <div key={`${day.label}-${idx}`} className="text-center">
              <div
                className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full border text-xs transition ${
                  day.done
                    ? 'scale-105 border-emerald-400 bg-emerald-500/15 text-emerald-300 shadow-[0_0_16px_rgba(34,197,94,0.35)]'
                    : 'border-zinc-700 text-zinc-500'
                } ${checkAnimationIndex === idx ? 'scale-110' : ''}`}
              >
                {day.done ? (
                  <CheckCircleIcon className={`h-4 w-4 ${checkAnimationIndex === idx ? 'animate-pulse' : ''}`} />
                ) : (
                  day.label
                )}
              </div>
              <p className="mt-1 text-[11px] text-zinc-500">{day.label}</p>
            </div>
          ))}
        </div>

        {checkinPulse ? (
          <p className="mt-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-200">
            +1 allenamento completato. Continua cosi.
          </p>
        ) : null}

        <button
          onClick={handleWorkoutCheckIn}
          className="mt-4 w-full rounded-2xl bg-emerald-500 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-[0_0_24px_rgba(34,197,94,0.35)] disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-300"
          disabled={completed >= target}
        >
          {completed >= target ? 'Obiettivo settimanale completato' : 'Allenamento completato'}
        </button>
        <button
          onClick={handleNextWeek}
          className="mt-2 w-full text-xs font-semibold text-zinc-500 transition hover:text-emerald-300"
        >
          Simula settimana successiva
        </button>
      </section>

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
        <h3 className="text-base font-semibold text-zinc-100">La tua storia</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{progressSummary.story}</p>
      </section>

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
        <div className="grid grid-cols-[1fr_auto] gap-2 text-xs text-zinc-500">
          <div className="grid grid-cols-7 gap-2">
            {progressCalendar.weekDays.map((d, idx) => (
              <span key={`${d}-${idx}`} className="text-center">{d}</span>
            ))}
          </div>
          <span className="pr-1">Progresso</span>
        </div>

        <div className="mt-2 space-y-2">
          {progressCalendar.grid.map((week, rowIdx) => (
            <div key={`week-${rowIdx}`} className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div className="grid grid-cols-7 gap-2">
                {week.map((day, dayIdx) => {
                  if (day === 0) {
                    return <div key={`empty-${rowIdx}-${dayIdx}`} className="h-9 rounded-lg bg-zinc-950/70" />
                  }
                  const isTrained = progressCalendar.trainedDays.includes(day)
                  const isToday = progressCalendar.currentDay === day
                  return (
                    <div
                      key={`day-${day}`}
                      className={`flex h-9 items-center justify-center rounded-lg border text-xs ${
                        isToday
                          ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                          : isTrained
                            ? 'border-emerald-700 bg-zinc-950 text-emerald-300'
                            : 'border-zinc-800 bg-zinc-950 text-zinc-500'
                      }`}
                    >
                      {day}
                    </div>
                  )
                })}
              </div>
              <span className="w-8 text-right text-xs font-semibold text-zinc-400">
                {progressCalendar.rowProgress[rowIdx]}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-300">
          <FireIcon className="h-5 w-5" />
          {progressSummary.monthLabel}
        </p>
      </section>
    </main>
  )
}

export default DashboardPage
