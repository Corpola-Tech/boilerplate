import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <Menu>
        <Link to='/' >
          <Menu.Item header className='header-name'>The Living Facts</Menu.Item>
        </Link>
        <Menu.Menu position='right'>
          <Link to="/" className='active item header-link'>
            <Menu.Item link secondary>Home</Menu.Item>
          </Link>
          <Link to="/dashboard" className='item header-link'>
            <Menu.Item link secondary>Dashboard</Menu.Item>
          </Link>
          <Link to="/auth" className='item header-link'>
            <Menu.Item link secondary>Login</Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
  )
}

export default Nav
