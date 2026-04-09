import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Home } from './components/Icons'
import { useAppState } from './context/AppState'
import { AccountPage } from './pages/AccountPage'
import { CreateAccountPage } from './pages/CreateAccountPage'
import { LoginPage } from './pages/LoginPage'
import { WelcomePage } from './pages/WelcomePage'

const steps = [
  { label: '1 of 4', path: '/welcome' },
  { label: '2 of 4', path: '/login' },
  { label: '3 of 4', path: '/create-account' },
  { label: '4 of 4', path: '/account-settings' },
]

function MobileShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated } = useAppState()
  const currentIndex = steps.findIndex((step) => step.path === location.pathname)

  const goToStep = (index) => {
    const normalizedIndex = ((index % steps.length) + steps.length) % steps.length
    navigate(steps[normalizedIndex].path)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#ffffff_0%,#f6f7fb_35%,#eef1f6_100%)] p-6">
      <div className="w-full max-w-[390px] overflow-hidden rounded-[36px] border border-white/70 bg-white shadow-phone">
        <div className="relative mx-auto h-[780px] w-full bg-white">
          <div className="absolute inset-x-0 top-0 h-7 bg-white" />
          <main className="h-full overflow-y-auto px-5 pb-32 pt-7">
            <Routes>
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-account" element={<CreateAccountPage />} />
              <Route
                path="/account-settings"
                element={isAuthenticated ? <AccountPage /> : <Navigate to="/login" replace />}
              />
              <Route path="*" element={<Navigate to="/welcome" replace />} />
            </Routes>
          </main>

          <footer className="absolute inset-x-0 bottom-0 border-t border-ink-200 bg-white px-7 py-5">
            <div className="flex items-center justify-center gap-5 text-ink-500">
              <button
                type="button"
                aria-label="Go to first page"
                className="transition hover:text-brand-500"
                onClick={() => goToStep(0)}
              >
                <Home className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Previous page"
                className="transition hover:text-brand-500"
                onClick={() => goToStep(currentIndex - 1)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-16 text-center text-lg font-semibold text-ink-700">
                {steps[currentIndex]?.label ?? '1 of 4'}
              </span>
              <button
                type="button"
                aria-label="Next page"
                className="transition hover:text-brand-500"
                onClick={() => goToStep(currentIndex + 1)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return <MobileShell />
}
