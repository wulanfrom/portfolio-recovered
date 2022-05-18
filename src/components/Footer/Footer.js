import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import Divider from '../Divider/Divider'
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'



// icons
import Behance from '../../resources/icons/behance.svg'
import Dribbble from '../../resources/icons/Vector-1.svg'
import LinkedIn from '../../resources/icons/Vector-2.svg'
import Email from '../../resources/icons/Vector-3.svg'
import Github from '../../resources/icons/Vector.svg'

export default function Footer() {
    const footerRef = useRef();
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(footerRef);

    useEffect(() => {
        if (onScreen) setReveal(onScreen)
    }, [onScreen])
    
    useEffect(() => {
        if (reveal) {
            const split = new SplitText(".footer-move-text", {
                type: "lines",
                linesClass: "lineChildren",
              });
              const splitParent = new SplitText(".footer-move-text", {
                type: "lines",
                linesClass: "lineParent",
              });
    
            gsap.fromTo(split.lines, {y:200}, {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 0.1,
                ease: 'power2'
            })
        }
    }, [reveal])

  return (
    <div>
        <div className="footer-div m-0 p-0 px-5 pt-5 pb-3">
            <Container>
                <Divider height={24}/>
                <Row ref={footerRef} className={cn({"is-reveal": reveal})}>
                    <Col sm={9} md={8} lg={7} className="d-flex align-items-center">
                        <div className="text-white main-contact">
                            <p style={{fontSize: "120px", lineHeight: "120px"}} className="footer-move-text bebas-text m-0">Lets chat over coffee☕️</p>
                            <p className="footer-move-text  footer-tag m-0 mb-4">reach me here</p>
                        </div>
                    </Col>
                </Row>
                {/* <Row className="footer-responsive mt-3">
                    <Col sm={9} md={9} lg={9} className="d-flex align-items-center text-white">
                        <div className="d-flex">
                            <a href="mailto:biasindi.wulanfrom@gmail.com" target="_blank" rel="noopener noreferrer" className="social-links me-4 mb-3">Email</a>
                            <a href="https://www.behance.net/wulanfrom" target="_blank" rel="noopener noreferrer" className="social-links me-4 mb-3">Behance</a>
                            <a href="https://dribbble.com/biasindi" target="_blank" rel="noopener noreferrer" className="social-links me-4 mb-3">Dribbble</a>
                            <a href="https://www.linkedin.com/in/wulanfrom/" target="_blank" rel="noopener noreferrer" className="social-links me-4 mb-3">LinkedIn</a>
                            <a href="https://github.com/wulanfrom" target="_blank" rel="noopener noreferrer" className="social-links me-4 mb-3">Github</a>
                        </div>
                    </Col>
                </Row> */}
                <Row className="footer-responsive mt-3 mb-2">
                    <Col sm={12} md={12} lg={12} className="d-flex align-items-center justify-content-center text-white">
                        <div className="d-flex">
                            <a href="mailto:biasindi.wulanfrom@gmail.com" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={Email} /></a>
                            <a href="https://www.behance.net/wulanfrom" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={Behance} /></a>
                            <a href="https://dribbble.com/biasindi" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={Dribbble} /></a>
                            <a href="https://www.linkedin.com/in/wulanfrom/" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={LinkedIn} /></a>
                            <a href="https://github.com/wulanfrom" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={Github} /></a>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex flex-column justify-content-center">
                    <div className="divider-footer mb-2"></div>
                    <div className="text-center mt-2">
                        <p className="copyright-text text-white">Copyright 2022. Developed and Designed by wulanfrom with ❤️</p>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}
