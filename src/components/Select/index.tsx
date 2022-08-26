import { Minus, Plus } from 'phosphor-react'
import { SelectButton, SelectContainer, SelectCounter } from './styles'

export function Select() {
  return (
    <SelectContainer>
      <SelectButton>
        <Minus size={14} weight="fill" />
      </SelectButton>
      <SelectCounter>1</SelectCounter>
      <SelectButton>
        <Plus size={14} weight="fill" />
      </SelectButton>
    </SelectContainer>
  )
}
