import NavLinks from './NavLinks'

const Nav = () => {
  const links = ["/hem", "/work", "/notes"]
  return <NavLinks links={links} className="w-auto" />
}

export default Nav