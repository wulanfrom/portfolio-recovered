import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Divider from '../Divider/Divider'
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects'
import Footer from '../Footer/Footer'
import OtherProjects from '../OtherProjects/OtherProjects'
import Publications from '../Publications/Publications'
import './Work.css'

export default function Work() {
  return (
    <div>
        <div>
            <div style={{backgroundColor: "#171717", color: "#fff", height: "900px"}} className="hero-section d-flex flex-column">
                <Divider height={150}/>
                <div className="pt-5">
                    <Container>
                        <Row>
                            <Col sm={9} md={9} lg={8}>
                                <div className="mt-5"></div>
                                <p className="hero-project-category m-0">DESIGNER // DEVELOPER</p>
                                {/* <div className="mt-5"></div> */}
                                <p style={{fontSize: "150px"}} className="bebas-text hero-project-title m-0">Hi, I'm Nabila!👋</p>
                                <p style={{fontSize: "32px"}} className="hero-project-desc mb-5">Working at the intersection of design and code, creating experiences that help people.</p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>

        <Container>
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
