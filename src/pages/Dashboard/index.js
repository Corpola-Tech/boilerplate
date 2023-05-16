import DashboardLayout from '../../components/Layout/dashboard'

const Explore = ({activeItem}) => {
  return(
    <>
      Explore Dashboard
    </>
  )
}

const Dashboard = () => {
  return(
    <DashboardLayout activeItem="explore">
      <Explore/>
    </DashboardLayout>
  )
}
export default Dashboard
