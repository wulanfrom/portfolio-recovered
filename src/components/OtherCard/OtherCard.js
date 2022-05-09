import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './OtherCard.css'
import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'

export default function OtherCard(props) {
    const category = props.category;
    const title = props.title;
    const img = props.img
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    const projectLink = props.link;
    const OtherCardContainer = styled.div`
    color: ${textColor};
    background-color: ${bgColor};
    overflow: hidden;
    border-radius: 4px;
    height: 350px;
    width: 100%;
    margin: 0;
    `

    return (
        <div className="other-card-container m-0">
            <Link className="link-container-other" to={ projectLink }>
                {/* <Tilt className="Tilt tilt-other" options={{ scale: 1.01, perspective: 1500, max : 10, speed: 500 }} style={{ height: 250, width: "100%" }} > */}
                    <OtherCardContainer>
                        <div className="desc-row-other">
                            <p className="m-0 category-text-other">{category}</p>
                            <p className="m-0 title-text-other">{title}</p>
                        </div>
                        <div className="img-other-container">
                            <div className="project-img-other-container p-0">
                                <img className="project-img-other" src={img} />
                            </div>
                        </div>
                    </OtherCardContainer>
                {/* </Tilt> */}
            </Link>
        </div>
  )
}
