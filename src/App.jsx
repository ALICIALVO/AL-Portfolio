import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App  = () => {

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}


export default App;
