import React from 'react'
import { NavLink, Link } from 'react-router'


export default function Navbar() {
  return (
    <div className="flex justify-between items-center text-xl bg-indigo-950 text-white gap-5 py-4 px-12">
      <span className="text-indigo-200">LOGO</span>
      <ul className="flex gap-5">
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive ? "text-indigo-300" : ""}> Home </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/blog">
            {({ isActive }) => (
              <span className={isActive ? "text-indigo-300" : ""}> Blog </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/addNew">
            {({ isActive }) => (
              <span className={isActive ? "text-indigo-300" : ""}>
                {" "}
                Add New{" "}
              </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery">
            {({ isActive }) => (
              <span className={isActive ? "text-indigo-300" : ""}>
                {" "}
                Gallery
              </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            {({ isActive }) => (
              <span className={isActive ? "text-indigo-300" : ""}> Contact </span>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
