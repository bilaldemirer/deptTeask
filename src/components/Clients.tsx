import { Row, Container, Card, CardGroup } from "react-bootstrap";
import { logos } from "../assets/Images/Logos/index";

function Clients() {
    return (
        <div className="clients">
            <Container className="text-center">
                <h1 className="clientsTextBox text-center" style={{ fontSize: "30px" }}>
                    CLIENTS
                </h1>
                <p className="clientsTextBox" style={{ fontSize: "17px" }}>
                    We value a great working relationship with our clients above all else.
                    It’s why they often come to our parties. It’s also why we’re able to
                    challenge and inspire them to reach for the stars.
                </p>
            </Container>
            <Row xs={2} md={4} >
                {logos.map((logo) => (
                    <Container key={logo.id} className="text-center">
                        <CardGroup className="m-5">
                            <Card
                                className={logo.visible ? "" : "mobileLogo"}
                                style={{ backgroundColor: "#F3F6F6", border: "0px" }}
                            >
                                <div className="text-center">
                                    <Card.Img variant="top" src={logo.path} className="w-25" />
                                </div>
                            </Card>
                        </CardGroup>
                    </Container>
                ))}
            </Row>
        </div>
    );
}

export default Clients;
