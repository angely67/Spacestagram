import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Navbar, Container} from "react-bootstrap";

class TopBar extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container style={{height:"95%", margin: "auto", padding: 0}}>
                    <Navbar.Brand style={{fontSize: "4em", marginLeft:  "5%"}}>
                    <img src={require('./white_earth.png')}  style={{width: 40, height: 40, marginRight: 10}} class="d-inline-block align-middle" alt=""></img>
                        Spacestagram
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default TopBar