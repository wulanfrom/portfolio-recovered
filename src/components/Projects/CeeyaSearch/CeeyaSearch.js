import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'


export default function CeeyaSearch() {
  const category = "UX DESIGN // WEB Development"
  const projectTitle = "Ceeya Inc Search&Connect"
  const projectDesc = "Ceeya.io’s Search Website Design, from conceptualization to implementation."
  const role = "UI/UX Designer, UX Researcher, Ideation, discovery, prototyping, UX Copywriting"
  const sector = "Search page, Soloprenuer Business"
  const colors = ["#272727", "#fff"]
  return (
    <div className="ceeyaSearch-doc">
      <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={someWeatherpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>

      <div className="project-content">
        {/* Overview */}
        <Container>
          <Row>
          <Col>
              <div>
                <div className="Section-line-sw"></div>
                <p className="Section-type">Overview</p>
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col md={7} lg={6}>
              <div>
                <p className="Section-title">Contribute to saving the environment, one day at a time</p>
              </div>
            </Col>
            <Col md={5} lg={6}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </Col>
          </Row>
        </Container>

        <Divider height={72} />

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={someWeatherMoodboard}></img>
          </div>
        </Container>

        <Divider height={120} />

        {/* Feature */}
        <div className="wireframe-container py-5">
          <Container>
            <Row>
            <Col>
                <div>
                  <div className="Section-line-sw"></div>
                  <p className="Section-type">Features</p>
                </div>
              </Col>
              <Col>
              </Col>
            </Row>
            <Row>
              <Col md={7} lg={6}>
                <div>
                  <p className="Section-title">Get to know the weather at a glance and filter which information is important to you</p>
                  <p>We provide you with accurate forecasts and detailed meteorological information according to your preferences</p>
                </div>
              </Col>
              <Col md={5} lg={6}>
              </Col>
            </Row>
          </Container>
          <Divider height={48} />
          <Container className="img-giant">
            <img className="opening-image" src={swFeature1}></img>
          </Container>

          <Divider height={120} />

          <Container>
            <Row>
              <Col md={7} lg={6}>
                <div>
                  <p className="Section-title">Find today's Tip to save tomorrow</p>
                  <p>We help you get through your day better through money saving and eco-friendly tips.</p>
                </div>
              </Col>
              <Col md={5} lg={6}>
              </Col>
            </Row>
          </Container>
          <Divider height={48} />
          <Container className="img-giant">
            <img className="opening-image" src={swFeature2}></img>
          </Container>

          <Divider height={120} />
          
          <Container>
            <Row>
              <Col md={5} lg={6}>
              </Col>
              <Col md={7} lg={6}>
                <div>
                  <p className="Section-title">Checking the weather and helping the environment can be fun!</p>
                  <p>Feel the contributions of your actions through our data and the look of your app.</p>
                </div>
              </Col>
            </Row>
          </Container>
          <Divider height={48} />
          <Container className="img-giant">
            <img className="opening-image" src={swFeature3}></img>
          </Container>
        </div>

        <Divider height={72} />

        {/* Process */}
        <Container className="Single-Column-Container">
          <div>
            <div>
              <div>
                <div className="Section-line-sw"></div>
                <p className="Section-type">Process</p>
                <p className="Section-title">Identifying our Target User</p>
                <p>To better understand how people use weather apps and how people obtain info about environmental problems, we conducted a survey with 50 people and conducted follow-up interviews with 5 of them. Our core questions included when and for what reasons do they usually use weather apps, how knowledgeable are they of environmental issues and how they’re responding to it, and where do they usually info on environmental issues. Our finds are all summarized through our persona and user journey map.</p>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={swPersona}></img>
          </div>
        </Container>

        <Divider height={120} />

        {/* Direction */}
        <Container className="Two-Column-Container">
          <Row>
            <Col>
                <div>
                  <div className="Section-line-sw"></div>
                  <p className="Section-type">Direction</p>
                </div>
              </Col>
              <Col>
              </Col>
            </Row>
            <Row>
              <Col md={7} lg={6}>
                <div>
                  <p className="Section-title">Design Goals</p>
                  <p>From the pain points, we synthesized key design goals to support the key features of our design</p>
                </div>
              </Col>
              <Col md={5} lg={6}>
                <p>🌱 Motivate users to do small, environmentally-friendly actions in their everyday lives</p>
                <p>💥 Help make users understand the impact of their small actions</p>
                <p>🧐 Understand complex weather information at a glance</p>
              </Col>
          </Row>
        </Container>

        <Divider height={120} />

        {/* Iteration */}
        <Container className="Single-Column-Container">
          <div>
            <div>
              <div>
                <div className="Section-line-sw"></div>
                <p className="Section-type">Iteration</p>
                <p className="Section-title">Restating the Problem</p>
                <p>After our mid- project presentation, we received a lot of feedback from our peers, in which they highlighted three main concerns:</p>
              </div>
              <div className="px-4 mx-4">
                <div>
                  <p className="list-main-point">📄 The lack of connection between the activities and articles</p>
                  <ul className="list-item-points">
                    <li>“I dont understand why I’m being shown this article when the tips tell me to do something else.”</li>
                  </ul>
                </div>
                <Divider height={24} />
                <div>
                  <p className="list-main-point">😪 Lack of drive to do the tasks</p>
                  <ul className="list-item-points">
                    <li>“I understand why I need to do the tasks, but I’m not really motivated to do so since I don’t get that much from doing them.”</li>
                  </ul>
                </div>
                <Divider height={24} />
                <div>
                  <p className="list-main-point">🗣 Lack of means to track users’ sincerity in performing the tasks</p>
                  <ul className="list-item-points">
                    <li>“How can you make sure that the users don’t just get the reward without doing tasks?”</li>
                  </ul>
                </div>
              </div>
              <Divider height={24} />
              <p>From the feedback, our team decided to discard the article feature and brainstorm new ideas on how to motivate users as well as making them more environmentally aware.</p>
            </div>
          </div>
        </Container>

        <Divider height={120} />

        {/* Wireframes */}
        <div className="wireframe-container py-5">
          <Container>
            <Row>
                <Col md={4} lg={4}>
                  <div>
                    <div className="Section-line-sw"></div>
                    <p className="Section-title">Wireframes</p>
                  </div>
                </Col>
                <Col md={8} lg={8}>
                  <div className="img-giant">
                    <img className="opening-image" src={swWirefame}></img>
                  </div>
                </Col>
            </Row>
          </Container>
        </div>

        <Divider height={120} />

        {/* Result */}
        <Container className="Single-Column-Container">
          <div>
            <div>
              <div>
                <div className="Section-line-sw"></div>
                <p className="Section-type">RESULT</p>
                <p className="Section-title">Design System</p>
                <p className="mb-4">We created a design system to best brand some weather.</p>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={someWeatherMoodboard}></img>
          </div>
        </Container>

        <Divider height={120} />

        {/* hifi prototyping */}
        {/* <Container className="Single-Column-Container">
          <div>
            <div>
              <div>
                <div className="Section-line-sw"></div>
                <p className="Section-type">HI-FI PROTOTYPING</p>
                <p className="Section-title">Mobile App Prototype</p>
                <p>I implemented a mobile app prototype using Dart and Flutter.</p>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={someWeatherMoodboard}></img>
          </div>
        </Container> */}

        <Divider height={120} />

          {/* Direction */}
        <Container className="Two-Column-Container">
          <Row>
            <Col>
                <div>
                  <div className="Section-line-sw"></div>
                  <p className="Section-type">Results</p>
                </div>
              </Col>
              <Col>
              </Col>
            </Row>
            <Row>
              <Col md={7} lg={6}>
                <div>
                  <p className="Section-title">Impact</p>
                  <p>This project can open up doors to possible solutions to ...</p>
                </div>
              </Col>
              <Col md={5} lg={6}>
                <p>🌱 Motivate users to do small, environmentally-friendly actions in their everyday lives</p>
                <p>💥 Help make users understand the impact of their small actions</p>
                <p>🧐 Understand complex weather information at a glance</p>
              </Col>
          </Row>
        </Container>

        <Divider height={120} />

        {/* Process */}
        <Container className="Single-Column-Container">
          <div>
            <div>
              <div>
                <div className="Section-line-sw"></div>
                <p className="Section-type">AFTERNOTE</p>
                <p className="Section-title">Reflection & Thank You</p>
                <p>This was my first time working with a group of designers, so it was really challenging to come to a concrete style for our app since everyone had differing design tastes. Thank you to Professor Sangsu Lee and the TAs of ID304 for the mentoring throughout the project. And thank you to my teammates for sharing your bright insights and ideas! I really grew a lot as a designer thanks to you guys.</p>
              </div>
            </div>
          </div>
        </Container>

        <Divider height={120} />

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={swClosing}></img>
          </div>
        </Container>

        <Divider height={72} />
      </div>

      {/* Footer */}
      <ProjectFooter />
    </div>
  )
}
