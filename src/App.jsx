import { Navigate, Route, Routes } from 'react-router-dom'
import MobileNav from './components/MobileNav'
import CoursesPage from './pages/CoursesPage'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import RewardsPage from './pages/RewardsPage'

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-md border-x border-zinc-800/80 bg-[#0f0f0f] px-4 pb-28 pt-5 text-zinc-100 shadow-2xl shadow-black/50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allenamenti" element={<DashboardPage />} />
        <Route path="/premi" element={<RewardsPage />} />
        <Route path="/corsi" element={<CoursesPage />} />
        <Route path="/profilo" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <MobileNav />
    </div>
  )
}

export default App
