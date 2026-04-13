import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Scholarship from './components/Scholarship/Scholarship';
import MemberType from './components/MemberType/MemberType';
import MemberData from './components/MemberData/MemberData';
import Founders from './components/Founders/Founders';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/member-type" element={<MemberType />} />
            <Route path="/member-data" element={<MemberData />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
