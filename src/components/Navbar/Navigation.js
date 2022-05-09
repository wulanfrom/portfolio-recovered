import React from 'react'
import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

export default function Navigation(props) {
  let location = useLocation();
  let pathname = location.pathname.substr(1);

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

  console.log(pathname)

  const chosenColor = colors[pathname];
  const border_bottom = '1px solid ' + chosenColor[1];

  return (
    <div>
        <Navbar className="wulanfrom-navbar" style={{ backgroundColor: chosenColor[0] }} expand="lg">
            <Container className="pb-1" style={{ borderBottom: border_bottom }}>
                <Navbar.Brand style={{ color: chosenColor[1] }} href="/">wulanfrom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link style={{ color: chosenColor[1] }} className="nav-link" to="/">Work</Link>
                  <Link style={{ color: chosenColor[1] }} className="nav-link" to="/about">About</Link>
                  <Link style={{ color: chosenColor[1] }} className="nav-link" to="/contact">Contact</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
