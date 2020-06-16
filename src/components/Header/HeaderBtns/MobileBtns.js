import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import HomeIcon from '@material-ui/icons/Home'
import RankIcon from '@material-ui/icons/EmojiEvents'
import AccountIcon from '@material-ui/icons/AccountCircle'

const MobileBtns = () => {
  return (
      <ul className="mobileBtns">
        <Tooltip title="Início">
          <li><a href="/">
            <HomeIcon className="icon"/>
          </a></li>
        </Tooltip>

        <Tooltip title="Ranking">
          <li><a href="/ranking">
            <RankIcon className="icon" />
          </a></li>
        </Tooltip>

        <Tooltip title="Perfil">
          <li className="mobileBtn"><a href="/profile">
            <AccountIcon className="icon" />
          </a></li>
        </Tooltip>
      </ul>
  )
}

export default MobileBtns