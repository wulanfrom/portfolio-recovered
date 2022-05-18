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
        <div>
            <div style={{backgroundColor: "#171717", color: "#fff", height: "110vh"}} className="hero-section hero-animated d-flex flex-column">
                <Divider height={120}/>
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

            <Divider height={60}/>

            <div id="other-projects">
                <OtherProjects />
            </div>
            
            <Divider height={250}/>

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
