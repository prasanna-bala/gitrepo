 
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Dashboardpage';
import HomePage from './Homepage';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavLink to="/">Home</NavLink>
        <div className='navbr' ></div>
        <NavLink to="dashboard">Dashboard</NavLink>
        
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;