import { UserButton } from '@clerk/nextjs'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import LinksDropdown from './LinksDropdown'

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">

        <div>

            <LinksDropdown/>
        </div>

        <div className="flex items-center gap-x-4">
            <ThemeToggle/>
            <UserButton afterSignOutUrl='/'/>
        </div>
    </nav>
  )
}

export default Navbar
