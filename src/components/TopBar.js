import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Navbar, Container} from "react-bootstrap";

class TopBar extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container style={{height:"95%", margin: "auto", padding: 0}}>
                    <Navbar.Brand style={{fontSize: "4em", marginLeft:  "5%"}}>Spacestagram</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default TopBar