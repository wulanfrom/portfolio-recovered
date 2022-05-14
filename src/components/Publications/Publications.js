import React, { useState, useRef, useEffect } from 'react'
import './Publications.scss'
import { Container, Row, Col } from 'react-bootstrap'
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'


export default function Publications() {
    const ref = useRef();
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) setReveal(onScreen)
    }, [onScreen])

    useEffect(() => {
        if (reveal){
            const split = new SplitText(".pubs-text", {
                type: 'lines',
            });

            gsap.to(split.lines, {
                duration: 1,
                y: -50,
                opacity: 1,
                stagger: 0.1,
                ease: 'power2'
            })
        }
    }, [reveal])

  return (
    <div>
        <Container ref={ref} className={cn("pubs-text d-flex my-5", {"is-reveal": reveal})}>
            <Row>
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
    </div>
  )
}
