import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Attorneys from './pages/Attorneys'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <>
    <ScrollToTop />
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/attorneys" element={<Attorneys />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
    
     
    </Routes>
    <Footer />
    </>
   
  )
}

export default App