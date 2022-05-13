import React from 'react'
import './GoodFood.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactPictureGrid } from 'react-picture-grid';

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// images
import goodFoodpng from '../../../resources/goodFood/goodFood.png'
import goodFoodHero from '../../../resources/goodFood/goodFoodHero.png'
import context1 from '../../../resources/goodFood/context-1.png'
import context2 from '../../../resources/goodFood/context-2.png'
import context3 from '../../../resources/goodFood/context-3.png'
import context4 from '../../../resources/goodFood/context-4.png'
import context5 from '../../../resources/goodFood/context-5.png'
import context6 from '../../../resources/goodFood/context-6.png'
import finalImage from '../../../resources/goodFood/final_img_gf.png'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function GoodFood() {
    const category = "ILLUSTRATION // Digital Art"
    const projectTitle = "Good Food that Feels Like Home"
    const projectDesc = "Drawing Indonesian Food as homes"
    const role = "Illustrator"
    const sector = "Food, Houses"
    const colors = ["#B8D4BD", "#000"]

    const pattern = ["wide - 1x2"]
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
            image: context6,
          title: 'Nature 04',
          description: 'This picture is taken from unsplash.com',
        },
      ];
  return (
    <div className="nftPoster-doc" data-scroll-section>
        <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={goodFoodHero} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
        <div className="project-content">
            {/* Overview */}
            <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-gf"></div>
                        <p className="Section-type">overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">How does Food Remind you of Home?</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>This illustration shows a village where each house represents an Indonesian traditional food to represent how a home is usually associated with a dish, hence the name, “Good Food that Feels like Home”. The food chosen are traditional Indonesian food, since those are the food that makes me feel at home. Made in Procreate and finalized in Adobe Illustrator.</p>
                    </Col>
                </Row>
            </Container>
       </div>

       <Divider height={72} />
        <Container>
            <ReactPictureGrid closeOnClick showPreview className="grid-images-gf"data={data} gap={20} />
        </Container>

        <Divider height={20} />

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={finalImage}></img>
          </div>
        </Container>

        <Divider height={72} />
        {/* Footer */}
        <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
    </div>
  )
}
