import React from 'react'
import './FeaturedCard.css'

import { Container, Row, Col } from 'react-bootstrap'
import { Tooltip } from 'bootstrap';
import styled, { css } from 'styled-components'

export default function FeaturedCard(props) {
    const category = props.category;
    const title = props.title;
    const description = props.desc;
    const img = props.img
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    const ProjectCard = styled.div`
    color: ${textColor};
    background-color: ${bgColor};
    overflow: hidden;
    border-radius: 4px;
    `

    return (
        <Container className="p-0 ">
            <ProjectCard>
                <Row className="card-div" style={{backgroundColor: {bgColor}}}>
                    <Col className="card-text-content" md={4} lg={5}>
                        <div className="d-flex flex-column justify-content-between desc-text" style={{height: "100%"}}>
                            <div className="d-flex category-text">
                                <p>{category}</p>
                            </div>
                            <div className="mt-auto mb-0">
                                <h2 className="mb-1">{title}</h2>
                                <p className="m-0">{description}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} lg={7} className="p-0">
                        <div className="project-img-container d-flex flex-column align-items-baseline">
                            <img className="project-img" src={img} />
                        </div>
                    </Col>
                </Row>
            </ProjectCard>
        </Container>
    )
}