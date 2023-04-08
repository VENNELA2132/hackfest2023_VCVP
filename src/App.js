import React from 'react';
import './App.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import searchResultsPage from './pages/SearchResultsPage';
import Home from "./pages/Home";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';



/*
Code for Routing pages !
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>
      <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
      </div>


      <Routes>
        <Route exact path="/" component={Home}>
          <Route path="homePage" component={Home} />
          <Route path="searchResultsPage" component={searchResultsPage} />
        </Route>
      </Routes>
*/

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="homePage" element={<Home />} />
          <Route path="searchResultsPage" element={<searchResultsPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;

