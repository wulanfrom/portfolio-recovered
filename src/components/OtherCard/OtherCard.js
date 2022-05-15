import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'
import './OtherCard.scss'

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
    <Tilt className="Tilt" options={{ max : 8, scale: 1.01, perspective: 2000, speed: 800, axis: "Y", easing: "cubic-bezier(.1,.98,.52,.99)", }}>
        <div className="other-card-container m-0" data-scroll>
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
    </Tilt>
  )
}
