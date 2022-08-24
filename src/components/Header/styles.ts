import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      font-size: 0.875rem;
      line-height: 130%;
      text-decoration: none;

      padding: 0.5rem;
      border-radius: 8px;

      cursor: pointer;

      &.locationLink {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        background: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple-dark']};

        svg {
          color: ${(props) => props.theme.purple};
        }
      }

      &.cartLink {
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
