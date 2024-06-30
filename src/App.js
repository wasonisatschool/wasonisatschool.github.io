import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CharterPage from './components/CharterPage';
import ContactPage from './components/ContactPage';
import ArticlePage from './components/ArticlePage';
import MembershipPage from './components/MembershipPage';
import PublicLawAndCitiesPage from './components/PublicLawAndCitiesPage';
import ReportsPage from './components/ReportsPage';
import ReportDetailPage from './components/ReportDetailPage';
import NewsPage from './components/NewsPage'; 
import PrivacyPolicyPage from './components/PrivacyPolicyPage'; // 新增PrivacyPolicyPage組件
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
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/public-law-and-cities-2024" element={<PublicLawAndCitiesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/:id" element={<ReportDetailPage />} />
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* 新增PrivacyPolicyPage路由 */}
        <Route path="*" element={<NotFound />} /> {/* 修改這一行 */}
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
