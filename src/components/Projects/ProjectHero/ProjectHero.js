import React from 'react'
import './ProjectHero.css'
import { Container, Row, Col } from 'react-bootstrap'

import someWeatherpng from '../../../resources/someWeather/some-weather.png'
import Divider from '../../Divider/Divider';

export default function ProjectHero(props) {
    const title = props.title;
    const desc = props.desc;
    const role = props.role;
    const sector = props.sector;
    const category = props.category;
    const heroImg = props.heroImg;
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    
    const border_style = '2px solid ' + textColor;

  return (
    <div>
        <div style={{backgroundColor: bgColor, color: textColor}} className="hero-section d-flex flex-column">
        <div className="pt-5">
          <Container className="pt-5">
            <Divider height={72} />
            {/* <div className="mt-5"></div> */}
            <p className="hero-project-category m-0">{category}</p>
            <p style={{fontSize: "150px", lineHeight: "150px"}} className="bebas-text hero-project-title m-0">{title}</p>
            <p className="hero-project-desc mb-5">{desc}</p>
            <Row>
              <Col xs={12} sm={10} md={9} lg={8}>
                <div style={{ borderBottom: border_style, borderTop: border_style }} className="hero-project-info">
                  <div>
                      <p className="project-section m-0 mt-4">Role</p>
                      <p className="project-info">{role}</p>
                  </div>
                  <div>
                      <p className="project-section m-0">Sector</p>
                      <p className="project-info m-0 mb-4">{sector}</p>
                  </div>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <div className="mt-5 pt-5">
          <Row className="hero-project-img">
            <Col></Col>
            <Col xs={10} sm={10} md={10} lg={10}>
              <img className="hero-img" src={heroImg}></img>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
