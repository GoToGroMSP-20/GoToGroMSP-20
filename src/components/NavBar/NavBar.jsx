import "./NavBar.css";
import React from "react";
import { NavItem } from "./subcomponents/NavItem";
import { SiOverleaf } from "react-icons/si";
import { FaCashRegister } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <SiOverleaf className="logo"/>
        <div>
          <div className="company-name">GoToGro</div>
          <div className="company-app-name">Member</div>
        </div>
      </div>
      <ul>
        <NavItem href="/add-order"><FaCashRegister size="2rem"/>Add Order</NavItem>
        <NavItem href="/add-member"><MdPersonAdd size="2rem"/>Add Member</NavItem>
        <NavItem href="/member-info"><MdPersonSearch size="2rem"/>Member Info</NavItem>
        <NavItem href="/sales-report"><RiFileList3Fill size="2rem"/>Sales Report</NavItem>
      </ul>
    </nav>
  )
}
