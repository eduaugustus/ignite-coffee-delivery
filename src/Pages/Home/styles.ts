import styled from 'styled-components'

import infoBackground from '../../assets/coffee-background.svg'

export const InfoBackgroundImage = styled.div`
  background-image: url(${infoBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 5.75rem 0;
`
export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 3.5rem;
`
export const InfoDescriptionsContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  > span {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};

    display: inline-block;
    margin-top: 1rem;
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;

  margin-top: 4.125rem;

  span {
    display: flex;
    align-items: flex-start;

    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};

    div {
      margin-right: 0.75rem;
      padding: 0.5rem;
      border-radius: 50%;

      display: flex;

      svg {
        color: ${(props) => props.theme.white};
      }

      &.shoppingCartIcon {
        background: ${(props) => props.theme['yellow-dark']};
      }

      &.packageIcon {
        background: ${(props) => props.theme['base-text']};
      }

      &.timerIcon {
        background: ${(props) => props.theme.yellow};
      }

      &.coffeeIcon {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`

export const CoffeeCardsContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 9.75rem;
`

export const CoffeeCardsTitle = styled.h1`
  display: inline-block;

  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
`

export const CoffeeCardGrid = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
