import { ReactNode } from 'react'
import { DefaultLayoutContainer } from './styles'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return <DefaultLayoutContainer>{children}</DefaultLayoutContainer>
}
