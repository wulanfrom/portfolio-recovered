import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ProjectFooter.css'
import { Link } from 'react-router-dom'

// icons
import Behance from '../../resources/icons/behance.svg'
import Dribbble from '../../resources/icons/Vector-1.svg'
import LinkedIn from '../../resources/icons/Vector-2.svg'
import Email from '../../resources/icons/Vector-3.svg'
import Github from '../../resources/icons/Vector.svg'

// images
import WheelOnPng from '../../resources/someWeather/someWeatherMoodboard.png'


export default function ProjectFooter(props) {
    const nextProject = props.next;
    const prevProject = props.prev;
    const nextLink = props.nextLink;
    const prevLink = props.prevLink;

    const projectLinks = {
        ceeya: "ceeya",
        someWeather: "someWeather",
        reBalance: "reBalance",
        wheelOn: "wheelOn"
    }

  return (
    <div>
        <div className="footer-div m-0 p-0 px-5 pt-5 pb-3">
            <Container>
                <div>
                    <div className="text-white more-projects mb-4 mt-3">
                        <p>More Projects</p>
                    </div>
                </div>
                <Row>
                    <Col>
                        {/* useHistory later */}
                        <Link className="link-container" to={ projectLinks.ceeya }>
                            <img className="prev-project-item" src={prevProject}></img>
                            <div className="pt-2">
                                <p className="prev-project-title m-0 text-white">Asian CHI</p>
                                <p className="prev-project-category m-0 text-white">WEBSITE DESIGN AND DEVELOPMENT</p>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="link-container" to={ projectLinks.someWeather }>
                            <img className="next-project-item" src={nextProject}></img>
                            <div className="pt-2 next-project-info">
                                <p className="next-project-title m-0 text-white">Asian CHI</p>
                                <p className="next-project-category m-0 text-white">WEBSITE DESIGN AND DEVELOPMENT</p>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className="footer-responsive mt-3 mb-2">
                    <Col sm={12} md={12} lg={12} className="d-flex align-items-center justify-content-center text-white">
                        <div className="d-flex">
                            <img className="social-icon me-3 mb-2" src={Email} />
                            <img className="social-icon me-3 mb-2" src={Behance} />   
                            <img className="social-icon me-3 mb-2" src={Dribbble} />
                            <img className="social-icon me-3 mb-2" src={LinkedIn} />
                            <img className="social-icon mb-2" src={Github} />
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
