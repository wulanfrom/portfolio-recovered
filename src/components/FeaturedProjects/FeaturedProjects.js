import React from 'react'
import './FeaturedProjects.css'

import Divider from '../Divider/Divider'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

// featured projects
import CeeyaImage from '../../resources/featuredPictures/ceeya-featured.png'
import SomeWeatherImage from '../../resources/featuredPictures/someWeather-featured.png'
import ReBalanceImage from '../../resources/featuredPictures/reBalance-featured.png'
import WheelOn from '../../resources/featuredPictures/wheelOn-featured.png'
import XDesign from '../../resources/featuredPictures/kixlab-featured.png'
import AsianCHI from '../../resources/featuredPictures/asianCHI-featured.png'

// inner featured pictures
// import CeeyaDevice from '../../resources/featuredPictures/ceeya-device.png'
// import SomeWeatherDevice from '../../resources/featuredPictures/sw-device.png'
// import ReBalanceDevice from '../../resources/featuredPictures/rb-device.png'
// import WheelOnDevice from '../../resources/featuredPictures/wo-device.png'

// other projects
import Nft from '../../resources/nftPoster/nft.png'
import ColorArt from '../../resources/colorArt/color.png'
// import AsianCHI from '../../resources/asianCHI/asianchi.png'
import GoodFood from '../../resources/goodFood/goodFood.png'



export default function FeaturedProjects() {
  const descriptions = {
    ceeya: "Ceeya.io’s Search Website Design, from conceptualization to implementation.",
    someWeather: "Integrating environmental awareness to everyday weather apps.",
    reBalance: "Helping manage your emotional, physical, and social health.",
    wheelOn: "Assisting users with moving disabilities through online means.",
    asianCHI: "Asian CHI Symposium's 2021 Official Website",
    kixlab: "Intergrating explainable AI into interface design education."
  }
  const category = {
    ceeya: "Web Development // UX Design",
    someWeather: "UX design // App design",
    reBalance: "SYSTEM DESIGN // WEB DEVELOPMENT",
    wheelOn: "SYSTEM DESIGN // WEB DEVELOPMENT",
    nft: "infographic",
    goodFood: "illustration",
    asianCHI: "web design & development",
    kixlab: "hci research // system design & development"
  }
  const images = {
    ceeya: CeeyaImage,
    someWeather: SomeWeatherImage,
    reBalance: ReBalanceImage,
    wheelOn: WheelOn,
    nft: Nft,
    colorArt: ColorArt,
    asianCHI: AsianCHI,
    goodFood: GoodFood,
    kixlab: XDesign,
  }

  const colors = {
    ceeya: ["#272727", "#ffffff"],
    someWeather: ["#4CDCB1", "#000000"],
    reBalance: ["#6CAFE5", "#000000"],
    wheelOn: ["#FAB82D", "#000000"],
    asianCHI: ["#02377D", "#fff"],
    kixlab: ["#E8E8E8", "#000"],
  }

  const projectLinks = {
    ceeya: "ceeya",
    someWeather: "someWeather",
    reBalance: "reBalance",
    wheelOn: "wheelon",
    asianCHI: "asianCHI",
    kixlab: "xdesign"
  }

  return (
    <div>
        <div className="sub-title my-5">
            <h1 style={{fontSize: "120px"}} className="bebas-text">Featured Projects</h1>
            {/* <p className="section-sub">Here are some projects that I am proud of!</p> */}
        </div>

        {/* <div className="project"> */}
          <FeaturedCard category={category.ceeya} link={projectLinks.ceeya} title={"Ceeya Search"} desc={descriptions.ceeya} img={images.ceeya} bgColor={colors.ceeya[0]} textColor={colors.ceeya[1]}/>
        {/* </div>/ */}

        <Divider height={'32px'}/>

        {/* <div className="project"> */}
          <FeaturedCard category={category.reBalance} link={projectLinks.reBalance} title={"reBalance"} desc={descriptions.reBalance} img={images.reBalance} bgColor={colors.reBalance[0]} textColor={colors.reBalance[1]}/>
        {/* </div> */}

        <Divider height={'32px'}/>

        {/* <div className="project"> */}
        <FeaturedCard category={category.wheelOn} link={projectLinks.wheelOn} title={"WheelOn"} desc={descriptions.wheelOn} img={images.wheelOn} bgColor={colors.wheelOn[0]} textColor={colors.wheelOn[1]}/>
        {/* </div> */}

        <Divider height={'32px'}/>

        {/* <div className="project"> */}
        <FeaturedCard category={category.someWeather} link={projectLinks.someWeather} title={"Some(섬) Weather"} desc={descriptions.someWeather} img={images.someWeather} bgColor={colors.someWeather[0]} textColor={colors.someWeather[1]}/>
        {/* </div> */}

        <Divider height={'32px'}/>

        <FeaturedCard category={category.kixlab} link={projectLinks.kixlab} title={"XDesign"} desc={descriptions.kixlab} img={images.kixlab} bgColor={colors.kixlab[0]} textColor={colors.kixlab[1]}/>
        {/* </div> */}

        <Divider height={'32px'}/>

        <FeaturedCard category={category.asianCHI} link={projectLinks.asianCHI} title={"AsianCHI Symposium 2021 Official Website"} desc={descriptions.asianCHI} img={images.asianCHI} bgColor={colors.asianCHI[0]} textColor={colors.asianCHI[1]}/>
        {/* </div> */}

        <Divider height={'32px'}/>
    </div>
  )
}
