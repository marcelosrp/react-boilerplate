import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import GlobalStyle from './GlobalStyles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  )
}

export default App
