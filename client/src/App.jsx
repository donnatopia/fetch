import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { FilterProvider } from './contexts/FilterContext.jsx';
import Login from './components/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Dashboard from './components/Dashboard/index.jsx';

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <FilterProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route
                path='/dashboard'
                element={
                  <ProtectedRoute><Dashboard /></ProtectedRoute>
                }
              />
            </Routes>
          </Router>
        </FilterProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App;