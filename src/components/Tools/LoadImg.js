import React from 'react'

// <LoadImg [className=""] imgName="" [imgAlt=""] />

const LoadImg = (props) => {
  let imgEXT = props.ext || "png"
  let imgSRC = require(`../../assets/images/${props.imgName}.${imgEXT}`)
  let imgALT = props.imgAlt || null
  let imgCLASS = props.className || null
  
  return <img className={imgCLASS} src={imgSRC} alt={imgALT} />
}

// <AppLogo />

const AppLogo = () => <img src={require("../../assets/images/schema_icon.svg")} alt="Logo do App" />

export { LoadImg, AppLogo }