import "./NavItem.css";
import React from "react"
import { NavLink } from "react-router-dom"

export const NavItem = ({href, children}) => {
  return (
    <li className="white-text navItem">
      <NavLink to={href} style={({isActive}) => isActive ? {borderLeft: "5px solid var(--clr-primary)"} : undefined}>
        {children}
      </NavLink>
    </li>
  )
}
