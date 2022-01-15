//import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Navbar, Container} from "react-bootstrap";

class TopBar extends React.Component {
    constructor(props) {
        super(props);

        var oldDate = new Date();
        oldDate.setFullYear(1700);
        var today = new Date();

        this.state = {
            startDate: oldDate,
            endDate: today
        }
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container style={{height:"95%", margin: "auto", padding: 0}}>
                    <Navbar.Brand href="#home" style={{fontSize: "4em", marginLeft:  "5%"}}>Spacestagram</Navbar.Brand>
                    {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav bg="dark" variant="dark" >
                            <form className="d-flex">
                                <div className="input-group ms-auto">
                                    <table>
                                        <tr><td colSpan={3}><label style={{color: "white", fontSize:"2em"}} for="date">Find Images Between:</label></td></tr>
                                        <tr>
                                            <td>
                                    <DatePicker id="date" selected={this.state.startDate} onChange={(date) => {
                                        this.setState({startDate: date});
                                        this.props.parentCallback(date, this.state.endDate);
                                    }
                                     } />  
                                    </td>
                                    <td style={{color: "white"}}>
                                    -
                                    </td><td>
                                    <DatePicker id="date" selected={this.state.endDate} onChange={(date) => {
                                        this.setState({endDate: date});
                                        this.props.parentCallback(this.state.startDate, date);
                                    }}/>    
                                    </td>
                                    </tr> 
                                    </table>     
                                </div> 
                            </form>
                        </Nav>
                                </Navbar.Collapse>*/}
                </Container>
            </Navbar>
        )
    }
}

export default TopBar