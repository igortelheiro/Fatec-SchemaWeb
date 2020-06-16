import React, { useState, useEffect } from 'react'
import RedirectDialog from '../Tools/Dialog/RedirectDialog'


const PageNotFound = () => {
  // Configurando a mensagem
  let [Dialog, setDialog] = useState(null)
  const [title, msg] = ["Oops", "Você tentou acessar uma rota inexistente."]
  const openMsg = () => setDialog(RedirectDialog(title, msg, setDialog))

  // Renderiza a mensagem ao abrir a página
  useEffect(openMsg, [])

  return (
    <main className="pageNotFound noHeader">
      <a className="button" href="/start">
        <h2> Voltar pro App</h2>
      </a>
      { Dialog }
    </main>
  )
}

export default PageNotFound