import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header(){
return (
<nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#6b0f0f'}}>
<div className="container">
<NavLink className="navbar-brand d-flex align-items-center" to="/">
<img 
  src="/veltech-logo.png" 
  alt="College Logo" 
  className="logo"
/>
<div>
<div style={{fontWeight:700}}>.VelTech MultiTech</div>
<small style={{fontSize:12}}>.Engineering College</small>
</div>
</NavLink>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navmenu">
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<NavLink to="/" className="nav-link" end>Home</NavLink>
</li>
<li className="nav-item">
<NavLink to="/about" className="nav-link">About</NavLink>
</li>
<li className="nav-item">
<NavLink to="/departments" className="nav-link">Departments</NavLink>
</li>
<li className="nav-item">
<NavLink to="/contact" className="nav-link">Contact</NavLink>
</li>
</ul>
</div>
</div>
</nav>
)
}