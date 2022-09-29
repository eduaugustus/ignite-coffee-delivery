import styled, { css } from 'styled-components'

interface PaymentContainerProps {
  isSelected: boolean
}

export const PaymentContainer = styled.div<PaymentContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  margin-top: 2rem;

  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) => {
    return props.isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']
  }};

  border: 1px solid
    ${(props) => {
      return props.isSelected ? props.theme.purple : 'transparent'
    }};

  transition: background-color 0.2s;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
  }

  ${(props) =>
    !props.isSelected &&
    css`
      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }
    `}
`
