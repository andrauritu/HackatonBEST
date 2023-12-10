import './App.css';
// import { ItemPage } from './pages/ItemPage';
import { LoginPage } from './pages/LoginPage';
// import { RegisterPage } from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import UserSuggestionsPage from './pages/UserSuggestionsPage';
// import FakeUserPage from './pages/FakeUserPage';

import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Dashboards } from './pages/Dashboards';
// import { TokenContext } from './App'; // Add this import statement

export const TokenContext = React.createContext(null); //we write export here so that we can import this context in other files


// const ProtectedRoute = ({ element }) => {
//   const { token } = useContext(TokenContext);
//   return token ? element() : <Navigate to='/login' />;
// }

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    console.log('Token:', token);
  }, [token]);
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      setToken(token);
    }
  }, []);
  return (
    <div className='App'>
      <Navbar className="navbar" />
      <TokenContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/userSuggestions/:id' element={<UserSuggestionsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path="/dashboards" component={<Dashboards />} />

        </Routes>
      </TokenContext.Provider>
    </div>
  );
}

export default App;