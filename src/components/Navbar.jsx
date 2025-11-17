import { Link, NavLink } from 'react-router-dom'
import { Eye, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-cyan-300' : 'text-zinc-300 hover:text-white'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative inline-flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-cyan-500/30 blur-md group-hover:bg-cyan-400/40 transition" />
              <Eye className="relative h-7 w-7 text-cyan-300" />
            </span>
            <span className="text-white font-semibold tracking-wide">Lumen Optics</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem({ to: '/', label: 'Home' })}
            {navItem({ to: '/opticians', label: 'Opticians' })}
            {navItem({ to: '/test', label: 'System Test' })}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              {navItem({ to: '/', label: 'Home' })}
              {navItem({ to: '/opticians', label: 'Opticians' })}
              {navItem({ to: '/test', label: 'System Test' })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
