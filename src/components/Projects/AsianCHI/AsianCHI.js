import React from 'react'
import './AsianCHI.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// images
import nftpng from '../../../resources/asianCHI/asianchi.png'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function AsianCHI() {
    const category = "Web Design, Development, and Management"
    const projectTitle = "Asian CHI Symposium 2021 Official Website"
    const projectDesc = "Building and managing Asian CHI Symposium 2021's Official Website"
    const role = "Web Design, Front End Developer, Website Chair"
    const sector = "Conference"
    const colors = ["#00357C", "#fff"]

    const toAsianCHI = (e) => {
        e.preventDefault();
        window.location.href = 'https://asian-chi.github.io/2021/';
    }

  return (
    <div className="asianCHI-doc" data-scroll-section>
        <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={nftpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
    
        <div className="project-content">
            {/* Overview */}
            <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-chi"></div>
                        <p className="Section-type">overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">Creating and Managing One of HCI's Biggest Conference</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>During my time as the website chair of Asian CHI Symposium 2021, I designed, built and managed the website throughout its run until the end of the conference. I conducted interviews to understand what key information people look for in conference websites, designed the website in Figma, implemented it using HTML/CSS/Javascript. Throughout the design, I had to make sure the website was accessible, following the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a>.</p>
                    </Col>
                </Row>
            </Container>
       </div>

       <Divider height={120} />

       {/* Open website */}
       <Container className="Single-Column-Container">
            <Row>
                <Col>
                    <div>
                        <div className="Section-line-chi"></div>
                        <p className="Section-type">RESULT</p>
                        <p className="Section-website-title">Check out the Final Website</p>
                    </div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <Button onClick={toAsianCHI} style={{backgroundColor: "#00357C", color: "#fff" }} className="website-button">-></Button>
                </Col>
            </Row>
        </Container>

        <Divider height={120} />

        {/* Footer */}
        <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
    </div>
  )
}
