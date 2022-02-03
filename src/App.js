import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Household from "./components/Household/Household";
import Beauty from "./components/Beauty/Beauty";
import Footer from "./components/Footer/Footer";
import Knitting from "./components/Knitting/Knitting";
import Sewing from "./components/Sewing/Sewing";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entretien" element={<Household />} />
        <Route path="/beaute" element={<Beauty />} />
        <Route path="/tricot" element={<Knitting />} />
        <Route path="/couture" element={<Sewing />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
