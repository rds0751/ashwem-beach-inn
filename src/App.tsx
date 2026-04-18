import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Retreats from './pages/Retreats';
import Pricing from './pages/Pricing';
import Book from './pages/Book';
import Experiences from './pages/Experiences';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import ExitIntentPopup from './components/ExitIntentPopup';
import StickyBookingBar from './components/StickyBookingBar';
import SeoManager from './components/SeoManager';

function App() {
  return (
    <Router>
      <SeoManager />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/retreats" element={<Retreats />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book" element={<Book />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ExitIntentPopup />
        <StickyBookingBar />
      </div>
    </Router>
  );
}

export default App;
