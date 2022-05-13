import React from 'react'
import './XDesign.css'
import { Container, Row, Col } from 'react-bootstrap'

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// images
import xdesignpng from '../../../resources/xDesign/xdesign.png'
import xdesignclosing from '../../../resources/xDesign/xd-closing.png'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function XDesign() {
    const category = "HCI RESEARCH // WEB DEVELOPMENT"
    const projectTitle = "XDesign"
    const projectDesc = "Intergrating explainable AI into interface design education."
    const role = "HCI Researcher, Web Designer, Front End Developer"
    const sector = "Explainable AI Education, Interface Design"
    const colors = ["#E8E8E8", "#000"]
  return (
    <div className="xDesign-doc" data-scroll-section>
         <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={xdesignpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
    
         <div className="project-content">
            {/* Overview */}
            <Container>
            <Row>
            <Col>
                <div>
                    <div className="Section-line-xd"></div>
                    <p className="Section-type">research abstract</p>
                </div>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col md={7} lg={6}>
                <div>
                    <p className="Section-title">Integrating Interface Design into Explainable AI Education</p>
                </div>
                </Col>
                <Col md={5} lg={6}>
                <p>There has been a growing interest in explainable AI (XAI) to help users understand machine learning models by presenting comprehensive explanations as to why the model produced a prediction result. Various materials for learning have been designed to teach XAI, such as lecture videos, written materials, and interactive tutorials. Since explanations are often presented to users through user interfaces, it is important for learners to have a comprehensive understanding of how to design usable interfaces that present explanations to users. However, most of learning materials focus on algorithms for generating explanations or discussion of ethical perspectives of explanations, which do not directly inform how to design usable explanations.</p>
                <p>We introduce XDesign, an interactive platform that guides learners to go through a design process of creating usable explanations, where learners (1) implement the LIME explainer that presents explanations of image classification results, (2) generate and observe explanations for various input images, (3) discuss the usability of explanations based on their observations, and (4) design a user interface prototype that could overcome the limitations observed. We have iterated XDesign over two semesters in a human-AI interaction course offered to a total of 44 students, asking students to submit their implementations, discussions, and UI prototypes using XDesign in an assignment. Results show that students were able to identify concrete user needs through their exploration, highlight user tasks to support the needs, and design a user interface that aids the tasks.</p>
                </Col>
            </Row>
            </Container>
            <Divider height={120} />

            <div className="wireframe-container py-5">
                <Divider height={72} />
                <Container className="Single-Column-Container">
                    <div>
                        <div>
                        <div>
                            <div className="Section-line-xd"></div>
                            <p className="Section-type">MY ROLE</p>
                            <p className="Section-title">First time Diving into the Research World</p>
                            <p>This project was part of my internship at KAIST KIXLAB Interaction Lab as an HCI Researcher. Throughout the project, I was in charge of leading </p>
                        </div>
                        </div>
                    </div>
                </Container>

                <Container className="text-center">
                    <Divider height={72} />
                    <a className="mt-5 research-link" href="https://xdesign.kixlab.org/">Checkout the official research website</a>
                    <p className="mt-3 mb-5">This work was published at <a href="https://sigcse2022.sigcse.org/"><b>SIGCSE 2022</b></a>. <a href="https://dl.acm.org/doi/abs/10.1145/3478432.3499052" className="download-research-link">Download the paper</a></p>
                    <Divider height={72} />
                </Container>

                <Container>
                    <div className="img-giant">
                        <img className="opening-image" src={xdesignclosing}></img>
                    </div>
                </Container>

                <Divider height={120} />
            </div>

            <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
        </div>
    </div>
  )
}
