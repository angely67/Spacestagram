//import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Navbar, Nav, Container} from "react-bootstrap";

class TopBar extends React.Component {
    render() {
        var today = new Date();

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container style={{height:"95%", margin: "auto", padding: 0}}>
                    <Navbar.Brand href="#home" style={{fontSize: "3em"}}>Spacestagram</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" bg="dark" variant="dark" >
                            <form>
                                <div className="input-group ms-auto">
                                    <label style={{color: "white", float: "left"}} classname="datepicker__title" for="date">Images Before:</label>
                                    <DatePicker
                                    id="date"
                                    style={{float: "left"}}
                                        selected={today}
                                    />       
                                </div> 
                            </form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default TopBar