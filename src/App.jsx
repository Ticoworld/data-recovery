import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Header from './components/Header';
import Footer from './components/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import Privacy from './pages/Privacy';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quotes" element={<Quotes/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
