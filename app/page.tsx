'use client'

import { useUser } from "@auth0/nextjs-auth0/client"
import LandingPage from "./LandingPage"
import Dashboard from "./Dashboard"
import Loading from "./Loading"
import Error from "./Error"

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <Loading />
  if (error) return <Error />

  if (user) {
    console.log(user)
    return (
      <Dashboard />
    )
  }

  return (<LandingPage />)
}
