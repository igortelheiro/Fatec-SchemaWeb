import React from 'react'
import { LoadImg } from '../../Tools/LoadImg'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'

const DesktopBtns = () => {
  return (
    <div className="desktopBtns">
      <Tooltip title="Perfil">
        <Link to="/profile" className="avatar-container">
          <ul>
            <li className="username">igortelheiro</li>
            <li className="exp">EXP 1070</li>
          </ul>
          <LoadImg className="avatar" imgName="avatar" imgAlt="user avatar" />
        </Link>
      </Tooltip>
    </div>
  )
}

export default DesktopBtns