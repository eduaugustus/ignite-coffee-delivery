import { ShoppingCart } from 'phosphor-react'

import {
  AddToCartButton,
  CoffeeCardContainer,
  CoffeeCardMoney,
  CoffeeCardFooter,
  CoffeeDescription,
  Label,
  LabelContainer,
  ActionButtonsConatiner,
} from './styles'

import { Select } from '../../../../components/Select'

import coffeeCardImg from '../../../../assets/coffee-card.png'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeCardImg} alt="" />
      <LabelContainer>
        <Label>TRADICIONAL</Label>
      </LabelContainer>

      <h1>Expresso Tradicional</h1>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>

      <CoffeeCardFooter>
        <CoffeeCardMoney>
          R$ <span>9,90</span>
        </CoffeeCardMoney>

        <ActionButtonsConatiner>
          <Select />
          <AddToCartButton>
            <ShoppingCart size={16} weight="fill" />
          </AddToCartButton>
        </ActionButtonsConatiner>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
