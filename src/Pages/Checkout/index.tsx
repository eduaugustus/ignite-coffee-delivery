import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
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
  StreetInput,
  StreetNumberInput,
  Title,
  UFInput,
  UserInformationContainer,
} from './styles'

export function Checkout() {
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
          </PaymentInfoContainer>
        </UserInformationContainer>

        <CoffeeOrderedContainer>
          <Title>Cafés selecionados</Title>
          <CoffeeOrderedCheckoutContainer>aa</CoffeeOrderedCheckoutContainer>
        </CoffeeOrderedContainer>
      </CheckoutContainer>
    </DefaultLayout>
  )
}
