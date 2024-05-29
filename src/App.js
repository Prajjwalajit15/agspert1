// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';
import SaleOrdersPage from './pages/SaleOrdersPage';

function App() {
  const isAuthenticated = localStorage.getItem('authenticated');
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sale-orders" element={isAuthenticated ? <SaleOrdersPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

