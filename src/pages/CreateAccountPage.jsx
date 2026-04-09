import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FormField } from '../components/FormField'
import { useAppState } from '../context/AppState'

export function CreateAccountPage() {
  const navigate = useNavigate()
  const { registerAccount } = useAppState()
  const [form, setForm] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    companyName: 'Marry Doe',
    isAgency: 'yes',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: '',
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Full name is required'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address'
    }

    if (!form.password.trim()) {
      nextErrors.password = 'Password is required'
    } else if (form.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    registerAccount(form)
    navigate('/account-settings')
  }

  return (
    <section className="flex min-h-full flex-col pt-3">
      <form className="flex min-h-full flex-col pb-6" onSubmit={handleSubmit}>
        <div className="mb-7 flex items-start justify-between gap-4">
          <h1 className="max-w-[250px] text-[42px] font-bold leading-[1.06] tracking-[-0.03em] text-ink-900">
            Create your PopX account
          </h1>
          <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-xl font-bold text-white">
            1
          </span>
        </div>

        <div className="space-y-5">
          <FormField
            label="Full Name*"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            error={errors.fullName}
            autoComplete="name"
          />
          <FormField
            label="Phone number*"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete="tel"
          />
          <FormField
            label="Email address*"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />
          <FormField
            label="Password *"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="new-password"
          />
          <FormField
            label="Company name"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>

        <div className="mt-7">
          <p className="text-[16px] font-semibold text-[#4d5157]">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>
          <div className="mt-3 flex items-center gap-7">
            <label className="flex items-center gap-3 text-[18px] font-medium text-[#44484f]">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
                className="h-6 w-6 accent-brand-500"
              />
              Yes
            </label>
            <label className="flex items-center gap-3 text-[18px] font-medium text-[#44484f]">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
                className="h-6 w-6 accent-brand-500"
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 h-14 w-full shrink-0 rounded-[10px] bg-brand-500 text-[19px] font-semibold text-white shadow-[0_10px_24px_rgba(108,37,255,0.28)] transition hover:bg-brand-600"
        >
          Create Account
        </button>
      </form>
    </section>
  )
}
