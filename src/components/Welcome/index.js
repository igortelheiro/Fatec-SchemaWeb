import React from 'react'
import { AppLogo } from '../Tools/LoadImg'
import { Link } from 'react-router-dom'

const Welcome = () => (
  <main className="noHeader welcome">
    <div className="interaction">
      <h1>Schema</h1>
      <p>
        Inicie seus passos em programação de forma
        divertida e prática, aprenda jogando!
      </p>

      <div className="btns">
          <Link to="/register" className="signupBtn">Cadastre-se</Link>
          <Link to="/login" className="signinBtn">Entrar</Link>
      </div>
    </div>

    <AppLogo />
  </main>
)

export default Welcome