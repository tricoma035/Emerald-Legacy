import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import PolishingPage from './pages/PolishingPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import EmeraldDetailPage from './pages/EmeraldDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/buy/:id" element={<EmeraldDetailPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/polishing" element={<PolishingPage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;