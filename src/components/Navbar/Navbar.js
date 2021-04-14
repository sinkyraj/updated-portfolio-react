import { useState } from 'react'
import {
  Collapse,
  Navbar as NavigationBar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'

  const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  

return (
  <>
    <NavigationBar color='light' light>
      <NavbarBrand href='/' className='mr-auto'>Shweta</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className='mr-2' />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink>
              <Link to='/'>Home</Link>
              {/* <Link to='/week10-day04/' className='navLink'>Home</Link> */}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
            <Link to='/Portfolio'>Portfolio</Link>
              {/* <Link to='/week10-day04/profile' className='navLink'>Profile</Link> */}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
            <Link to='/Contact'>Contact</Link>
            </NavLink>
          </NavItem>

        </Nav>
      </Collapse>
    </NavigationBar>
  </>


)

}

export default Navbar