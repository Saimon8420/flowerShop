import './App.css'
import Navbar from "../src/components/Header/Navbar";
import Cover from "../src/components/Cover/Cover";
import Banner from './components/Banner/Banner';
import Flowers from './components/Flowers/Flowers';
import FeatureFlower from './components/FeatureFlower/FeatureFlower';
import Offers from './components/Offers/Offers';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='displayApp'>
      <Navbar />
      <Cover />
      <Banner />
      <Flowers />
      <FeatureFlower />
      <Offers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
