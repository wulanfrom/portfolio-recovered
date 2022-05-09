import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

import Navigation from './components/Navbar/Navigation'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

// Projects
import CeeyaSearch from './components/Projects/CeeyaSearch/CeeyaSearch';
import SomeWeather from './components/Projects/SomeWeather/SomeWeather';
import ReBalance from './components/Projects/reBalance/reBalance';
import WheelOn from './components/Projects/WheelOn/WheelOn';
import XDesign from './components/Projects/XDesign/XDesign'
import NftPoster from './components/Projects/NftPoster/NftPoster';
import ColorArt from './components/Projects/ColorArt/ColorArt';
import GoodFood from './components/Projects/GoodFood/GoodFood';
import AsianCHI from './components/Projects/AsianCHI/AsianCHI';

function App() {
  return (
    <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ceeya" element={<CeeyaSearch />} />
          <Route path="someWeather" element={<SomeWeather />} />
          <Route path="reBalance" element={<ReBalance />} />
          <Route path="wheelOn" element={<WheelOn />} />
          <Route path="xDesign" element={<XDesign />} />
          <Route path="nftPoster" element={<NftPoster />} />
          <Route path="colorArt" element={<ColorArt />} />
          <Route path="goodFood" element={<GoodFood />} />
          <Route path="asianCHI" element={<AsianCHI />} />
        </Routes>
    </div>
  );
}

export default App;
