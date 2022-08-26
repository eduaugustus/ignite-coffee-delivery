import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 16rem;
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  background: ${(props) => props.theme['base-card']};

  img {
    height: 7.5rem;
    width: 7.5rem;

    margin-top: -1.25rem;
  }

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const LabelContainer = styled.div`
  margin-top: 0.75rem;
`

export const Label = styled.span`
  display: inline-block;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
  font-weight: bold;
  font-size: 0.625rem;
`

export const CoffeeDescription = styled.span`
  display: inline-block;
  margin-top: 0.5rem;

  font-size: 0.875rem;
  text-align: center;
  line-height: 130%;
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 2rem;
`

export const CoffeeCardMoney = styled.span`
  font-size: 0.875rem;
  line-height: 130%;

  display: flex;
  gap: 0.125rem;

  > span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const ActionButtonsConatiner = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddToCartButton = styled.button`
  border: 0;
  background: ${(props) => props.theme['purple-dark']};

  padding: 0.5rem;
  border-radius: 6px;

  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
