import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CharterPage from './components/CharterPage';
import ContactPage from './components/ContactPage';
import MembershipPage from './components/MembershipPage';
import ReportsPage from './components/ReportsPage';
import NewsPage from './components/NewsPage'; 
import Conferences from './components/Conferences';
import AboutUsPage from './components/About';
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
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="/about-us" element={<AboutUsPage />} /> 
        <Route path="/conferences" element={<Conferences />} /> 
        <Route path="*" element={<NotFound />} /> 
        <Route path="/menu-left" render={() => <Header menuDirection="left" />} />
      <Route path="/menu-down" render={() => <Header menuDirection="down" />} />
      <Route path="/menu-right" render={() => <Header menuDirection="right" />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
