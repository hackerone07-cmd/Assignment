import { ProfileAvatar } from '../components/ProfileAvatar'
import { useAppState } from '../context/AppState'

export function AccountPage() {
  const { account, logout } = useAppState()

  return (
    <section className="flex h-full flex-col">
      <header className="-mx-5 border-b border-ink-200 bg-white px-5 py-5">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-[28px] font-semibold text-ink-900">Account Settings</h1>
          <button
            type="button"
            className="rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-brand-400 hover:text-brand-500"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </header>

      <div className="-mx-5 flex-1 bg-ink-100">
        <div className="border-b border-dashed border-[#d6d6d6] bg-white px-5 pb-5 pt-7">
          <div className="flex items-start gap-5">
            <ProfileAvatar />
            <div className="pt-1">
              <h2 className="text-[24px] font-semibold leading-none text-[#2f343b]">
                {account.fullName}
              </h2>
              <p className="mt-2 text-[20px] font-medium text-[#51565d]">{account.email}</p>
            </div>
          </div>

          <p className="mt-8 text-[18px] font-semibold leading-[1.7] text-[#50555c]">
            {account.companyName
              ? `${account.companyName} is set as your company name. `
              : ''}
            You are registered {account.isAgency === 'yes' ? 'as an agency' : 'as an individual'}.
            Your phone number on file is {account.phone || 'not provided yet'}.
          </p>
        </div>

        <div className="h-[410px] border-b border-dashed border-[#d6d6d6]" />
      </div>
    </section>
  )
}
