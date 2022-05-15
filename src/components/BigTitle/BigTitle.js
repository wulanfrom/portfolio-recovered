import React, {useRef, useEffect  } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import './BigTitle.css'

export default function BigTitle({lineContent1, lineContent2}) {
    const timeline = gsap.timeline();

    useEffect(() => {
        const split = new SplitText("#main-hero-text", {
            type: 'lines',
            linesClass: 'lineChildren',
        });

        const splitParent = new SplitText("#main-hero-text", {
            type: 'lines',
            linesClass: 'lineParent',
        });

        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power2'
        })

        gsap.fromTo(".hero-project-desc", {opacity: 0, ease: 'power3'}, {opacity: 1, duration: 2});
        gsap.fromTo(".hero-project-category", {opacity: 0, stagger: 0.1, ease: 'power2.out'}, {opacity: 1, stagger: 0.1, duration: 2});
    }, [])

  return (
    <Container>
        <Row>
            <Col sm={10} md={10} lg={101}>
            <div className="page-title">
                <div className="line-wrap">
                    <div className="tilt-inner line hero-project-category mt-5">{lineContent1}</div>
                </div>
                <div className="line-wrap">
                    <div id="main-hero-text" style={{fontSize: "200px", lineHeight: "220px"}} className="tilt-inner line bebas-text hero-project-title m-0">{lineContent2}</div>
                </div>
                <div className="line-wrap hero-project-desc mb-5">
                    <p  style={{fontSize: "32px", lineHeight: "54px"}}>Working at the intersection of design and code, creating experiences that help people.</p>
                </div>
            </div>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}
