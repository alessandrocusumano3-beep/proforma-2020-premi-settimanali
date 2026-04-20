import { Navigate, Route, Routes } from 'react-router-dom'
import MobileNav from './components/MobileNav'
import CoursesPage from './pages/CoursesPage'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import RewardsPage from './pages/RewardsPage'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] gap-6 px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:pb-6">
        <MobileNav />
        <div className="flex min-h-screen w-full flex-1 flex-col rounded-3xl border border-zinc-800/80 bg-zinc-950/65 p-4 shadow-2xl shadow-black/40 sm:p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/allenamenti" element={<DashboardPage />} />
            <Route path="/premi" element={<RewardsPage />} />
            <Route path="/corsi" element={<CoursesPage />} />
            <Route path="/profilo" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
