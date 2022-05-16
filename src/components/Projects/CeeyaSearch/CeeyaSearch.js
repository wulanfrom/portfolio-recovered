import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./CeeyaSearch.css"

// images
import someWeatherpng from '../../../resources/ceeya-project.png'
import someWeatherMoodboard from '../../../resources/someWeather/someWeatherMoodboard.png'
import swFeature1 from '../../../resources/someWeather/SW-feature-1.png'
import swFeature2 from '../../../resources/someWeather/SW-feature-2.svg'
import swFeature3 from '../../../resources/someWeather/SW-feature-3.png'
import swPersona from '../../../resources/someWeather/SW-persona.png'
import swWirefame from '../../../resources/someWeather/SW-wireframes.png'
import swClosing from '../../../resources/someWeather/SW-closing.png'

import ceeyaHero from '../../../resources/searchConnect/ceeyaHero.png'
import context1 from '../../../resources/searchConnect/context1.png'
import context2 from '../../../resources/searchConnect/context2.png'
import context3 from '../../../resources/searchConnect/context3.png'
import context4 from '../../../resources/searchConnect/context4.png'
import csOpening from '../../../resources/searchConnect/opening-sc.png'
import csClosing from '../../../resources/searchConnect/closing-cs.png'
import inProgress from '../../../resources/searchConnect/inProgressCs.png'
import ceeyaLogo from '../../../resources/searchConnect/ceeyaLogo.webp'

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'


export default function CeeyaSearch() {
  const category = "UX DESIGN // WEB Development"
  const projectTitle = "Search.connect"
  const projectDesc = "Helping solopreneurs build their core user base, from ideation to realization."
  const role = "UX Engineer, UI/UX Designer, Front-End Developer"
  const sector = "Content Creation, Soloprenuer Business"
  const colors = ["#272727", "#fff"]

  const toCeeyaSearch = (e) => {
    e.preventDefault();
    window.location.href = 'https://search.ceeya.io/';
  }

  return (
    <div className="ceeyaSearch-doc" data-scroll-section>
      <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={ceeyaHero} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>

      <div className="project-content">
        {/* Overview */}
        <Container>
          <Row>
          <Col>
              <div>
                <div className="Section-line-cs"></div>
                <p className="Section-type">Overview</p>
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col md={7} lg={6}>
              <div>
                <p className="Section-title">Create value behind your service through your content</p>
              </div>
            </Col>
            <Col md={5} lg={6}>
              <p>With the availability of social media, it’s becoming easier to spread solopreneur’s services. Despite this, it is quite difficult to create a steady income due to the lack of interest from their target users. <b>How can help solopreneurs create a core user base?</b> I had a hypothesis that if the solopreneur creates valuable content, it will be able to build trust between the solopreneur and their target users. Through their contents, people will come and learn, build trust with them, and eventually sign up for their services. <b>Search.connect was built to test this hypothesis and help bring leads to the solopreneurs.</b></p>
            </Col>
          </Row>
        </Container>

        <Divider height={72} />

        <Container>
          <Row>
              <Col sm={12} md={7} lg={7}>
              <div className="d-flex justify-content-center context-container mb-2">
                  <img className="context-img" src={context1}></img>
                  <p className="context-desc">The existence of social media has made it easier for solopreneurs to sell their services online.</p>
              </div>
              </Col>
              <Col sm={12} md={5} lg={5}>
              <div className="d-flex justify-content-center context-container mb-2">
                  <img className="context-img" src={context2}></img>
                  <p className="context-desc">Despite this, many are still struggling to sell their services to their target users.</p>
              </div>
              </Col>
          </Row>
          <Row>
              <Col sm={12} md={6} lg={6}>
                  <div className="d-flex justify-content-center context-container mb-2">
                      <img className="context-img" src={context3}></img>
                      <p className="context-desc"><b>How can help solopreneurs create a core user base?</b></p>
                  </div>
                  </Col>
              <Col sm={12} md={6} lg={6}>
                  <div className="d-flex justify-content-center context-container mb-2">
                      <img className="context-img" src={context4}></img>
                      <p className="context-desc">By creating free, helpful content, solopreneurs will be able to build trust with their target audience, eventually creating a core user base.</p>
                  </div>
              </Col>
          </Row>
          </Container>

          <Divider height={120} />

          {/* My Role */}
          <Container className="Single-Column-Container">
          <div>
              <div>
              <div>
                  <div className="Section-line-cs"></div>
                  <p className="Section-type">Company Brief</p>
                  <p className="Section-title">Who are Ceeya Inc?</p>
                  <p><a style={{color: "#000", fontStyle: "italic", fontWeight: 700, textDecoration: "none"}}href="https://home.ceeya.io/">Ceeya Inc</a> is a company based in San Fransisco, CA. The company focuses on creating a space for soloprenuers to sell their services and build an audience. The company offers a personalized website that could be easily build, along with features to sell and market their items. Search.connect will be an addition to Ceeya Inc’s product line that will help solopreneurs better market their services and profile.</p>
              </div>
                <Divider height={24} />
                <img style={{ width: "100%"}} src={ ceeyaLogo } />
              </div>
          </div>
          </Container>

          <Divider height={120} />

          {/* My Role */}
          <Container className="Single-Column-Container">
          <div>
              <div>
              <div>
                  <div className="Section-line-cs"></div>
                  <p className="Section-type">Contribution</p>
                  <p className="Section-title">My Role</p>
                  <p>As the sole UX Designer and front end developer of the project, I was responsible for the overall visual design, interaction, and UX of the project, from needfinding to final implementation stage. I worked closely with the backend engineer to deploy the first phase of the website.</p>
              </div>
              </div>
          </div>
          </Container>

          <Divider height={120} />

          <Container>
            <div className="img-giant">
                <img className="opening-image" src={ csOpening }></img>
            </div>
          </Container>

          <Divider height={120} />

          {/* Open website */}
          <Container className="Single-Column-Container">
              <Row>
                  <Col>
                      <div>
                          <div className="Section-line-cs"></div>
                          <p className="Section-type">FINAL WEBSITE</p>
                          <h3 className="Section-website-title">Check out the Website</h3>
                      </div>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center">
                      <Button onClick={toCeeyaSearch} style={{backgroundColor: "#272727", color: "#fff"}} className="website-button">-></Button>
                  </Col>
              </Row>
          </Container>

          <Divider height={120} />

        {/* Direction */}
        <Container className="Two-Column-Container">
          <Row>
              <Col>
                  <div>
                  <div className="Section-line-cs"></div>
                  <p className="Section-type">AFTERMATH</p>
                  </div>
              </Col>
              <Col>
              </Col>
              </Row>
              <Row>
              <Col md={7} lg={6}>
                  <div>
                  <p className="Section-title">Impact and Result</p>
                  <p>After the completion and deployment of the product, the following effects were seen:</p>
                  </div>
              </Col>
              <Col md={5} lg={6}>
                  <p>📄 The product was launched 2 weeks in advance</p>
                  <p>😪 Through search and connect, we were able to bring [amount]% more traffic to Ceeya</p>
                  <p> 🗣 Put ceeya at the top of google search page with keywords, “[something]”</p>
                  <p> ➕ Another addition to the Ceeya Inc ecosystem to better help solopreneurs grow.</p>
              </Col>
            </Row>
          </Container>

          <Divider height={20} />

          <Container>
            <div className="img-giant">
              <img className="opening-image" src={inProgress}></img>
            </div>
            <div className="text-center">
              <p className="cs-inProgress m-0">Case study documentation in the works</p>
              <p className="cs-inProgress-sm m-0">More coming soon</p>
            </div>
          </Container>

          <Divider height={72} />

          <Container>
            <div className="img-giant">
              <img className="opening-image" src={csClosing}></img>
            </div>
          </Container>

          <Divider height={72} />
      </div>

      {/* Footer */}
      <ProjectFooter />
    </div>
  )
}
