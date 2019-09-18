import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="Nav-Bar">
      <div className="container">
        <Link to="/">Home</Link>
        <div className="Nav-Links">
          <NavLink to="/search">Search</NavLink>
        </div>
      </div>
    </div>
  )
}
