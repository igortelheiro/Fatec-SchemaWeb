import React from 'react'
import { AppLogo } from '../LoadImg'
import './loading.css'

const Loading = () => (
  <main id="loadingPage" className="noHeader">
    <div>
      <AppLogo />
      <h2>Carregando...</h2>
    </div>
  </main>
)

export default Loading
