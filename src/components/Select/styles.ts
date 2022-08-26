import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
`

export const SelectCounter = styled.span`
  padding: 0 0.375rem;

  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};
`

export const SelectButton = styled.button`
  border: 0;
  background: transparent;

  color: ${(props) => props.theme.purple};

  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
