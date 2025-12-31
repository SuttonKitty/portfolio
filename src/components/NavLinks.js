import { NavLink } from 'react-router-dom'

const NavLinks = ({ links }) => {
  return (
    <nav className="flex flex-row gap-10 w-auto">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'underline decoration-dotted' : ''
        }
      >
        hem
      </NavLink>

      <NavLink
        to="/work/"
        className={({ isActive }) =>
          isActive ? 'underline decoration-dotted' : ''
        }
      >
        work
      </NavLink>

      <NavLink
        to="/notes/"
        className={({ isActive }) =>
          isActive ? 'underline decoration-dotted' : ''
        }
      >
        notes
      </NavLink>
    </nav>
  )
}

export default NavLinks