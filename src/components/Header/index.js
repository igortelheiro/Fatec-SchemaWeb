import React from 'react'
import MobileBtns from './HeaderBtns/MobileBtns'
import DesktopBtns from './HeaderBtns/DesktopBtns'
import { Link } from 'react-router-dom'
import { AppLogo } from '../Tools/LoadImg'
import Tooltip from '@material-ui/core/Tooltip'

const AppHeader = () => (
  <header className="header">
    <Tooltip title="Home">
      <Link to="/start" className="appLogo">
        <AppLogo />
        <h3> Schema </h3>
      </Link>
    </Tooltip>

    <DesktopBtns />
    <MobileBtns />
  </header>
)

export default AppHeader