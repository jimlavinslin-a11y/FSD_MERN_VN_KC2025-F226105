import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Departments from './pages/Departments.jsx'
import DepartmentDetails from './pages/DepartmentDetails.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


export default function App(){
return (
<Router>
<Header />
<main className="container my-4">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/departments" element={<Departments/>} />
<Route path="/departments/:id" element={<DepartmentDetails/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<Footer />
</Router>
)
}
