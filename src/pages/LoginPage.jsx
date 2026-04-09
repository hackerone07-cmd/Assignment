import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FormField } from '../components/FormField'
import { useAppState } from '../context/AppState'

export function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAppState()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')

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

    setSubmitError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required'
    }

    if (!form.password.trim()) {
      nextErrors.password = 'Password is required'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    const didLogin = login(form)

    if (!didLogin) {
      setSubmitError('Use the registered email and password to continue.')
      return
    }

    navigate('/account-settings')
  }

  return (
    <section className="flex h-full flex-col pt-6">
      <h1 className="max-w-[250px] text-[42px] font-bold leading-[1.06] tracking-[-0.03em] text-ink-900">
        Signin to your PopX account
      </h1>
      <p className="mt-3 max-w-[290px] text-[18px] font-semibold leading-[1.55] text-[#8b8f96]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="mt-9 flex flex-1 flex-col" onSubmit={handleSubmit}>
        <div className="space-y-5">
          <FormField
            label="Email Address"
            name="email"
            value={form.email}
            placeholder="Enter email address"
            autoComplete="email"
            onChange={handleChange}
            error={errors.email}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            placeholder="Enter password"
            autoComplete="current-password"
            onChange={handleChange}
            error={errors.password}
          />
        </div>

        {submitError ? (
          <p className="mt-4 rounded-[10px] bg-red-50 px-4 py-3 text-sm font-medium text-red-500">
            {submitError}
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-4 h-12 rounded-[9px] bg-[#cbcbcb] text-[18px] font-semibold text-white transition hover:bg-[#bdbdbd]"
        >
          Login
        </button>
      </form>
    </section>
  )
}
