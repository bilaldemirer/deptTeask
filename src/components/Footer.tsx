import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../assets/Images/logo-white.svg';
import '../index.css'

import { Facebook, Twitter, Instagram, ArrowUp } from 'react-bootstrap-icons'

function Footer() {

    const [show, setShow] = useState(false);


    const items = [


        {
            "id": 1,
            "title": "WORK",
            "href": "#work",
        },


        {
            "id": 2,
            "title": "SERVICES",
            "href": "#services",
        },
        {
            "id": 3,
            "title": "STORIES",
            "href": "#stories",
        },


        {
            "id": 4,
            "title": "ABOUT",
            "href": "#about",
        }, {
            "id": 5,
            "title": "CAREERS",
            "href": "#careers",
        },


        {
            "id": 6,
            "title": "CONTACT",
            "href": "#contact",
        },
    ]


    return (
        <>



            <Row className="justify-space-between" >
                <Col className="text-muted" style={{ backgroundColor: "#0E0E0E" }} xs={11}>

                    <div className="mt-5 mb-5">
                        <Row className="mb-5 g-5">
                            <Col className="backToTop"

                                lg={{ span: 2, offset: 2 }}
                            >
                                <img src={logo} alt="logo" />
                            </Col>
                            {items.map((item) => (

                                <Col key={item.id} xs={4} md="auto">
                                    <a className="text-decoration-none text-muted" href={item.href} key={item.id}>{item.title}</a>
                                </Col>
                            ))}
                            <Col lg={{ span: 1, offset: 1 }}
                                xs={1}
                            >
                                <Facebook className="m-1" />
                                <Twitter className="m-1" />
                                <Instagram className="m-1" />
                            </Col>
                        </Row>
                        <hr style={{ color: "#fff" }} />
                        <div className="mt-5 mb-5">
                            <Row>
                                <Col
                                    md={{ span: 2, offset: -1 }}
                                    lg={1} xs={1}></Col>
                                <Col className="text-center" xs={8}><p>Chamber of Commerce: 63464101   &nbsp; &nbsp;     VAT: NL 8552.47.502.B01 &nbsp; &nbsp; <a className="text-decoration-none text-muted" href="#">Terms and conditions </a></p>       </Col>
                                <Col xs={{ span: 6, offset: 1 }} lg={2} >
                                    &copy; {new Date().getFullYear()} Dept Agency
                                </Col>
                            </Row>
                        </div>
                    </div>

                </Col>
                <Col style={{ color: "#1A18F7" }} className="mt-5 backToTop" lg={1}>
                    <div className="mt-5" >
                        &nbsp; &nbsp; &nbsp;<ArrowUp /> <br />
                        <a className="text-decoration-none" href="#home">  &nbsp; &nbsp; TO <br />   &nbsp;&nbsp; &nbsp; P</a>
                    </div>
                </Col>
            </Row>


        </>
    );
}

export default Footer;
