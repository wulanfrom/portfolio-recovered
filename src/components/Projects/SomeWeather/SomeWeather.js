import React, { useState } from 'react'
import './SomeWeather.css'
import { Container, Row, Col } from 'react-bootstrap'

// images
import someWeatherpng from '../../../resources/someWeather/some-weather.png'
import someWeatherMoodboard from '../../../resources/someWeather/someWeatherMoodboard.png'
import swFeature1 from '../../../resources/someWeather/SW-feature-1.png'
import swFeature2 from '../../../resources/someWeather/SW-feature_2.png'
import swFeature3 from '../../../resources/someWeather/SW-feature-3.png'
import swPersona from '../../../resources/someWeather/SW-persona.png'
import swWirefame from '../../../resources/someWeather/SW-wireframes.png'
import swDesign from '../../../resources/someWeather/SW-DesignSystem.png'
import swClosing from '../../../resources/someWeather/SW-closing.png'

// context
import context1 from '../../../resources/someWeather/context-1.png'
import context2 from '../../../resources/someWeather/context-2.png'
import context3 from '../../../resources/someWeather/context-3.png'
import context4 from '../../../resources/someWeather/context-4.png'
import context5 from '../../../resources/someWeather/context-5.png'

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'


export default function SomeWeather() {
  const category = "UX DESIGN // APP DESIGN"
  const projectTitle = "Some(섬) Weather"
  const projectDesc = "Integrating environmental awareness to everyday weather apps."
  const role = "UI/UX Designer, UX Researcher, Ideation, discovery, prototyping, UX Copywriting"
  const sector = "Weather App, Sustainability, Expenses Management"
  const colors = ["#4CDCB1", "#000"]

  return (
    <div className="someWeather-doc" data-scroll-section>
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
              <p>Climate change has been a major concern the past several years due to the change in lifestyles. There have been many activism and movements to bring about greener change, however, besides the main audience of activists, it is quite hard to convince people who are neutral about the environment to understand the severity of the problem and start a greener lifestyle due to the lack of impact and amount of effort needed. Climate change is mainly felt through the abnormal changes in the weather, which could be noticed through weather apps. From this, our team concluded that weather app could work as the first messenger for people to notice these abnormal changes in the environment. Which is why a weather app could play a role in notifying users of environmental issues and introducing them to possible ways to contribute. <b>So how might we create a weather app that helps users integrate decisions that help the environment into their everyday lives?</b></p>
            </Col>
          </Row>
        </Container>

        <Divider height={72} />

        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <div className="d-flex justify-content-center context-container mb-2">
                <img className="context-img" src={context1}></img>
                <p className="context-desc">Climate change is becoming a big problem, causing floods and irreversible damages to lifestyles</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="d-flex justify-content-center context-container mb-2">
                <img className="context-img" src={context2}></img>
                <p className="context-desc">A lot of people do activism, but for neutral people, a lot of them are turned off due to the lack of impact and the amount of effort they need to put</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="d-flex justify-content-center context-container mb-2">
                <img className="context-img" src={context3}></img>
                <p className="context-desc">Climate change is mainly felt through the abnormal changes in the weather, which could be noticed through weather apps</p>
              </div>
            </Col>
          </Row>
          <Row>
          <Col sm={12} md={6} lg={6}>
              <div className="d-flex justify-content-center context-container mb-2">
                <img className="context-img" src={context4}></img>
                <p className="context-desc">A weather app could work as the first messenger for people to notice these abnormal changes in the environment</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="d-flex justify-content-center context-container mb-2">
                <img className="context-img" src={context5}></img>
                <p className="context-desc context-hmw">How might we create a weather app that helps users integrate greener decisions into their everyday lives?</p>
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
                <div className="Section-line-sw"></div>
                <p className="Section-type">Contribution</p>
                <p className="Section-title">My Role</p>
                <p>User Research, User Interviews, Journey Mapping, Sketching, Wireframing, Visual Design, Illustration.</p>
              </div>
            </div>
          </div>
        </Container>

        <Divider height={120} />

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={someWeatherMoodboard}></img>
          </div>
        </Container>

        <Divider height={72} />

        {/* Feature */}
        <div className="wireframe-container py-5">
          <Divider height={72} />
          {/* Product Intro */}
          <Container className="Single-Column-Container">
            <div>
              <div>
                <div>
                  <div className="Section-line-sw"></div>
                  <p className="Section-type">Final Product</p>
                  <p className="Section-title">What is Some(섬) Weather?</p>
                  <p>Some(섬) Weather is a weather app aimed at integrating environmental awareness by motivating users to make small environmentally-friendly decisions.</p>
                </div>
              </div>
            </div>
          </Container>

          <Divider height={120} />

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

          <Divider height={150} />

          <Container>
            <Row>
              <Col md={5} lg={6}>
                <div>
                  <p className="Section-title">Find today's Tip to save tomorrow</p>
                  <p>We help you get through your day better through money saving and eco-friendly tips.</p>
                </div>
              </Col>
              <Col md={7} lg={6}>
              </Col>
            </Row>
          </Container>
          <Divider height={48} />
          <Container className="img-giant">
            <img className="opening-image" src={swFeature2}></img>
          </Container>

          <Divider height={150} />
          
          <Container>
            <Row>
              <Col md={5} lg={6}>
                <div>
                  <p className="Section-title">Checking the weather and helping the environment can be fun!</p>
                  <p>Feel the contributions of your actions through our data and the look of your app.</p>
                </div>
              </Col>
              <Col md={7} lg={6}>
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
                <p className="Section-type">Identifying our Target User</p>
                <p className="Section-title">How do People Get Information on the Environment?</p>
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
          <Divider height={72} />
          <Container>
            <Row>
                <Col md={4} lg={4}>
                <div>
                <div>
                  <div className="Section-line-sw"></div>
                  <p className="Section-type">Low-fi prototyping</p>
                  <p className="Section-title">Wireframes</p>
                  <p>We created low-fi prototypes built on the previous designs. The main changes are the small tasks list, the popup to remind users of these tasks, and the addition of a user profile to track their money savings.</p>
                </div>
              </div>
                </Col>
                <Col md={8} lg={8}>
                  <div className="img-giant">
                    <img className="opening-image" src={swWirefame}></img>
                  </div>
                </Col>
              </Row>
          </Container>
          <Divider height={72} />
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
                <p className="mb-4">We created a design system to best brand Some(섬) Weather. We aimed at giving a neat and environmentally friendly feel through the use of green and mint colors.</p>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={swDesign}></img>
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

          {/* Direction
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
                  <h5>"Small things lead to big changes" -Allen Hershkowitz</h5>
                  <p>Through the combination of regular habits built by checking the weather daily, along with small tips that help save money while pushing users to a greener lifestyle, we believe that the app can bring about change through mailny two things:</p>
                </div>
              </Col>
              <Col md={5} lg={6}>
                <p>🌱 <b>Anyone can make an impact for the environment.</b> Even for people who aren’t into helping the environment, they can still unconsciously help the environment.</p>
                <p>💥 Make an impact one step at a time</p>
                <p>🧐 Understand complex weather information at a glance</p>
              </Col>
          </Row>
        </Container>

        <Divider height={120} /> */}

        {/* Iteration */}
        <Container className="Single-Column-Container">
          <div>
            <div>
              <div>
                <div className="Section-line-sw"></div>
                <p className="Section-type">Results</p>
                <p className="Section-title">Impact</p>
                <h4 className="mb-3">"Small things lead to big changes" -Allen Hershkowitz</h4>
                <p>Through the combination of regular habits built by checking the weather daily, along with small tips that help save money while pushing users to a greener lifestyle, we believe that the app can bring about change through mailny two things:</p>
              </div>
              <div className="px-4 mx-4">
                <div>
                  <p className="list-main-point">🚶 Start Small</p>
                  <ul className="list-item-points">
                    <li>Even for people who aren’t into helping the environment, they can still unconsciously help the environment through small actions.</li>
                  </ul>
                </div>
                <Divider height={24} />
                <div>
                  <p className="list-main-point">🤝 The Power in Numbers</p>
                  <ul className="list-item-points">
                    <li>By integrating small actions into our everyday lives, we can show how small actions could accumulate to something big and impactful through the impact multiplies with more people doing so.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Divider height={120} />

        {/* Process */}
        <Container className="Single-Column-Container">
          <div>
            <div>
              <div>
                <div className="Section-line-sw"></div>
                <p className="Section-type">Reflection</p>
                <p className="Section-title">Lessons Learned & Thank Yous</p>
                <p>This was my first time working with a group of designers, so it was challenging to come to a final concrete style for our app since everyone had differing design styles. The division of work was also important in order to play into the strengths of each member. I learned especially on how to take into account other’s opinions and reach a group agreement. I think it’s important for the group to believe in what we are all working on. Thank you to Professor Sangsu Lee for the mentoring throughout the project and my teammates for helping me grow as a designer and listener.</p>
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
      <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
    </div>
  )
}
