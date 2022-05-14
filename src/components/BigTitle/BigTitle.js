import React, {useRef, useEffect  } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import './BigTitle.css'

export default function BigTitle({lineContent1, lineContent2}) {
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);

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
    }, [line1, line2, line3])

  return (
    <Container>
        <Row>
            <Col sm={10} md={10} lg={101}>
            <div className="page-title">
                <div className="line-wrap ">
                    <div ref={el => line1 = el} className="line hero-project-category mt-5">{lineContent1}</div>
                </div>
                <div className="line-wrap">
                    <div id="main-hero-text" ref={el => line2 = el} style={{fontSize: "200px", lineHeight: "220px"}} className="line bebas-text hero-project-title m-0">{lineContent2}</div>
                </div>
                <div className="line-wrap hero-project-desc mb-5">
                    <p ref={el => line3 = el}  style={{fontSize: "32px", lineHeight: "54px"}}>Working at the intersection of design and code, creating experiences that help people.</p>
                </div>
            </div>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}
