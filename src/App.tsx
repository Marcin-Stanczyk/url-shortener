import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import HistoryScreen from "./pages/History";
import HomeScreen from "./pages/Home";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <nav>
              <Navbar expand='lg'>
                <Navbar.Brand as={Link} to='/'>
                  URL Shortener
                </Navbar.Brand>
                <Navbar.Collapse>
                  <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/history'>
                      History
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </nav>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='history' element={<HistoryScreen />} />
      </Routes>
    </>
  );
}

export default App;
