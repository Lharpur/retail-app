import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const useAuth = () => {
  if (localStorage.getItem('loggedIn') === 'true') {
    const user = { loggedIn: true }
    return user && user.loggedIn
  }
}

const PrivateWrapper = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}
export default PrivateWrapper
