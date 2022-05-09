import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import Divider from '../Divider/Divider'

// icons
import Behance from '../../resources/icons/behance.svg'
import Dribbble from '../../resources/icons/Vector-1.svg'
import LinkedIn from '../../resources/icons/Vector-2.svg'
import Email from '../../resources/icons/Vector-3.svg'
import Github from '../../resources/icons/Vector.svg'

export default function Footer() {
  return (
    <div>
        <div className="footer-div m-0 p-0 px-5 pt-5 pb-3">
            <Container>
                <Divider height={24}/>
                <Row>
                    <Col sm={9} md={8} lg={7} className="d-flex align-items-center justify-content-center">
                        <div className="text-white main-contact">
                            <p className="footer-tag m-0">Lets Create Something Together</p>
                            <p style={{fontSize: "120px", lineHeight: "150px"}} className="bebas-text">Lets chat over coffee☕️</p>
                        </div>
                    </Col>
                </Row>
                <Row className="footer-responsive mt-3">
                    <Col sm={9} md={9} lg={9} className="d-flex align-items-center text-white">
                        <div className="d-flex">
                            <a href="mailto:biasindi.wulanfrom@gmail.com" className="social-links me-4 mb-3">Email</a>
                            <a href="https://www.behance.net/wulanfrom"className="social-links me-4 mb-3">Behance</a>
                            <a href="https://dribbble.com/biasindi" className="social-links me-4 mb-3">Dribbble</a>
                            <a href="https://www.linkedin.com/in/wulanfrom/" className="social-links me-4 mb-3">LinkedIn</a>
                            <a href="https://github.com/wulanfrom" className="social-links me-4 mb-3">Github</a>
                            {/* <img className="social-icon me-3 mb-2" src={Email} />
                            <img className="social-icon me-3 mb-2" src={Behance} />   
                            <img className="social-icon me-3 mb-2" src={Dribbble} />
                            <img className="social-icon me-3 mb-2" src={LinkedIn} />
                            <img className="social-icon me-3 mb-2" src={Github} /> */}
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
