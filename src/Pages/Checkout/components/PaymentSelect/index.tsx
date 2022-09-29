import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentContainer } from './styles'

interface PaymentSelectProps {
  isSelected?: boolean
  paymentType: 'MONEY' | 'CREDIT_CARD' | 'DEBIT_CARD'
  onClick: () => void
}

const paymentIconsByType = {
  MONEY: Money,
  CREDIT_CARD: CreditCard,
  DEBIT_CARD: Bank,
}

const paymentTextByType = {
  MONEY: 'DINHEIRO',
  CREDIT_CARD: 'CARTÃO DE CRÉDITO',
  DEBIT_CARD: 'CARTÃO DE DÉBITO',
}

export function PaymentSelect({
  isSelected = false,
  paymentType,
  onClick,
}: PaymentSelectProps) {
  const Icon = paymentIconsByType[paymentType]
  const text = paymentTextByType[paymentType]

  return (
    <PaymentContainer isSelected={isSelected} onClick={onClick}>
      <Icon size={16} />
      <span>{text}</span>
    </PaymentContainer>
  )
}
