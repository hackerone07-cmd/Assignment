import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'popx-app-state'

const defaultAccount = {
  fullName: 'Marry Doe',
  phone: '',
  email: 'marry@gmail.com',
  password: 'Marry Doe',
  companyName: 'Marry Doe',
  isAgency: 'yes',
}

const defaultSession = {
  isAuthenticated: false,
  account: defaultAccount,
}

const AppStateContext = createContext(null)

function readStoredSession() {
  if (typeof window === 'undefined') {
    return defaultSession
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : defaultSession
  } catch {
    return defaultSession
  }
}

export function AppStateProvider({ children }) {
  const [session, setSession] = useState(readStoredSession)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
  }, [session])

  const registerAccount = (account) => {
    setSession({
      isAuthenticated: true,
      account,
    })
  }

  const login = ({ email, password }) => {
    const matchesEmail = session.account.email.trim().toLowerCase() === email.trim().toLowerCase()
    const matchesPassword = session.account.password === password

    if (!matchesEmail || !matchesPassword) {
      return false
    }

    setSession((current) => ({
      ...current,
      isAuthenticated: true,
    }))

    return true
  }

  const logout = () => {
    setSession((current) => ({
      ...current,
      isAuthenticated: false,
    }))
  }

  return (
    <AppStateContext.Provider
      value={{
        account: session.account,
        isAuthenticated: session.isAuthenticated,
        registerAccount,
        login,
        logout,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const context = useContext(AppStateContext)

  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider')
  }

  return context
}
