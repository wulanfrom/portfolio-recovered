import React, { useEffect, useRef } from 'react'
import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import { Link, NavLink} from 'react-router-dom'
import { gsap } from 'gsap'
import './Navigation.css'

import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

export default function Navigation(props) {
  let location = useLocation();
  let pathname = location.pathname.substr(1);

  // let linksRef = useRef([]);
  // linksRef.current = [];
  // let navbar = useRef(null);
  // // let navline = useRef(null);

  // const timeline = gsap.timeline();
  
  // useEffect(() => {
  //   // linksRef.current.map((item, index) => {
  //   //   let tl = gsap.timeline();
  //   //   tl.from(item, {y: '-100%', duration: 1.5, ease: "power1.inOut", stagger: { amount: .15 }})
  //   // })
  //   let tl = gsap.timeline();
  //   tl.from(navbar, {y: '-100%', duration: 1, ease: "power1.inOut" })
  // }, [ navbar ])

  // const addToRefs = (item) => {
  //   if (item) {
  //     linksRef.current.push(item);
  //   }
  // };

  const colors = { // background color, text color
    "": ["transparent", "#fff"],
    "Portfolio-2022/": ["transparent", "#000"],
    "contact": ["transparent", "#fff"],
    "about": ["transparent", "#000"],
    "ceeya": ["#272727", "#fff"],
    "someWeather": ["#4CDCB1", "#000"],
    "reBalance": ["#6CAFE5", "#000000"],
    "wheelon": ["#FAB82D", "#000000"],
    "xdesign": ["#E8E8E8", "#000000"],
    "nftPoster": ["#F8FB75", "#000000"],
    "colorArt": ["#45494B", "#fff"],
    "goodFood": ["#B8D4BD", "#000000"],
    "asianCHI": ["#00357C", '#fff' ],
  }

  const chosenColor = colors[pathname];
  const border_bottom = '1px solid ' + chosenColor[1];

  return (
    <Navbar data-scroll-section className="wulanfrom-navbar" style={{ color: chosenColor[1], backgroundColor: chosenColor[0] }} expand="lg">
        <Container className="pb-1" style={{ borderBottom: border_bottom }}>
            <Navbar.Brand style={{ color: chosenColor[1] }} href="/">wulanfrom</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink activeStyle={{ textDecoration: "underline" }} style={{ color: chosenColor[1] }} className="nav-link each-link" to="/" exact>Work</NavLink>
              {/* <NavLink activeStyle={{ textDecoration: "underline" }} style={{ color: chosenColor[1] }} className="nav-link each-link" to="/about" exact>About</NavLink> */}
              <NavLink activeStyle={{ textDecoration: "underline" }} style={{ color: chosenColor[1] }} className="nav-link each-link" to="/contact" exact>Contact</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
