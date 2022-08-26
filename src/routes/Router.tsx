import { Route, Routes } from 'react-router-dom'

import { DefaultContainer } from '../layouts/DefaultContainer'
import { Home } from '../Pages/Home'
import { Checkout } from '../Pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultContainer />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
