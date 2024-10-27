import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Faq from './pages/Faq';
import Portfolio from './pages/Portofolio';
import Contact from './pages/Contact';


function App() {
    return (
      <>
        <Navigation />
        <Home />
        <Services />
        <Testimonials />
        <Faq />
        <Portfolio />
        <Contact />
        <Footer />
        
      </>
    );
}

export default App;