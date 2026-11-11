import React from 'react'
import NavLink from './NavLink'


const MenuOverlay = ({ links, onNavigate }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
        {links.map((links, index) => (
            <li key={index}>
            <NavLink href={links.path} title={links.title} onClick={onNavigate} />
    </li>

  ))
}
    </ul>
)
}
export default MenuOverlay