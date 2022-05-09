import React from 'react'
import './Publications.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Publications() {
  return (
    <Container>
        <Row className="d-flex my-5">
            <Col sm={4} lg={5} className="d-flex p-0">
                <h1 style={{fontSize: "90px"}} className="bebas-text">Publications</h1>
                {/* <h5 className="ml-1 text-black-50">2</h5> */}
            </Col>
            <Col className="p-0" sm={8} lg={7}>
                <div>
                    <p className="text-uppercase m-0 text-secondary">Paper</p>
                    <p className="m-0">Sangkyung Kwak*, Jeongeon Park*, <b>Nabila Sindi*</b>. reBalance: A Customizable Data Visualization Approach to Keeping a Balanced Health. In Proceedings of HCI Korea (HCIK '22). 2022.</p>
                </div>
                <div className="divider-solid my-4"></div>
                <div>
                    <p className="text-uppercase m-0 text-secondary">poster</p>
                    <p className="m-0">Hyungyu Shin*, <b>Nabila Sindi*</b>, Yoonjoo Lee, Jaeryoung Ka, Jean Y. Song, Juho Kim. XDesign: Integrating Interface Design into Explainable AI Education. Proceedings of the 52nd ACM Technical Symposium on Computer Science Education. 2022.</p>
                </div>
                <div style={{ fontSize: "12px" }} className="text-secondary mt-3">*All authors contributed equally to this work</div>
            </Col>
        </Row>
    </Container>
  )
}
