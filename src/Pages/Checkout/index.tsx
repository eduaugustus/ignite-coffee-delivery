import { useState } from 'react'

import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { PaymentSelect } from './components/PaymentSelect'
import {
  AdressDescriptionContainer,
  AdressDescriptionSubtitle,
  AdressInfoContainer,
  CEPInput,
  CheckoutContainer,
  CityInput,
  CoffeeOrderedCheckoutContainer,
  CoffeeOrderedContainer,
  FormContainer,
  InputGroup,
  NeighborhoodInput,
  OptionalDescriptionAdressInput,
  PaymentDescriptionContainer,
  PaymentDescriptionSubtitle,
  PaymentInfoContainer,
  PaymentMethodsContainer,
  StreetInput,
  StreetNumberInput,
  Title,
  UFInput,
  UserInformationContainer,
  CheckoutCoffeeCard,
  CoffeeName,
  CoffeePrice,
  Details,
  Actions,
  Divider,
} from './styles'
import { Select } from '../../components/Select'

import coffee from '../../assets/coffee-card.png'
import { RemoveCoffeeButton } from './components/RemoveCoffeeButton'

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    'MONEY' | 'CREDIT_CARD' | 'DEBIT_CARD' | ''
  >('')

  return (
    <DefaultLayout>
      <CheckoutContainer>
        <UserInformationContainer>
          <Title>Complete seu pedido</Title>

          <AdressInfoContainer>
            <AdressDescriptionContainer>
              <MapPinLine size={22} />

              <span>
                Endereço de Entrega
                <AdressDescriptionSubtitle>
                  Informe o endereço onde deseja receber seu pedido
                </AdressDescriptionSubtitle>
              </span>
            </AdressDescriptionContainer>

            <form>
              <FormContainer>
                <InputGroup>
                  <CEPInput type="number" placeholder="CEP" />
                </InputGroup>
                <InputGroup>
                  <StreetInput type="text" placeholder="Rua" />
                </InputGroup>
                <InputGroup>
                  <StreetNumberInput type="number" placeholder="Número" />
                  <OptionalDescriptionAdressInput
                    type="text"
                    placeholder="Complemento"
                  />
                </InputGroup>
                <InputGroup>
                  <NeighborhoodInput type="text" placeholder="Bairro" />
                  <CityInput type="text" placeholder="Cidade" />
                  <UFInput type="text" placeholder="UF" />
                </InputGroup>
              </FormContainer>
            </form>
          </AdressInfoContainer>

          <PaymentInfoContainer>
            <PaymentDescriptionContainer>
              <CurrencyDollar size={22} />

              <span>
                Pagamento
                <PaymentDescriptionSubtitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </PaymentDescriptionSubtitle>
              </span>
            </PaymentDescriptionContainer>

            <PaymentMethodsContainer>
              <PaymentSelect
                paymentType="CREDIT_CARD"
                isSelected={selectedPaymentMethod === 'CREDIT_CARD'}
                onClick={() => setSelectedPaymentMethod('CREDIT_CARD')}
              />
              <PaymentSelect
                paymentType="DEBIT_CARD"
                isSelected={selectedPaymentMethod === 'DEBIT_CARD'}
                onClick={() => setSelectedPaymentMethod('DEBIT_CARD')}
              />
              <PaymentSelect
                paymentType="MONEY"
                isSelected={selectedPaymentMethod === 'MONEY'}
                onClick={() => setSelectedPaymentMethod('MONEY')}
              />
            </PaymentMethodsContainer>
          </PaymentInfoContainer>
        </UserInformationContainer>

        <CoffeeOrderedContainer>
          <Title>Cafés selecionados</Title>
          <CoffeeOrderedCheckoutContainer>
            <CheckoutCoffeeCard>
              <img src={coffee} alt="" />

              <Details>
                <CoffeeName>Expresso Tradicional</CoffeeName>
                <Actions>
                  <Select />
                  <RemoveCoffeeButton onClick={() => {}} />
                </Actions>
              </Details>

              <CoffeePrice>R$ 9,90</CoffeePrice>
            </CheckoutCoffeeCard>

            <Divider />

            <CheckoutCoffeeCard>
              <img src={coffee} alt="" />

              <Details>
                <CoffeeName>Expresso Tradicional</CoffeeName>
                <Actions>
                  <Select />
                  <RemoveCoffeeButton onClick={() => {}} />
                </Actions>
              </Details>

              <CoffeePrice>R$ 9,90</CoffeePrice>
            </CheckoutCoffeeCard>

            <Divider />
          </CoffeeOrderedCheckoutContainer>
        </CoffeeOrderedContainer>
      </CheckoutContainer>
    </DefaultLayout>
  )
}
