import { FunctionComponent } from 'preact'
import './styles.css'

import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'
import { MenuItemProps } from './types'

const MenuItem: FunctionComponent<MenuItemProps> = ({ icon, title, action, isActive = null }) => (
  <button
    className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
    onClick={action}
    title={title}
  >
    <svg className="remix">
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg>
  </button>
)

export default MenuItem
