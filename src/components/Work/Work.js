import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BigTitle from '../BigTitle/BigTitle'
import Divider from '../Divider/Divider'
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects'
import Footer from '../Footer/Footer'
import OtherProjects from '../OtherProjects/OtherProjects'
import Publications from '../Publications/Publications'
import Navigation from '../Navbar/Navigation'
import './Work.css'

import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap'

export default function Work() {
    
  return (
    <div data-scroll-section>
        {/* <Navigation />  */}
        <div>
            <div style={{backgroundColor: "#171717", color: "#fff", height: "110vh"}} className="hero-section hero-animated d-flex flex-column">
                <Divider height={150}/>
                {/* <div className="pt-5">
                    <Container>
                        <Row>
                            <Col sm={10} md={10} lg={9}>
                                <div className=""></div>
                                <p className="hero-project-category mt-5">DESIGNER // DEVELOPER // problem solver</p>
                                <p style={{fontSize: "150px", lineHeight: "150px"}} className="bebas-text hero-project-title m-0">Hi, I'm Nabila!👋</p>
                                <p style={{fontSize: "32px"}} className="hero-project-desc mb-5">Working at the intersection of design and code, creating experiences that help people.</p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div> */}
                <Container className="work-inner">
                    <BigTitle lineContent1="DESIGNER // DEVELOPER // PROBLEM SOLVER" lineContent2="Hi, I'm Nabila!👋"/>
                </Container>
            </div>
        </div>

        <Container>
            <Divider height={72}/>

            <div id="featured-projects">
                <FeaturedProjects />
            </div>

            <Divider height={180}/>

            <div id="other-projects">
                <OtherProjects />
            </div>
            
            <Divider height={180}/>

            <div id="publications">
                <Publications />
            </div>

            <Divider height={120}/>

        </Container>

        <div>
            <Footer />
        </div>
    </div>
  )
}
