import React from 'react'
import './ColorArt.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactPictureGrid } from 'react-picture-grid';

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// images
import colorpng from '../../../resources/colorArt/color.png'
import colorHero from '../../../resources/colorArt/colorHero.png'
import context1 from '../../../resources/colorArt/context1.jpeg'
import context2 from '../../../resources/colorArt/context2.png'
import context3 from '../../../resources/colorArt/context3.png'
import context4 from '../../../resources/colorArt/context4.png'
import context5 from '../../../resources/colorArt/context5.png'
import context6 from '../../../resources/colorArt/context6.png'
import context7 from '../../../resources/colorArt/context7.png'
import colorFinal from '../../../resources/colorArt/colorFinal.png'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function ColorArt() {
    const category = "data visualization"
    const projectTitle = "Color My Influence"
    const projectDesc = "Visualizing the Colors used by the Century's Most Influential Painters"
    const role = "Visual Designer, Graphic Designer"
    const sector = "Art"
    const colors = ["#515355", "#fff"]

    const data = [
        {
          image: context1,
          title: 'Nature 01',
          description: 'This picture is taken from unsplash.com',
        },
        {
            image: context2,
            title: 'Nature 02',
            description: 'This picture is taken from unsplash.com',
        },
        {
            image: context3,
          title: 'Nature 03',
          description: 'This picture is taken from unsplash.com',
        },
        {
            image: context4,
          title: 'Nature 04',
          description: 'This picture is taken from unsplash.com',
        },
        {
            image: context5,
          title: 'Nature 04',
          description: 'This picture is taken from unsplash.com',
        },
        {
            image: context7,
          title: 'Nature 04',
          description: 'This picture is taken from unsplash.com',
        }
      ];

  return (
    <div className="colorArt-doc" data-scroll-section>
        <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={colorHero} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
    
        <div className="project-content">
            {/* Overview */}
            <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-art"></div>
                        <p className="Section-type">overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">What Colors do the Most Influensial Painters Use?</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>Have you ever wondered what kind fo situation prompts painters to explore and try different colors? I try to answer that questions through analyzing the colors used, amounts of paintings, and size of paintings done by 25 of the most influential painters. From the findings, we can see what color palettes each painter are comfortable with and how their painting ethic is. </p>
                    </Col>
                </Row>
            </Container>
       </div>

       <Divider height={72} />
       <Container>
            <ReactPictureGrid closeOnClick showPreview className="grid-images-nft"data={data} gap={20} />
        </Container>

        <Divider height={20} />

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={colorFinal}></img>
          </div>
        </Container>

        <Divider height={72} />

        {/* Footer */}
        <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
    </div>
  )
}
