import React from 'react';
import './App.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import SearchResultsPage from './pages/SearchResultsPage';
import Home from "./pages/Home";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="homePage" element={<Home />} />
          <Route path="searchResultsPage" element={<SearchResultsPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;

