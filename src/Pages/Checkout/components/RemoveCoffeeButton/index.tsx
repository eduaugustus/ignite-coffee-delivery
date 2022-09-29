import { Trash } from 'phosphor-react'
import { RemoveCoffeeButtonContainer } from './styles'

interface RemoveCoffeeButtonProps {
  onClick: () => void
}

export function RemoveCoffeeButton({ onClick }: RemoveCoffeeButtonProps) {
  return (
    <RemoveCoffeeButtonContainer onClick={onClick}>
      <Trash size={16} />
      <span>REMOVER</span>
    </RemoveCoffeeButtonContainer>
  )
}
