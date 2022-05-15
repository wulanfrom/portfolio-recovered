import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Routes, Route, Link } from "react-router-dom";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { CSSTransition } from 'react-transition-group';
import {gsap} from 'gsap'

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

// hooks
import useLocoScroll from './hooks/useLocoScroll'
import locomotiveScroll from 'locomotive-scroll';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  const containerRef = useRef(null)
  // const { scroll } = useLocomotiveScroll();

  // pre-loader , helps with animation
  const [preloader, setPreloader] = useState(true);
  // useLocoScroll(!preloader);

  const [timer, setTimer] = useState(1);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }

  // for initial loading
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1); //decrease by one second
    }, 1000)
  }, [])


  //for timer loading
  useEffect(() => {
    if (timer == 0) {
      clear(); //stop the timer if it goes to 0
    }
  }, [timer])

  return (
      <>
      { preloader ? (
        <div style={{height: "100vh", backgroundColor:"#171717", color: "#fff"}} className="loader-wrapper absolute d-flex justify-content-center align-items-center flex-column">
          <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "80px" }}>The Portfolio is Loading</h1>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Have some tea while you wait🍵</h2>
        </div>
      ): (
        <div ref={containerRef} id="portfolio-container">
            <Navigation />

            <ScrollToTop />
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
        ) 
      }
      </>
  );
}

export default App;
