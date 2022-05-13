import React from 'react'
import './WheelOn.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FigmaEmbed from 'react-figma-embed';
import { Link } from "react-router-dom";

// images
import wheelonpng from '../../../resources/wheelOn/wheelOn.png'
import wheelOnMoodboard from '../../../resources/wheelOn/wo-hero-img.png'
import woFeature1 from '../../../resources/wheelOn/WO-feature-1.png'
import woFeature2 from '../../../resources/wheelOn/WO-feature-2.png'
import woFeature3 from '../../../resources/wheelOn/WO-feature-3.png'
import woFeature4 from '../../../resources/wheelOn/WO-feature-4.png'
import woIdea1 from '../../../resources/wheelOn/wo-idea-1.png'
import woIdea2 from '../../../resources/wheelOn/wo-idea-2.png'
import woIdea3 from '../../../resources/wheelOn/wo-idea-3.png'
import woPersona from '../../../resources/wheelOn/WO-persona.png'
import woPage from '../../../resources/wheelOn/wo-pages.png'
import woArch from '../../../resources/wheelOn/wo-arch.png'
import woDesign from '../../../resources/wheelOn/wo-design-system.png'
import woImplement from '../../../resources/wheelOn/wo-implement.png'

// context
import context1 from '../../../resources/wheelOn/wo-context1.png'
import context2 from '../../../resources/wheelOn/wo-context2.png'
import context3 from '../../../resources/wheelOn/wo-context3.png'
import context4 from '../../../resources/wheelOn/wo-context4.png'


// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function WheelOn() {
    const category = "SYSTEM DESIGN // WEB DEVELOPMENT"
    const projectTitle = "WheelOn"
    const projectDesc = "Assisting users with moving disabilities through online means."
    const role = "Project Manager, UI/UX Designer, UX Researcher, Web Designer, Front-End Developer"
    const sector = "Mobility Disability, Travel Assistant, Social Network"
    const colors = ["#FAB82D", "#000"]

    const toWheelOn = (e) => {
        e.preventDefault();
        window.location.href = 'https://nokchalatte.github.io/CS374_WheelOnInThisTogether/static/new_homepage.html';
    }

  return (
    <div data-scroll-section>
        <div className="wheelOn-doc">
            <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={wheelonpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>

            <div className="project-content">
                {/* Overview */}
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <div className="Section-line-wo"></div>
                                <p className="Section-type">Overview</p>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7} lg={6}>
                        <div>
                            <p className="Section-title">Go Anywhere with your Wheelchair</p>
                        </div>
                        </Col>
                        <Col md={5} lg={6}>
                            <p>When people think of helping people with mobility disabilities, it’s usually through physical means, such as escorting them or helping them through existing facilities. However, due to the COVID pandemic, it’s becoming quite hard for people to meet face-to-face, as well as come in contact with each other. <b>How can we assist wheelchair users in their travels through online means?</b> Because of this, our team set out to create an online solution to provide assistance for people with mobility disabilities. The aim of our project is to aid wheelchairs users to be able to move and travel more independently and stress free.</p>
                        </Col>
                    </Row>
                </Container>

                <Divider height={72} />

                <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                    <div className="d-flex justify-content-center context-container mb-2">
                        <img className="context-img" src={context1}></img>
                        <p className="context-desc">When thinking about helping wheelchair users, people think of helping through physical means</p>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                    <div className="d-flex justify-content-center context-container mb-2">
                        <img className="context-img" src={context2}></img>
                        <p className="context-desc">Due to COVID, it’s becoming hard for people to meet face-toface- or come into contact,</p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="d-flex justify-content-center context-container mb-2">
                            <img className="context-img" src={context3}></img>
                            <p className="context-desc"><b>How can we assist wheelchair users in their travels through online means?</b></p>
                        </div>
                        </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="d-flex justify-content-center context-container mb-2">
                            <img className="context-img" src={context4}></img>
                            <p className="context-desc">With this product, we hope wheelchair users may be able to travel more independently and stress free.</p>
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
                        <div className="Section-line-wo"></div>
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
                    <img className="opening-image" src={ wheelonpng }></img>
                </div>
                </Container>

                <Divider height={120} />

                {/* Process */}
                <div className="wireframe-container py-5">
                    <Divider height={72} /> 
                    <Container className="Single-Column-Container">
                        <div>
                            <div>
                            <div>
                                <div className="Section-line-wo"></div>
                                    <p className="Section-type">final product</p>
                                    <p className="Section-title">WheelOn: All-in-one platform to plan your accessible travels</p>
                                    <p className="mb-4">WheelOn is a website aimed at helping wheelchair users plan their travels through through the help of a forum, route feature, and place ratings shared by fellow wheelchair users. WheelOn strength lies in its community driven content.</p>
                                </div>
                            </div>
                        </div>
                    </Container>

                    {/* Feature */}
                    <div className="wireframe-container py-5">
                    <Container>
                        <Row>
                        <Col>
                            <div>
                            <div className="Section-line-wo"></div>
                            <p className="Section-type">Features</p>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} lg={6}>
                            <div>
                            <p className="Section-title">A hub of information to help people with mobility restrictions move around</p>
                            <p>In the homepage, we provide a soft transition to our routes, rate, and forum feature.</p>
                            </div>
                        </Col>
                        <Col md={5} lg={6}>
                        </Col>
                        </Row>
                    </Container>
                    <Divider height={48} />
                    <Container className="img-giant">
                        <img className="opening-image" src={woFeature1}></img>
                    </Container>

                    <Divider height={120} />

                    <Container>
                        <Row>
                        <Col md={7} lg={6}>
                            <div>
                            <p className="Section-title">Ask people for help and advice in the Forums Page.</p>
                            <p>Ask a community of people who are going through the same struggles.</p>
                            </div>
                        </Col>
                        <Col md={5} lg={6}>
                        </Col>
                        </Row>
                    </Container>
                    <Divider height={48} />
                    <Container className="img-giant">
                        <img className="opening-image" src={woFeature2}></img>
                    </Container>

                    <Divider height={120} />
                    
                    <Container>
                        <Row>
                        <Col md={5} lg={6}>
                            <div>
                                <p className="Section-title">Find accessible Routes to your destination.</p>
                                <p>Know which routes and landmarks can help you get to your destination through user-curated routes.</p>
                            </div>
                        </Col>
                        <Col md={7} lg={6}>
                        </Col>
                        </Row>
                    </Container>
                    <Divider height={48} />
                    <Container className="img-giant">
                        <img className="opening-image" src={woFeature3}></img>
                    </Container>

                    <Divider height={120} />

                    <Container>
                        <Row>
                        <Col md={5} lg={6}>
                            <div>
                                <p className="Section-title">Rate how accessible a place is and let others know.</p>
                                <p>Make accessible places more known so others can enjoy them too.</p>
                            </div>
                        </Col>
                        <Col md={7} lg={6}>
                        </Col>
                        </Row>
                    </Container>
                    <Divider height={48} />
                    <Container className="img-giant">
                        <img className="opening-image" src={woFeature4}></img>
                    </Container>

                    
                    </div>
                </div>

                <Divider height={72} />

                {/* Process */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Getting to know our target users</p>
                        <p className="Section-title">How do people with wheelchairs travel daily?</p>
                        <p>To identify problems faced by our target users, we conducted interviews with 7 users, ranging from the permanently immobile to those who had temporary injuries, through Zoom. We asked them questions about their daily life and recent traveling experiences in order to gauge what kinds of problems they face during their daily life. From this, we synthesized a persona that represents the struggles our target users face.</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={7}>
                            <div className="img-giant">
                                <img className="opening-image" src={woPersona}></img>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center" sm={12} md={6} lg={5}>
                            <div style={{backgroundColor: "#E5E5E5", borderRadius: "4px"}} className="px-4 py-4 mx-2">
                                <div>
                                    <p className="list-main-point">🗣️ Users mainly rely on advice from friends</p>
                                    <ul className="list-item-points">
                                        <li>“To know if a place is suitable, I need to ask the owner, a friend.”</li>
                                    </ul>
                                </div>
                            </div>

                            <Divider height={24} />

                            <div style={{backgroundColor: "#E5E5E5", borderRadius: "4px"}} className="px-4 py-4 mx-2">
                                <div>
                                    <p className="list-main-point">👭 It’s hard to be able to travel alone</p>
                                    <ul className="list-item-points">
                                        <li>“I always need to think about which friends to ask help from and contact them in advance.”</li>
                                    </ul>
                                </div>
                            </div>

                            <Divider height={24} />

                            <div style={{backgroundColor: "#E5E5E5", borderRadius: "4px"}} className="px-4 py-4 mx-2">
                                <div>
                                    <p className="list-main-point">🗓️ Planning the time is becoming much more important to ride basic transportations</p>
                                    <ul className="list-item-points">
                                        <li>“There’s no intuitive priority given to users for transportation and elevators during rush hour.”</li>
                                    </ul>
                                </div>
                            </div>

                            
                        </Col>
                    </Row>
                </Container>

                <Divider height={120} />

                {/* Direction */}
                <Container className="Two-Column-Container">
                <Row>
                    <Col>
                        <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Direction</p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">Core ‘How Might We’ Questions</p>
                        <p>Based on the observations, we identified three core ‘How Might We’ questions to guide us in designing the website:</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>🗺️ HMW encourage our users to still travel even while they adapt to a physically restrictive lifestyle?</p>
                        <p>❓ HMW make it easier for users to ask and receive help when they travel?</p>
                        <p>💨 HMW make the journey quicker for our users?</p>
                    </Col>
                </Row>
                </Container>

                <Divider height={120} />

                {/* Process */}
                <div className="wireframe-container py-5">
                <Container className="Single-Column-Container">
                    <div>
                        <div>
                        <div>
                            <div className="Section-line-wo"></div>
                            <p className="Section-type">IDEATION</p>
                            <p className="Section-title">Brainstorming Possible Solutions</p>
                            <p className="mb-4">Our team got together and ideated 10 ideas for each design goal. Through a process of selection, we chose the top 3 solutions:</p>
                        </div>
                        </div>
                    </div>
                </Container>

                <Container className="Two-Column-Container">
                    <Row>
                        <Col>
                            <div>
                                <p className="idea-tagline mb-2">📍 Show popular routes taken by people to a certain place, to serve as reference for users when they travel.</p>
                                <p>By showing the general route preferences of people who have or had similar circumstances to theirs, our users will be able to plan their travel more easily.</p>
                            </div>
                        </Col>
                        <Col>
                            <img style={{ width: "100%" }} src={woIdea1} />
                        </Col>
                    </Row>
                    <Divider height={72} />
                    <Row>
                        <Col>
                            <img style={{ width: "100%" }} src={woIdea2} />
                        </Col>
                        <Col>
                            <div style={{ height: "100%" }} className="d-flex flex-column align-content-center justify-content-center">
                                <p className="idea-tagline mb-2">💬 Let users share and receive advice or experiences for users to interact, much like a forum website.</p>
                                <p>A person who recently had to use mobility support needs to do a lot of adjusting. Before they can start going out and traveling again, they need to learn how to do so from other people.</p>
                            </div>
                        </Col>
                    </Row>
                    <Divider height={72} />
                    <Row>
                        <Col>
                        <img style={{ width: "70%" }} src={woIdea3} />
                        </Col>
                        <Col>
                            <div>
                                <p className="idea-tagline mb-2">📍 ⭐ Quantify user-friendliness of places through comments and ratings of various users depending on several factors.</p>
                                <p>Users refer to their friends or the Internet regarding the friendliness of certain places to disabled people. Additionally, they can also leave their own comments and ratings to help other users.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Divider height={120} />

                {/* Wireframes */}
                <Container>
                    <Row>
                        <Col md={4} lg={4}>
                        <div>
                        <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Low-fi prototyping</p>
                        <p className="Section-title">Wireframes and User Testing</p>
                        <p>We created a low-fi prototype to test the interaction and movement between pages. During usability testing, we asked the participant to do three task: search for a route from KAIST to Cafe Eat, Read forum posts under advice tag and comment, and rate Buff-eat and leave a comment afterword. We employed Wizard of Oz technique in order to encourage “thinking out loud”, prevents potential technical problems, and reduce psychological burden on the user</p>
                        </div>
                    </div>
                        </Col>
                        <Col md={8} lg={8}>
                        <div className="img-giant">
                            <FigmaEmbed style={{width: "100%"}} url="https://www.figma.com/proto/8ZgKAPh6JBJKGhvZUYMDpF/HCI_final_project?kind=&node-id=87%3A1180&page-id=0%3A1&scaling=contain&starting-point-node-id=87%3A1180" />
                        </div>
                        </Col>
                    </Row>
                </Container>
                </div>

                <Divider height={120} />

                {/* Iteration */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Iteration</p>
                        <p className="Section-title">Results from the Usability Testing</p>
                        <p>After our initial usability testing, some usability problems were highlighted by the users:</p>
                    </div>
                    <div className="px-4 mx-4">
                        <div>
                        <p className="list-main-point">🏠 [General] The landing didn't feel like a landing page. </p>
                        <ul className="list-item-points">
                            <li>A short preview for the homepage will be important.</li>
                        </ul>
                        </div>
                        <Divider height={24} />
                        <div>
                        <p className="list-main-point">🗺️ [Routes] Places with the same name may cause confusion. </p>
                        <ul className="list-item-points">
                            <li>Allow address input or use autocomplete to avoid confusion.</li>
                        </ul>
                        </div>
                        <Divider height={24} />
                        <div>
                        <p className="list-main-point">🗯️ [Comment] The posting of comments is not safe. </p>
                        <ul className="list-item-points">
                            <li>An edit and delete button is needeed.</li>
                        </ul>
                        </div>
                        <Divider height={24} />
                        <div>
                            <p className="list-main-point">👁️ [Rate] The Rate Your Experience tab is not readily visible alongside the other features.</p>
                            <ul className="list-item-points">
                                <li>Move the “Rate your Experience” to somewhere noticeable.</li>
                            </ul>
                        </div>
                    </div>
                    {/* <Divider height={24} /> */}
                    {/* <p>From the feedback, our team decided to discard the article feature and brainstorm new ideas on how to motivate users as well as making them more environmentally aware.</p> */}
                    </div>
                </div>
                </Container>

                <Divider height={120} />

                {/* Result */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">RESULT</p>
                        <p className="Section-title">Final Flow and Design System</p>
                        <p className="mb-4">The following is the architecture and page flow in WheelOn, along with the design system for its components, fonts, and color.</p>
                    </div>
                    </div>
                </div>
                </Container>
                
                <Container>
                    <Row className="d-flex justify-content-center mb-4">
                        <Col sm={12} md={6} lg={6}>
                            <div className="mb-2">
                                <img style={{width: "70%"}} src={woArch}></img>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className="mb-2">
                                <img style={{width: "100%"}} src={woPage}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container>
                <div className="img-giant">
                    <img className="opening-image" src={woDesign}></img>
                </div>
                </Container>

                <Divider height={120} />

                {/* hifi prototyping */}
                <div className="wireframe-container py-5">
                    <Divider height={72} />
                    <Container className="Single-Column-Container">
                    <div>
                        <div>
                        <div>
                            <div className="Section-line-wo"></div>
                            <p className="Section-type">HI-FI PROTOTYPING</p>
                            <p className="Section-title">Web Implementation</p>
                            <p>We built the database with Google Firebase and implemented the website using HTML/CSS/Javascript, with styling assistance from Bootstrap. Two iterations were made, first to test the interactions, and second to improve the visual design.</p>
                        </div>
                        </div>
                    </div>
                    </Container>
                    <Divider height={24} />

                    <Container>
                    <div className="img-giant">
                        <img className="opening-image" src={woImplement}></img>
                    </div>
                    </Container>

                    <Divider height={120} />

                    {/* Open website */}
                    <Container className="Single-Column-Container">
                        <Row>
                            <Col>
                                <div>
                                    <div className="Section-line-wo"></div>
                                    <p className="Section-type">HI-FI PROTOTYPE</p>
                                    <h3 className="Section-website-title">Check out the Final Website</h3>
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <Button onClick={toWheelOn} className="website-button">-></Button>
                            </Col>
                        </Row>
                    </Container>
                    <Divider height={72} />
                </div>

                <Divider height={120} />

                {/* Direction */}
                <Container className="Two-Column-Container">
                <Row>
                    <Col>
                        <div>
                        <div className="Section-line-wo"></div>
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
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Reflection</p>
                        <p className="Section-title">Lessons Learned & Thank Yous</p>
                        <p>This project was challenging due to having to implement our designs to web. The proecss of creating the interaction and web design was a great learning experience for me. This project was made possible thanks to the mentorship of Professor Juho Kim. I would like to give my deepest thanks to all involved, our users who gave us great insights, and to our friends and family for the constant support. Biggest thanks of all to my teammates for the constant support and hard work!</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Divider height={120} />

                <Container>
                <div className="img-giant">
                    <img className="opening-image" src={ wheelOnMoodboard }></img>
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
