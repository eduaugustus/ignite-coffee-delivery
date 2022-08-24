import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  InfoBackgroundImage,
  InfoContainer,
  InfoDescriptionsContainer,
  Grid,
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
                  <div className="PackageIcon">
                    <Package size={16} weight="fill" />
                  </div>
                  Embalagem mantém o café intacto
                </span>

                <span>
                  <div className="TimerIcon">
                    <Timer size={16} weight="fill" />
                  </div>
                  Entrega rápida e rastreada
                </span>

                <span>
                  <div className="CoffeeIcon">
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
      <div></div>
    </>
  )
}
