import React, { Component } from "react";
import "./EMPDashboard.css";
import Header from "./Header";
import { Grid, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

class EMPDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Grid fluid>
                    <Row>
                        {this.props.employeeList.map(item => {
                            return (
                                <Col md={3} lg={3}>
                                    <div key={item.id} className="empCard">
                                        <div>{item.id}</div>
                                        <div>{item.name}</div>
                                        <div>{item.age}</div>
                                        <div>{item.gender}</div>
                                        <div>{item.email}</div>
                                        <div>{item.phoneNo}</div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    employeeList: state.employeeList
});

export default connect(mapStateToProps)
    (withRouter(EMPDashboard));