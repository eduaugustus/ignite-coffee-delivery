import { HeaderContainer } from './styles'
import igniteLogo from '../../assets/ignite-coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" />
      <nav>
        <a href="" className="locationLink">
          <MapPin size={22} weight="fill" />
          Joinville, SC
        </a>
        <a href="" className="cartLink">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
