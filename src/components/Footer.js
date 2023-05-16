import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column mobile={8} tablet={4} computer={4}>
            <div><h3>Contact Us</h3></div>
            <ul>
              <li>Email: info@corpolatech.com</li>
              <li>Phone: 977-9849826321</li>
              <li>Address: Kathmandu, Nepal</li>
            </ul>
          </Grid.Column>
          <Grid.Column mobile={8} tablet={4} computer={4}>
            <div><h3>Main Pages</h3></div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/dashboard">Dashboard</Link></div>
            <div><Link to="/auth">User Profile</Link></div>
          </Grid.Column>
          <Grid.Column mobile={8} tablet={4} computer={4}>
            <div><h3>Social Media</h3></div>
            <div><Link target="_blank" to="https://www.facebook.com/">Facebook ⇱</Link></div>
            <div><Link target="_blank" to="https://www.instagram.com/">Instagram ⇱</Link></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
      <Grid.Row>
        <Grid.Column>
          <hr/>
          Copyright © {new Date().getFullYear()} The Living Facts - All rights reserved.
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  )
}

export default Footer
