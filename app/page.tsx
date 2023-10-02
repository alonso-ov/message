'use client'

import { useUser } from "@auth0/nextjs-auth0/client"
import LandingPage from "./LandingPage"
import Dashboard from "./Dashboard"
import Loading from "./Loading"
import ErrorScreen from "./ErrorScreen"

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <Loading />
  if (error) return <ErrorScreen />

  if (user) {
    console.log(user)
    return (
      <Dashboard />
    )
  }

  return (<LandingPage />)
}
