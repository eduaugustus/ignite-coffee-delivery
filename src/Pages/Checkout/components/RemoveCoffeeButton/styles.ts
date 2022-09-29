import styled from 'styled-components'

export const RemoveCoffeeButtonContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  transition: background, color 0.2s;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
