import React from 'react'
import { LoadImg } from './LoadImg'

// <RenderCard title="" [mainWord={}] />
// IMPORTANTE: title = imagemDoCurso.png

export default function RenderCard(props) {
  const Card = props

  const mainWORD = props.mainWord - 1 || 0
  const imgNAME = props.title.trim().toLowerCase().split(" ")[mainWORD]
  const imgALT = `Logo da linguagem ${imgNAME}`

  return (
    <section className="swiper-slide">
      <div>
        <LoadImg imgName={imgNAME} imgAlt={imgALT} />
      </div>

      <h2>{ Card.title }</h2>

      <button> Jogar </button>
    </section>
  )
}