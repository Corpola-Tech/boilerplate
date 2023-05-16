import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';
import Service from './pages/Dashboard/Service';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/auth" element={<Authentication/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/dashboard/service" element={<Service/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
