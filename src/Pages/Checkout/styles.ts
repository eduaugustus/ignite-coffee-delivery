import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
`
export const Title = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const UserInformationContainer = styled.div`
  margin-top: 1rem;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.75rem;
`

export const AdressInfoContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const AdressDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  > span {
    display: inline-flex;
    flex-direction: column;

    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AdressDescriptionSubtitle = styled.span`
  font-size: 0.875rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`

export const FormContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`

const BaseInput = styled.input`
  padding: 0.75rem;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CEPInput = BaseInput

export const StreetNumberInput = BaseInput

export const NeighborhoodInput = BaseInput

export const StreetInput = styled(BaseInput)`
  flex: 1;
`

export const CityInput = styled(BaseInput)`
  flex-grow: 1;
`

export const UFInput = styled(BaseInput)`
  width: 3.75rem;
`

export const OptionalDescriptionAdressInput = styled(BaseInput)`
  flex-grow: 1;
`

export const PaymentInfoContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const PaymentDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  > span {
    display: inline-flex;
    flex-direction: column;

    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentDescriptionSubtitle = styled.span`
  font-size: 0.875rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;
`

export const CoffeeOrderedContainer = styled.div`
  margin-top: 1rem;
`

export const CoffeeOrderedCheckoutContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`

export const CheckoutCoffeeCard = styled.div`
  display: flex;

  img {
    height: 4rem;
    width: 4rem;

    margin-right: 1.25rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-right: 3.125rem;
`

export const CoffeeName = styled.span`
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeePrice = styled.span`
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Divider = styled.hr`
  border: 1px solid ${(props) => props.theme['base-button']};

  margin: 1.5rem 0;
`
