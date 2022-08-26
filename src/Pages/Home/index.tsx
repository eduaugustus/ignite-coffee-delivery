import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeCard } from './components/CoffeeCard'

import {
  InfoBackgroundImage,
  InfoContainer,
  InfoDescriptionsContainer,
  Grid,
  CoffeeCardGrid,
  CoffeeCardsContainer,
  CoffeeCardsTitle,
} from './styles'

import coffeeImage from '../../assets/coffee.svg'
import { DefaultLayout } from '../../layouts/DefaultLayout'

export function Home() {
  return (
    <>
      <InfoBackgroundImage>
        <DefaultLayout>
          <InfoContainer>
            <InfoDescriptionsContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>

              <Grid>
                <span>
                  <div className="shoppingCartIcon">
                    <ShoppingCart size={16} weight="fill" />
                  </div>
                  Compra simples e segura
                </span>

                <span>
                  <div className="packageIcon">
                    <Package size={16} weight="fill" />
                  </div>
                  Embalagem mantém o café intacto
                </span>

                <span>
                  <div className="timerIcon">
                    <Timer size={16} weight="fill" />
                  </div>
                  Entrega rápida e rastreada
                </span>

                <span>
                  <div className="coffeeIcon">
                    <Coffee size={16} weight="fill" />
                  </div>
                  O café chega fresquinho até você
                </span>
              </Grid>
            </InfoDescriptionsContainer>
            <img src={coffeeImage} alt="" />
          </InfoContainer>
        </DefaultLayout>
      </InfoBackgroundImage>
      <DefaultLayout>
        <CoffeeCardsContainer>
          <CoffeeCardsTitle>Nossos Cafés</CoffeeCardsTitle>

          <CoffeeCardGrid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
              <CoffeeCard key={index} />
            ))}
          </CoffeeCardGrid>
        </CoffeeCardsContainer>
      </DefaultLayout>
    </>
  )
}
