import { useState } from 'react'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import logo from '../assets/Images/logo.svg';
import '../index.css'

function Header() {

  const [show, setShow] = useState(false);


  const items = [
    {
      "id": 1,
      "title": "HOME",
      "href": "#home",
      "hr": true
    },
    {
      "id": 2,
      "title": "OVER",
      "href": "#over",
      "hr": true
    },
    {
      "id": 3,
      "title": "DIENSTEN",
      "href": "#diensten",
      "hr": true
    },
    {
      "id": 4,
      "title": "PARTNERS",
      "href": "#partners",
      "hr": true
    },
    {
      "id": 5,
      "title": "STORIES",
      "href": "#stories",
      "hr": true
    },
    {
      "id": 6,
      "title": "VACATURES",
      "href": "#vacatures",
      "hr": true
    },
    {
      "id": 7,
      "title": "EVENTS",
      "href": "#events",
      "hr": true
    },
    {
      "id": 8,
      "title": "CONTACT",
      "href": "#contact",
      "hr": true
    },
  ]


  return (
    <>

      { /*   NAVBAR  Start */}

      <Container>
        <Navbar expand={false}>
          <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle onClick={() => setShow(!show)} className="navbar-toogler-icon" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          </Navbar.Collapse>
        </Navbar>
        <Dropdown.Divider />
      </Container>

      { /*   NAVBAR End  */}



      { /*   NAVBAR MENU  Start */}


      <div className={show ? "overlayOpen" : "overlayClose"}>
        <div className="overlay-content">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link onClick={() => setShow(!show)} style={{ color: "#fff", fontSize: "50px" }} >X</Nav.Link>
            {items.map((item: any) =>
              <div className="items" key={item.id}>
                <Nav.Link style={{ color: "#fff", fontSize: "100px" }} href={item.href}>{item.title}</Nav.Link>
                <hr />
              </div>
            )}
          </Nav>
        </div>
      </div>


      { /*   NAVBAR  MENU  End */}
    </>
  );
}

export default Header;
