import { useNavigate } from 'react-router-dom'
import { useAppState } from '../context/AppState'

export function WelcomePage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAppState()

  return (
    <section className="flex h-full flex-col justify-end">
      <div className="mb-4 rounded-[26px] bg-white px-3 pb-2 pt-4">
        <h1 className="max-w-[240px] text-[42px] font-bold leading-[1.02] tracking-[-0.03em] text-ink-900">
          Welcome to PopX
        </h1>
        <p className="mt-3 max-w-[260px] text-[18px] leading-[1.5] text-[#8c9197]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="mt-8 space-y-4">
          <button
            type="button"
            className="flex h-14 w-full items-center justify-center rounded-[10px] bg-brand-500 px-4 text-center text-[18px] font-semibold leading-none text-white shadow-[0_10px_24px_rgba(108,37,255,0.28)] transition hover:bg-brand-600"
            onClick={() => navigate('/create-account')}
          >
            Create Account
          </button>
          <button
            type="button"
            className="flex h-14 w-full items-center justify-center rounded-[10px] bg-[#cebafb] px-4 text-center text-[18px] font-semibold leading-none text-[#2e213b] transition hover:bg-[#c5b0fa]"
            onClick={() => navigate(isAuthenticated ? '/account-settings' : '/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </section>
  )
}
