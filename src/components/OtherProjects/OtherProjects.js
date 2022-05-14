import React, { useEffect, useState, useRef } from 'react'
import './OtherProjects.css'

import { Row, Col, Container } from 'react-bootstrap'
import OtherCard from '../OtherCard/OtherCard'

// Animations
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'

// other projects
import Nft from '../../resources/nftPoster/nft.png'
import ColorArt from '../../resources/colorArt/color.png'
import AsianCHI from '../../resources/asianCHI/asianchi.png'
import GoodFood from '../../resources/goodFood/goodFood.png'
import Kixlab from '../../resources/xDesign/xdesign.png'

export default function OtherProjects() {
    const category = {
        nft: "infographic",
        goodFood: "illustration",
        colorArt: "data visualization",
        asianCHI: "Web development",
        xDesign: "HCI Research"
    }
    const color = { // background color, font color
        goodFood: ["#BFDCC4", "#000000"],
        nft: ["#FCFF76", "#000000"],
        colorArt: ["#6A777E", "#ffffff"],
        asianCHI: ["#00357C", "#ffffff"],
        xDesign: ["#E8E8E8", "#000000"]
    }
    const img = {
        goodFood: GoodFood,
        nft: Nft,
        colorArt: ColorArt,
        asianCHI: AsianCHI,
        xDesign: Kixlab,
    }
    const projectLink = {
        goodFood:"goodFood",
        nft: "nftPoster",
        colorArt: "colorArt",
        asianCHI: "asianCHI",
        xDesign: "kixlab",
    }

    const titleRef = useRef();
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(titleRef);

        useEffect(() => {
            if (onScreen) setReveal(onScreen)
        }, [onScreen])
        
        useEffect(() => {
            if (reveal) {
                const split = new SplitText(".sub-title", {
                    type: "lines",
                    linesClass: "lineChildren",
                });
                const splitParent = new SplitText(".sub-title", {
                    type: "lines",
                    linesClass: "lineParent",
                });
        
                gsap.fromTo(split.lines, {y:200}, {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    ease: 'power2'
                })
            }
        }, [reveal])

  return (
    <div>
        <div className="sub-title my-5">
            <h1 ref={titleRef} style={{fontSize: "90px"}} className={cn("bebas-text", {"is-reveal": reveal})}>Other Projects</h1>
            {/* <p className="section-sub">projects i’ve done on the side.</p> */}
        </div>
        
        <Container className="p-0">
            <Row>
                {/* <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"XDesign"} link={projectLink.xDesign} img={img.xDesign} category={category.xDesign} bgColor={color.xDesign[0]} textColor={color.xDesign[1]} />
                    </div>
                </Col> */}
                <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"Color My Influence"} link={projectLink.colorArt} img={img.colorArt} category={category.colorArt} bgColor={color.colorArt[0]} textColor={color.colorArt[1]} />
                    </div>
                </Col>
                <Col className="mb-2"sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"NFT Crypto Art is Changing How Artists Earn, but at What Cost?"} link={projectLink.nft} img={img.nft} category={category.nft} bgColor={color.nft[0]} textColor={color.nft[1]} />
                    </div>
                </Col>
                <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"Good Food that Feels Like Home"} link={projectLink.goodFood} img={img.goodFood} category={category.goodFood} bgColor={color.goodFood[0]} textColor={color.goodFood[1]} />
                    </div>
                </Col>
                {/* <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"AsianCHI Symposium Official Website"} link={projectLink.asianCHI} img={img.asianCHI} category={category.asianCHI} bgColor={color.asianCHI[0]} textColor={color.asianCHI[1]} />
                    </div>
                </Col> */}
            </Row>
        </Container>
    </div>
  )
}
