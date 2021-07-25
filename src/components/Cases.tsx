// @flow
import { Row, Container, Col, Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CaretRightFill } from "react-bootstrap-icons";
import { thumbnails } from "../assets/Images/index";
import { getCases } from "../redux/actions/cases";
import { CaseModel, SelectorType } from "../redux/reducers/types";

type SelectedType = {
    cases: CaseModel[];
};

function Cases() {
    const dispatch = useDispatch();

    const { cases } = useSelector<SelectorType, SelectedType>((state) => ({
        cases: state.caseReducer.cases,
    }));

    useEffect(() => {
        getCases(dispatch);
    }, []);

    return (
        <>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {cases.map((cases, index) => (
                        <Col>
                            <Card>
                                <Card.Img key={index} variant="top" src={cases.image} />
                                <Card.Body>
                                    <Card.Text>{cases.name} </Card.Text>
                                    <Card.Title>{cases.title}</Card.Title>
                                    <CaretRightFill /> <a href="#">VIEW CASE</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Cases;
