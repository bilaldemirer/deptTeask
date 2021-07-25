
import { Button, Row, Col } from 'react-bootstrap';

import '../index.css'



function Banner({ children }: any) {



    return (

        <div className="m-3">
            <div className="banner">
                <Row>
                    <Col> {children} </Col>
                </Row>
                <Row className="m-5">
                    <Col md={{ span: 3, offset: 1 }}> <h2 className="bannerTitle">WO <br />RK</h2> </Col>
                </Row>
                <Row className="m-5">
                    <Col className="caseButton" xs={{ span: 12, offset: 0 }} md={{ span: 3, offset: 9 }} lg={{ span: 3, offset: 9 }}>
                        <Button variant="dark">VIEW CASE</Button>
                    </Col>
                </Row>
            </div>
            <Button className="caseButtonMobile" variant="dark">VIEW CASE</Button>

        </div>

    );
}

export default Banner;
