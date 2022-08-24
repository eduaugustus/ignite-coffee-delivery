import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultContainer() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
