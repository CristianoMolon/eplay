import { Game } from '../pages/Home'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentPrice) => {
    if (currentPrice.prices.current) {
      return (accumulator += currentPrice.prices.current)
    }
    return 0
  }, 0)
}
