import React from 'react';
import './App.css';

import { Container, Row, Col, Nav } from 'react-bootstrap'

function App() {
    return (
        <Container fluid>
            <Nav navbar className="navbar-expand-lg">
                <Container fluid>

                </Container>
            </Nav>
            <Row>
                <Col md className="App">
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </Col>
                <Col md>
                    <p>Some text</p>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
