import React from 'react'
import './NftPoster.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactPictureGrid } from 'react-picture-grid';

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// images
import nftpng from '../../../resources/nftPoster/nft.png'
import nftHero from '../../../resources/nftPoster/nftHero.png'
import context1 from '../../../resources/nftPoster/context1.png'
import context2 from '../../../resources/nftPoster/context2.png'
import context3 from '../../../resources/nftPoster/context3.png'
import context4 from '../../../resources/nftPoster/context4.png'
import context5 from '../../../resources/nftPoster/context5.png'
import context6 from '../../../resources/nftPoster/context6.png'
import context7 from '../../../resources/nftPoster/context7.png'
import context8 from '../../../resources/nftPoster/context8.png'
import nftFinal from '../../../resources/nftPoster/nft_final.png'


// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function NftPoster() {
    const category = "INFOGRAPHIC"
    const projectTitle = "NFT Crypto Art is Changing How Artists Earn, but At What Cost?"
    const projectDesc = "Understanding the Pros and Cons of NFT"
    const role = "Visual Designer, Graphic Designer"
    const sector = "Information Design"
    const colors = ["#F8FB75", "#000"]

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
            image: context7,
          title: 'Nature 04',
          description: 'This picture is taken from unsplash.com',
        }
        ,
        {
            image: context8,
          title: 'Nature 04',
          description: 'This picture is taken from unsplash.com',
        }
      ];
  return (
    <div className="nftPoster-doc" data-scroll-section>
        <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={nftHero} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
    
        <div className="project-content">
            {/* Overview */}
            <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-nft"></div>
                        <p className="Section-type">overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">Understanding the Pros and Cons of NFT</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>This was an infographic I made to better understand the pros and conts of the merging NFT technology, especially for artists and how it could revolutionize how they earn.</p>
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
            <img className="opening-image" src={nftFinal}></img>
          </div>
        </Container>

        <Divider height={72} />

        {/* Footer */}
        <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
    </div>
  )
}
