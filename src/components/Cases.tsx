// @flow
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CaretRightFill } from "react-bootstrap-icons";
import { getCases } from "../redux/actions/cases";
import { CaseModel, SelectorType } from "../redux/reducers/types";

type SelectedType = {
    cases: CaseModel[];
};

function Cases() {
    const dispatch = useDispatch();

    const [gridView, setGridView] = useState(true);

    const { cases } = useSelector<SelectorType, SelectedType>((state) => ({
        cases: state.caseReducer.cases,
    }));

    useEffect(() => {
        getCases(dispatch);
    }, [dispatch]);

    return (
        <>
            <Container>
                <div className="ml-1 mb-3">
                    <Button onClick={() => setGridView(!gridView)} variant="primary">
                        Change View
                    </Button>
                </div>
                {gridView ? (

                    /*   GRID VIEW Start */

                    <Row xs={1} md={2} className="g-4">
                        {cases.map((cases, index) => (
                            <Col key={index}>
                                <Card>
                                    <Card.Img key={index} variant="top" src={cases.image} />
                                    <Card.Body>
                                        <Card.Text>{cases.name} </Card.Text>
                                        <Card.Title>{cases.title}</Card.Title>
                                        <CaretRightFill /> <a href="/">VIEW CASE</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    /*   GRID VIEW End */


                    /*   LIST VIEW Start */

                ) : (
                    <Row xs={1} md={1} className="g-4">
                        {cases.map((cases, index) => (
                            <Col>
                                <Card style={{ width: "64rem" }}>
                                    <Row>
                                        <Col>
                                            <Card.Img key={index} variant="top" src={cases.image} />
                                        </Col>
                                        <Col>
                                            <Card.Body>
                                                <Card.Text>{cases.name} </Card.Text>
                                                <Card.Title>{cases.title}</Card.Title>
                                                <CaretRightFill /> <a href="/">VIEW CASE</a>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    /*   LIST VIEW End */


                )}
            </Container>
        </>
    );
}

export default Cases;
