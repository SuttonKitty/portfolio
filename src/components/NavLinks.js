import { Link } from 'react-router-dom'

const NavLinks = ({ links }) => {
  return (
    <nav>
      <Link to="/">hem</Link> |
      <Link to="/work"> work</Link> |
      <Link to="/notes"> notes</Link>
    </nav>
  )
}

export default NavLinks
