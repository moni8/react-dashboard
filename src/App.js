import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NumberProvider } from "./context/numberContext";
import Fibonacci from "./components/fibonacci";
import Armstrong from "./components/armStrong";

function App() {
  return (
    <NumberProvider>
      <Router>
        <Container fluid>
          <Row>
            {/* Sidebar */}
            <Col xs={3} md={2} className="bg-dark min-vh-100 p-3">
              <h4 className="text-white mb-4">Menu</h4>
              <Nav defaultActiveKey="/fibonacci" className="flex-column">
                <Nav.Link as={Link} to="/fibonacci" className="text-white mb-2">Fibonacci</Nav.Link>
                <Nav.Link as={Link} to="/armstrong" className="text-white mb-2">Armstrong</Nav.Link>
              </Nav>
            </Col>

            {/* Main Content */}
            <Col xs={9} md={10} className="p-4">
              <Routes>
                <Route path="/fibonacci" element={<Fibonacci />} />
                <Route path="/armstrong" element={<Armstrong />} />
                <Route path="*" element={<Fibonacci />} /> {/* Default */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </NumberProvider>
  );
}

export default App;
