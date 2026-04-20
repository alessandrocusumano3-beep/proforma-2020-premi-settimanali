export const services = [
  {
    title: 'Allenamenti',
    description: 'Sessioni smart per aumentare forza, resistenza e performance.',
  },
  {
    title: 'Personal Trainer',
    description: 'Coach dedicati e check settimanali per non perdere motivazione.',
  },
  {
    title: 'Programmi',
    description: 'Percorsi a livelli con ricompense e obiettivi progressivi.',
  },
]

export const advantages = [
  'Sistema premi settimanali per mantenere il ritmo',
  'Progressi visibili in tempo reale nella dashboard',
  'Gamification fitness per allenarti con costanza',
]

export const weeklyTraining = {
  completed: 2,
  target: 3,
  days: [
    { label: 'L', done: true },
    { label: 'M', done: true },
    { label: 'M', done: false },
    { label: 'G', done: false },
    { label: 'V', done: false },
    { label: 'S', done: false },
    { label: 'D', done: false },
  ],
}

export const homeMenuItems = [
  'Benvenuto',
  'Prenotazione corsi',
  'Premi',
  'Allenamenti',
  'Vantaggi per livello',
  'Presenta un amico',
]

export const weeklyReward = {
  available: 1,
  label: '1 ricompensa disponibile',
  cta: 'Vedi tutto',
}

export const springRace = {
  title: 'Gara di Primavera',
  currentPoints: 40,
  rewards: [
    { points: 25, prize: 'Sacca Proforma' },
    { points: 40, prize: '2 mesi in regalo' },
    { points: 50, prize: '3 mesi in regalo' },
    { points: 60, prize: '4 mesi in regalo' },
    { points: 70, prize: '6 mesi + 2 PT' },
    { points: 80, prize: '6 mesi + 4 PT' },
    { points: 90, prize: '12 mesi' },
    { points: 100, prize: '12 mesi + Pacchetto Metodo' },
  ],
}

export const streakData = {
  consecutiveWeeks: 1,
  currentLevelWeeks: 1,
  currentLevelTarget: 4,
}

export const progressSummary = {
  weeklyVisitsLabel: 'visite questa settimana',
  story: 'La tua storia cresce quando rispetti il tuo obiettivo: mantieni 3/3 per far salire streak e premi.',
  monthLabel: '1 settimana di fila',
}

export const progressCalendar = {
  weekDays: ['L', 'M', 'M', 'G', 'V', 'S', 'D'],
  currentDay: 17,
  trainedDays: [2, 4, 10, 13, 16],
  grid: [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 0, 0, 0, 0],
  ],
  rowProgress: ['2/3', '2/3', '1/3', '0/3', '0/3'],
}

export const levelMilestones = [
  { weeks: 4, current: 1 },
  { weeks: 12, current: 1 },
  { weeks: 26, current: 1 },
  { weeks: 52, current: 1 },
]

export const badges = [
  { label: 'Costante', active: true },
  { label: 'Inizio forte', active: true },
  { label: 'Livello Pro', active: false },
]

export const courses = [
  {
    id: 'body-balance',
    name: 'Body Balance',
    description: 'Yoga, tai chi e pilates per flessibilità e benessere mentale',
    image:
      'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=1400&q=80&v=pro-balance',
  },
  {
    id: 'body-shape',
    name: 'Body Shape',
    description: 'Allenamento completo per tonificazione con coreografie efficaci',
    image:
      'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?auto=format&fit=crop&w=1400&q=80&v=pro-shape',
  },
  {
    id: 'body-strength',
    name: 'Body Strength',
    description: 'Corso dinamico con bilanciere per sviluppo muscolare e resistenza',
    image:
      'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1400&q=80&v=pro-strength',
  },
]

export const profile = {
  name: 'Luca Bianchi',
  gender: 'male',
  membership: 'Pro Plus',
  email: 'luca.bianchi@email.com',
  workoutsThisMonth: 11,
  currentStreak: 2,
  history: [
    'Functional Fit - 45 min',
    'HIIT Burn - 30 min',
    'Lower Body Strength - 50 min',
    'Mobility Core - 40 min',
  ],
}
