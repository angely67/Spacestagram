import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand href="#home">Spacestagram</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="ms-auto">
                            <form>
                                <div className="input-group ms-auto">
                                <input autoComplete="off" className="form-control mr-sm-2" name="username" placeholder="Lichess Username" aria-label="Search"></input>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go!</button>
                                    </div>
                                </div> 
                            </form>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        )
    }
}

export default Navbar
