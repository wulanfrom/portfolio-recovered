import React, {useRef, useEffect  } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { gsap } from 'gsap'
import './BigTitle.css'

export default function BigTitle({lineContent1, lineContent2}) {
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);

    const timeline = gsap.timeline();

    useEffect(() => {
        // gsap.from([line1, line2], 0.8, {
        //     delay: 0.8,
        //     ease: "power3.out",
        //     y: 200,
        //     stagger: {
        //         amount: .15,
        //     }
        // })
        timeline
            .from(line1, {y: '100%',  ease: "power3.out", stagger: { amount: .15 }})
            .from(line2, {y: '220%', ease: "power3.out", duration: 1, rotation: 20, stagger: { amount: .15 }}, '<.5')
            .fromTo(line3, {opacity: 0 }, { opacity: 1 }, 1.5)
    }, [line1, line2, line3])

  return (
    <Container>
        <Row>
            <Col sm={10} md={10} lg={10}>
            <div className="page-title">
                <div className="line-wrap ">
                    <div ref={el => line1 = el} className="line hero-project-category mt-5">{lineContent1}</div>
                </div>
                <div className="line-wrap">
                    <div ref={el => line2 = el} style={{fontSize: "150px", lineHeight: "180px"}} className="line bebas-text hero-project-title m-0">{lineContent2}</div>
                </div>
                <div className="line-wrap hero-project-desc mb-5">
                    <p ref={el => line3 = el}>Working at the intersection of design and code, creating experiences that help people.</p>
                </div>
            </div>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}
