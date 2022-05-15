import React from 'react'
import './FeaturedCard.scss'
import { Link } from 'react-router-dom'

import { Container, Row, Col, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'

export default function FeaturedCard(props) {
    const category = props.category;
    const title = props.title;
    const description = props.desc;
    const img = props.img
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    const projectLink = props.link;
    const ProjectCard = styled.div`
    color: ${textColor};
    background-color: ${bgColor};
    overflow: hidden;
    border-radius: 8px;
    min-height: 470px;
    `

    return (
    <Tilt className="Tilt" options={{ max : 8, scale: 1.01, perspective: 2000, speed: 800, axis: "Y", easing: "cubic-bezier(.1,.98,.52,.99)", }}>
        <Container className="p-0 feature-card-container">
            <Link className="link-container" to={ projectLink }>
                {/* <Tilt className="Tilt" options={{ scale: 1.00, perspective: 2000, max : 6, speed: 500 }} style={{ width: "100%" }} > */}
                    <ProjectCard>
                        <Row className="card-div" style={{backgroundColor: {bgColor}}}>
                            <Col className="card-text-content" md={4} lg={5}>
                                <div className="d-flex flex-column justify-content-between desc-text" style={{height: "100%"}}>
                                <div style={{ borderBolor: textColor }} className="underline-category mb-3"></div>
                                    <div className="d-flex category-text">
                                        <p className="Tilt-inner mb-1">{category}</p>
                                    </div>
                                    <div className="mt-auto mb-0">
                                        <h2 className="Tilt-inner mb-1 project-featured-title">{title}</h2>
                                        <p className="Tilt-inner m-0">{description}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} lg={7} className="p-0">
                                <div className="project-img-container d-flex flex-column align-items-baseline">
                                    <img className="Tilt-inner project-img" src={img} />
                                </div>
                            </Col>
                        </Row>
                    </ProjectCard>
                {/* </Tilt> */}
            </Link>
        </Container>
    </Tilt>
    )
}