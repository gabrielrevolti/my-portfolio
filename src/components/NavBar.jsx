import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from '../constants'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toogleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href)
    if(targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientReact().top;
      const offsetPosition = elementPosition + window.scrolly + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }
  return (
    <div>
      <nav className='fixed left-0 right-0 top-4 z-50'>
        {/* Desktop menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href='#'>
                <img src={logo} width={150} alt="Logo"/>
              </a>
            </div>
            <div>
              <ul className="flex items-center-gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-sm hover:text-yellow-400"
                    onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu  */}
        <div className='rounded-lg backdrop-blur-md lg:hidden'>
          <div className='flex items-center justify-between'></div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar