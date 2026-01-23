'use client'

import { useState } from 'react'
import Link from 'next/link'

// Simple SVG icons instead of heroicons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="#fff" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const ChevronDown = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const ArrowRight = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navItems = [
    {
      title: 'Home',
      href: '/' 
    },
    {
      title: 'Pages',
      href: '/pages',
      submenu: [
        { title: 'About Us', href: '/about' },
        { title: 'Our Team', href: '/team' },
        // { title: 'Team Details', href: '/team-details' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Faq', href: '/faq' },
      ]
    },
    {
      title: 'Services',
      href: '/services',
      submenu: [
        { title: 'Services', href: '/services' },
        { title: 'Service Details', href: '/service/service-details' },
      ]
    },
    {
      title: 'Project',
      href: '/project',
      submenu: [
        { title: 'Project', href: '/project' },
        { title: 'Project Details', href: '/project/project-details' },
      ]
    },
    // {
    //   title: 'Blog',
    //   href: '/blog',
    //   submenu: [
    //     { title: 'Blog', href: '/blog' },
    //     { title: 'Blog With Sidebar', href: '/blog-sidebar' },
    //     { title: 'Blog Details', href: '/blog/blog-details' },
    //   ]
    // },
    { title: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className="fixed z-50 w-full shadow-sm bg-primary backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                <div className="flex items-center justify-center w-32 h-10 rounded-lg bg-primary">
                  <img src="/img/PA.png" alt="Logo" className="" />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="items-center hidden space-x-8 lg:flex">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center font-medium transition-colors text-gray-50 hover:text-lime-300"
                  >
                    {item.title}
                    {item.submenu && <ChevronDown />}
                  </Link>

                  {item.submenu && (
                    <div className="absolute left-0 invisible w-48 mt-2 transition-all duration-300 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-primary"
              >
                <SearchIcon />
              </button>

              <Link
                href="/contact"
                className="items-center hidden px-6 py-3 font-semibold transition-all rounded-full text-gray-950 lg:flex bg-lime-400 hover:text-gray-50 hover:bg-zinc-800"
              >
                Get Started
                <ArrowRight />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white lg:hidden"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white border-t lg:hidden">
            <div className="container px-4 py-4 mx-auto">
              {navItems.map((item) => (
                <div key={item.title} className="py-2 border-b">
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block py-1 text-gray-600 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="w-full max-w-2xl p-6 bg-white rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Search</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:text-primary"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute text-gray-400 right-4 top-4">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header