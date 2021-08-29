import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Profile, LoginButton, LogoutButton } from './components/Users';
import WeatherForecast from './components/WeatherForecast';

function App() {
    return (
        <Container fluid>
            <Nav navbar className="navbar-expand-lg">
                <Container fluid>

                </Container>
            </Nav>
            <Row>
                <Col md data-testid="welcome-container">
                    <p>Welcome</p>
                    <WeatherForecast />
                </Col>
                <Col md>
                    <LoginButton />
                    <LogoutButton />
                    <Profile />
                </Col>
            </Row>
            <Row>
                <Col md>
                    <p>paragraph</p>
                </Col>
                <Col md>
                    <p>Some text</p>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
