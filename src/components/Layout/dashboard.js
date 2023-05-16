
import {useState} from 'react'
import { Dropdown, Input, Menu, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SideBar = ({state, setState}) => {
  const handleItemClick = (e, { name }) => setState({ activeItem: name })
   const { activeItem } = state
  return(
    <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item
          name='create'
          active={activeItem === 'create'}
          onClick={handleItemClick}
        >
          + Create Task
        </Menu.Item>

        <Menu.Item>
          Dashboard
          <Menu.Menu>
            <Menu.Item
              as={Link}
              to="/dashboard"
              name='explore'
              active={activeItem === 'explore'}
              onClick={handleItemClick}
            >
              Explore
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/dashboard/service"
              name='service'
              active={activeItem === 'service'}
              onClick={handleItemClick}
            >
              Service
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          name='data'
          active={activeItem === 'data'}
          onClick={handleItemClick}
        >
          Data
        </Menu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
  )
}

const Dashboard = ({children, activeItem}) => {
  const [state, setState] = useState({activeItem})
  return(
    <div>
      <div>Welcome to the dashboard</div>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <SideBar {...{state, setState}}/>
          </Grid.Column>
          <Grid.Column>
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export default Dashboard
