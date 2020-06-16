import React from 'react'
import Swiper from 'swiper'

import AppHeader from '../Header'
import RenderCard from '../Tools/RenderCard'


window.onload = function () {
  // eslint-disable-next-line no-unused-vars
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    grabCursor: true,
    slidesPerView: 3,
    noSwiping: true,
    speed: 400,
    freeMode: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints   
   breakpoints: {  
   
    // when window width is <= 320px     
    320: {       
       slidesPerView: 1,
       spaceBetween: 10,
    },     
    // when window width is <= 480px     
    480: {       
       slidesPerView: 2,       
       spaceBetween: 20,
    },   

    // when window width is <= 640px     
    640: {       
       slidesPerView: 3,       
       spaceBetween: 30,
    } 
  }})
}


export default function Start() {
  return (
    <>
      <AppHeader />

      <main className="card-container">
        {/* <!-- Swiper --> */}
        <div className="swiper-container">

          <h1> Jogos disponíveis: </h1>
          
          <div className="swiper-wrapper">
            <RenderCard title="Linguagem C" mainWord={2} />

            <RenderCard title="Fluxograma" />

            <RenderCard title="Javascript" />

            <RenderCard title="HTML 5" />

            <RenderCard title="CSS 3" />

            <RenderCard title="Arquitetura de computadores" />
          </div>

          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </main>
    </>
  )
}