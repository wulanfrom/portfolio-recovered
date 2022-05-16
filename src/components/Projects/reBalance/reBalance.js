import React from 'react'
import './reBalance.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FigmaEmbed from 'react-figma-embed';
import YouTube from 'react-youtube';

// images
import rebalancepng from '../../../resources/reBalance/rb-project-img.png'
import reBalanceMoodboard from '../../../resources/reBalance/rb-hero-img.png'
import rbType1 from '../../../resources/reBalance/rb-type-1.png'
import rbType2 from '../../../resources/reBalance/rb-type-2.png'
import rbFeature1 from '../../../resources/reBalance/rb-feature-1.png'
import rbFeature2 from '../../../resources/reBalance/rb-feature-2.png'
import rbFeature3 from '../../../resources/reBalance/rb-feature-3.png'
import rbPaper from '../../../resources/reBalance/rb-paper-prototype.png'
import beforeAfter from '../../../resources/reBalance/beforeAfter.png'
import implementation from '../../../resources/reBalance/rb-code.png'
import rbClosing from '../../../resources/reBalance/rb-closing.png'

// context
import context1 from '../../../resources/reBalance/rb-context1.png'
import context2 from '../../../resources/reBalance/rb-context2.png'
import context3 from '../../../resources/reBalance/rb-context3.png'
import context4 from '../../../resources/reBalance/rb-context4.png'


// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function reBalance() {
  const category = "SYSTEM DESIGN // WEB DEVELOPMENT"
  const projectTitle = "reBalance"
  const projectDesc = "How might we help people keep a balanced mental, physical, and social health?"
  const role = "UI/UX Designer, UX Researcher, UX Copywriting, Web Designer, Front End Developer"
  const sector = "Data Visualization, Health Tracking &Management"
  const colors = ["#6CAFE5", "#000"]

  const toReBalance = (e) => {
    e.preventDefault();
    window.location.href = 'https://dataviz-team1.web.app/';
    }

    const opts = {
        height: '720',
        width: '100%',
    };

  return (
    <div data-scroll-container>
        <div data-scroll-section className="reBalance-doc">
            <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={rebalancepng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
            <div className="project-content">
                {/* Overview */}
                <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">Overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">Maintain your health in every aspect of your life.</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                    <p>According to WHO, health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity. Maintaining a good, balanced health is important but difficult. People often do not have a clear sense of what is healthy, and where to improve from. In order to help people who are failing to maintain a balanced life, we present reBalance, a health data visualization system that allows exploration of one’s own data with multiple visualization. In addition, the edit mode in reBalance assists users in defining their own definition of being healthy through choosing one’s own metrics.</p>
                    <Divider height={32} />
                    <h6>🏆 This work was published in HCI Korea 2022</h6>
                    </Col>
                </Row>
                </Container>

                <Divider height={72} />

                <Container>
                <Row>
                    <Col sm={12} md={7} lg={7}>
                    <div className="d-flex justify-content-center context-container mb-2">
                        <img className="context-img" src={context1}></img>
                        <p className="context-desc">Maintaining a balanched (physical, mental, social) health can be hard.</p>
                    </div>
                    </Col>
                    <Col sm={12} md={5} lg={5}>
                    <div className="d-flex justify-content-center context-container mb-2">
                        <img className="context-img" src={context2}></img>
                        <p className="context-desc">People do not have a clear sense of what it means to be healthy and how to improve.</p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="d-flex justify-content-center context-container mb-2">
                            <img className="context-img" src={context3}></img>
                            <p className="context-desc">People need ways to objectively measure and understand their current status so they can plan ways to improve.</p>
                        </div>
                        </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="d-flex justify-content-center context-container mb-2">
                            <img className="context-img" src={context4}></img>
                            <p className="context-desc"><b>How might we help users understand their current health and plan ways to improve?</b></p>
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
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">Contribution</p>
                        <p className="Section-title">My Role</p>
                        <p>I was mainly responsible for the visual prototyping along with the front-end development of the project. My contribution helped with testing with the users and reflecting the feedback on the next prototypes quickly.</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Divider height={120} />

                <Container>
                  <div className="img-giant">
                      <img className="opening-image" src={ reBalanceMoodboard }></img>
                  </div>
                </Container>

                <Divider height={120} />

                {/* Feature */}
                <div className="wireframe-container py-5">
                <Divider height={72} />
                <Container className="Single-Column-Container mb-3">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">Features</p>
                        <p className="Section-title">reBalance</p>
                        <p>reBalance consists of two modes, namely the exploration mode for exploring the data with multiple visualizations, and the edit mode for setting individual metrics and goals.</p>
                    </div>
                    </div>
                </div>
                </Container>
                <Container className="Two-Column-Container">
                    <Divider height={24} />
                    <Row>
                        <Col lg={6}>
                            <div>
                              <img style={{width: "100%"}} className="mb-2" src={rbType1} />
                              <p className="idea-tagline"><b>The Exploration Mode</b>, which is the default, allows users to read and interact with the graphs to extract insights.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                          <div>
                            <img style={{width: "100%"}} className="mb-2" src={rbType2} />
                            <p className="idea-tagline mb-2"><b>The edit mode</b> allows the users to set their own metric and goals.</p>
                          </div>
                        </Col>
                    </Row>
                </Container>

                <Divider height={120} />

                <Container>
                    <Row>
                    <Col>
                        <div></div>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                          <p className="Section-title">Know your overall health status and set goals.</p>
                          <p>Know your current health status and see how far you are from your goals.</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={rbFeature1}></img>
                </Container>

                <Divider height={120} />

                <Container>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">See how you’ve performed this week.</p>
                        <p>You can check your overall trend this week and assess how you can improve.</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={rbFeature2}></img>
                </Container>

                <Divider height={120} />
                
                <Container>
                    <Row>
                    <Col md={5} lg={6}>
                        <div>
                            <p className="Section-title">Take concrete steps to achieving your ideal health.</p>
                            <p>See which aspects are affecting your health negatively.</p>
                        </div>
                    </Col>
                    <Col md={7} lg={6}>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={rbFeature3}></img>
                </Container>
                </div>

                <Divider height={72} />

                {/* Process */}
                <Container>
                  <Row>
                      <Col>
                          <div>
                            <div className="Section-line-rb"></div>
                            <p className="Section-type">PROCESS</p>
                            <p className="Section-title">Getting to know our users</p>
                          </div>
                      </Col>
                      <Col>
                      </Col>
                      </Row>
                      <Row>
                      <Col md={7} lg={6}>
                          <div>
                            <p>We conducted needfinding interviews with those who aim to live a more balanced, healthy life but are seeing themselves failing at the moment. During the interview, we asked the interviewees to define “being healthy and asked them to draw a health triangle by reflecting on their lives. We also asked questions related to their current efforts in maintaining their health or becoming healthier, and the information they would prefer to receive to become healthier.</p>
                          </div>
                      </Col>
                      <Col md={5} lg={6}>
                          <p className="mb-3"><b>We gathered these key insights:</b></p>
                          <p>📈 Objectively understand their health status.</p>
                          <p>✍ Come up with their own definition or metric of a healthy life.</p>
                          <p>🥗 Live a more healthy life by identifying directions to improve their lifestyle.</p>
                      </Col>
                  </Row>
                </Container>

                <Divider height={120} />

                {/* Design Goals */}
                <Container className="Two-Column-Container">
                <Row>
                    <Col>
                        <div>
                        <div className="Section-line-rb"></div>
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
                        <p>Based on the observations, we came up with two design goals to support key features of our system:</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>🆕 Give users starting points for improvement</p>
                        <p>🧐 Explore one’s own definition of health</p>
                    </Col>
                </Row>
                </Container>

                <Divider height={120} />

                {/* Paper prototype */}
                <Container>
                  <Row>
                      <Col>
                          <div>
                            <div className="Section-line-rb"></div>
                            <p className="Section-type">PROTOTYPING</p>
                            <p className="Section-title">Paper Prototyping</p>
                            <div>
                              <p>At this stage, we filtered visualizations that were not viable to implement and ones that wouldn’t suit the task. To organize the tasks into one system, we divided them into their own pages, but at this stage, we were still writing out what kinds of operations would be possible, layout, and the disadvantages and advantages of each page to consider later when designing the final prototype.</p>
                            </div>
                          </div>
                      </Col>
                      <Col md={5} lg={6}>
                          <div>
                            <img style={{ width: "100%" }} src={rbPaper} />
                          </div>
                      </Col>
                  </Row>
                </Container>

                <Container className="Single-Column-Container mb-3">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">Iteration</p>
                        <p className="Section-title">Feedback from Peers</p>
                        <p>The main feedback we received from our peers and professor was on the third task, mainly on the existence of too many axes of information. Since our main goal for this page was to help users differentiate which metric to improve or change, we simplified the design from a range of colors to green (good) and red (bad), as well as dividing it by area.</p>
                        <Divider height={24} />
                        <img style={{ width: "100%" }} src={ beforeAfter } />
                    </div>
                    </div>
                </div>
                </Container>

                <Divider height={120} />

                <div className="wireframe-container py-5">
                <Divider height={72} />
                  {/* Wireframes */}
                  <Container>
                      <Row>
                          <Col md={4} lg={4}>
                          <div>
                          <div>
                          <div className="Section-line-rb"></div>
                          <p className="Section-type">Prototyping</p>
                          <p className="Section-title">Low-fi prototyping</p>
                          <p>We moved our designs to Figma in order to implement interactions such as clicking, hovering, and zooming in.</p>
                          </div>
                      </div>
                          </Col>
                          <Col md={8} lg={8}>
                          <div className="img-giant">
                              <FigmaEmbed url="https://www.figma.com/proto/8ZgKAPh6JBJKGhvZUYMDpF/HCI_final_project?kind=&node-id=87%3A1180&page-id=0%3A1&scaling=contain&starting-point-node-id=87%3A1180" />
                          </div>
                          </Col>
                      </Row>
                  </Container>

                  <Divider height={120} />
                  
                  {/* hi-fi prototyping */}
                  <Container className="Single-Column-Container">
                    <div>
                        <div>
                        <div>
                            <div className="Section-line-rb"></div>
                            <p className="Section-type">HI-FI PROTOTYPING</p>
                            <p className="Section-title">Web Implementation</p>
                            <p>We picked the metrics in the K-emophone dataset (provided by KAIST Interaction Lab) that represent each aspect well and pre-processed them with pandas and Python. To implement the system, we used React, plotly-react, and semantic ui for styling.</p>
                        </div>
                        </div>
                    </div>
                    </Container>

                    <Divider height={24} />

                    <Container>
                    <div className="img-giant">
                        <img className="opening-image" src={implementation}></img>
                    </div>
                  </Container>

                  <Divider height={120} />

                    {/* Open website */}
                    <Container className="Single-Column-Container">
                        <Row>
                            <Col>
                                <div>
                                    <div className="Section-line-rb"></div>
                                    <p className="Section-type">HI-FI PROTOTYPE</p>
                                    <h3 className="Section-website-title">Check out the Final Website</h3>
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <Button onClick={toReBalance} style={{backgroundColor: "#6CAFE5"}} className="website-button">-></Button>
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
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">RESULT</p>
                        <p className="Section-title">Watch reBalance in Action</p>
                        <p className="mb-4">To summarize reBalance's features and purpose, we created a short video.</p>
                    </div>
                    </div>
                </div>
                </Container>
                <Container>
                    <YouTube videoId="M5VylsNIHfc" opts={opts} />
                </Container>

                <Divider height={120} />

                {/* Direction */}
                <Container className="Two-Column-Container">
                <Row>
                    <Col>
                        <div>
                        <div className="Section-line-rb"></div>
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
                        <p>reBalance was a step forward in understanding one's health status in three aspects of health, which is sometimes not the case. With reBalance</p>
                        Future improvements of the product could include watch/phone compatibility, an improved recommendation system, and an increase in metrics amount.
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p className="mb-3"><b>We believe the project could bring impact to health management Through three things:</b></p>
                        <p>🔎 Give users the autonomy to create and explore their definition of health</p>
                        <p>💥 Bring attention to all three aspects of one's health and how they affect each other</p>
                        <p> ⚖️ Help give concrete directions to improve the balance of their health.</p>
                    </Col>
                </Row>
                </Container>

                <Divider height={120} />

                {/* Process */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">AFTERNOTE</p>
                        <p className="Section-title">Reflection & Thank You</p>
                        <p>The biggest challenge in this project was seeing how the data would be displayed by our designs. Despite the cleaning and pre-processing, data is inherently chaotic and due to that, we had to iterate through the data visualization designs many times. Thank you to Professor Euicheon Lee for the mentorship and thank you to my teammates for the learning experience.</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Divider height={120} />

                <Container>
                <div className="img-giant">
                    <img className="opening-image" src={rbClosing}></img>
                </div>
                </Container>

                <Divider height={72} />

            </div>

            {/* Footer */}
            <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
        </div>
    </div>
  )
}
