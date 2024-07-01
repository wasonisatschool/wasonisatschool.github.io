import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CharterPage from './components/CharterPage';
import ContactPage from './components/ContactPage';
import MembershipPage from './components/MembershipPage';
import ReportsPage from './components/ReportsPage';
import ReportDetailPage from './components/ReportDetailPage';
import NewsPage from './components/NewsPage'; 
import NotFound from './NotFound';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/charter" element={<CharterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/:id" element={<ReportDetailPage />} />
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
