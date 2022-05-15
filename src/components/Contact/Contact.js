import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './Contact.css'
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'

import Divider from '../Divider/Divider'

export default function Contact() {
  const timeline = gsap.timeline();

    useEffect(() => {
        const split = new SplitText(".hero-project-title", {
            type: 'lines',
            linesClass: 'lineChildren',
        });

        const splitParent = new SplitText(".hero-project-title", {
            type: 'lines',
            linesClass: 'lineParent',
        });

        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power2'
        })

        gsap.fromTo(".hero-project-category", {opacity: 0, y: 50}, {opacity: 1, duration: 1, y:0});
        gsap.fromTo(".social-links", {opacity: 0, y: 50}, {opacity: 1, duration: 1, y:0, stagger: 0.1});
    }, [])

  return (
    <div data-scroll-section>
      <div>
        <div style={{backgroundColor: "#171717", color: "#fff", height: "100vh" }} className="hero-contact hero-section d-flex justify-content-center flex-column">
          <div className="pt-5">
            <Container className="pt-5" >
              <div className="mt-5"></div>
              <p className="hero-project-category m-0">want to make something amazing together?</p>
              <p style={{fontSize: "150px"}} className="bebas-text hero-project-title m-0">Lets chat over coffee☕️</p>
              <p className="hero-project-desc"></p>

              <div className="d-flex">
                  <a href="mailto:biasindi.wulanfrom@gmail.com" className="social-links mb-3">Email</a>
                  <p className="mx-4">//</p>
                  <a href="https://www.behance.net/wulanfrom"className="social-links mb-3">Behance</a>
                  <p className="mx-4">//</p>
                  <a href="https://dribbble.com/biasindi" className="social-links mb-3">Dribbble</a>
                  <p className="mx-4">//</p>
                  <a href="https://www.linkedin.com/in/wulanfrom/" className="social-links mb-3">LinkedIn</a>
                  <p className="mx-4">//</p>
                  <a href="https://github.com/wulanfrom" className="social-links mb-3">Github</a>
              </div>
            </Container>
          </div>

          <Divider height={270} />

          <div className="divider-footer mb-2"></div>
          <div className="text-center mt-2">
              <p className="copyright-text text-white">Copyright 2022. Developed and Designed by wulanfrom with ❤️</p>
          </div>
        </div>
      </div>
    </div>
  )
}
