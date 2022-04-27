import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

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
                <Row>
                    <Col sm={9} md={9} lg={9} className="d-flex align-items-center justify-content-center">
                        <div className="text-white main-contact">
                            <p>Interested in working together? Lets chat over <p className="drinks">coffee ☕️</p></p>
                        </div>
                    </Col>
                </Row>
                <Row className="footer-responsive mt-3">
                    <Col sm={9} md={9} lg={9} className="d-flex align-items-center text-white">
                        <div className="d-flex">
                            <p className="me-4 social-icon">Email</p>
                            <p className="me-4 social-icon">Behance</p>
                            <p className="me-4 social-icon">Dribbble</p>
                            <p className="me-4 social-icon">LinkedIn</p>
                            <p className="me-4 social-icon">Github</p>
                            {/* <img className="social-icon me-3 mb-2" src={Email} />
                            <img className="social-icon me-3 mb-2" src={Behance} />   
                            <img className="social-icon me-3 mb-2" src={Dribbble} />
                            <img className="social-icon me-3 mb-2" src={LinkedIn} />
                            <img className="social-icon me-3 mb-2" src={Github} /> */}
                        </div>
                    </Col>
                </Row>
                <div className="divider-footer mb-2"></div>
                <div className="text-center mt-2">
                    <p className="copyright-text text-white">Copyright 2022. Developed and Designed by wulanfrom with ❤️</p>
                </div>
            </Container>
        </div>
    </div>
  )
}
