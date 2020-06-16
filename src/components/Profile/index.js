import React from 'react'
import AppHeader from '../Header'
import { LoadImg } from '../Tools/LoadImg'

const Profile = () => (
  <>
    <AppHeader />

    <main className="profile">
      <div className="profile-container">

        <div className="user-presentation">
          {/* <LoadImg id="cam" imgName="profileBtns/cam" ext="svg" /> */}
          <LoadImg className="user-avatar" imgName="avatar" imgAlt="User Avatar" />
          <h2> igortelheiro </h2>
        </div>

        <div className="user-info">
          <ul className="exp">
            <li>EXP</li>
            <li>1070</li>
          </ul>
          <ul className="acertos">
            <li>Acertos</li>
            <li>150</li>
          </ul>
          <ul className="erros">
            <li>Erros</li>
            <li>80</li>
          </ul>
        </div>

        <div className="buttons">
          <div id="editProfile">
            <LoadImg imgName="profileBtns/editProfile" ext="svg" />
            Editar perfil
          </div>

          <div>
            <LoadImg imgName="profileBtns/changePass" ext="svg" />
            Alterar senha
          </div>

          <div>
            <LoadImg imgName="profileBtns/Bell" ext="svg" />
            Notificações
          </div>

          <div>
            <LoadImg imgName="profileBtns/ranking" ext="svg" />
            Ranking
          </div>

          <div id="delAccount">
            <LoadImg imgName="profileBtns/delAccount" ext="svg" />
            Excluir conta
          </div>

          <div>
            <LoadImg imgName="profileBtns/loggout" ext="svg" />
            Sair
          </div>
        </div>
      </div>
    </main>
  </>
)

export default Profile