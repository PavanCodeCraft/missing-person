import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Report from './pages/Report';
import CaseDetails from './pages/CaseDetails';
import Contact from './pages/Contact';
import './styles/global.css';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/report" element={<Report />} />
            <Route path="/case/:id" element={<CaseDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
