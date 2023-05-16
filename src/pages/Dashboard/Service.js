import DashboardLayout from '../../components/Layout/dashboard'

const Service = ({activeItem}) => {
  return(
    <>
      Service
    </>
  )
}

const Dashboard = () => {
  return(
    <DashboardLayout activeItem="service">
      <Service/>
    </DashboardLayout>
  )
}
export default Dashboard
