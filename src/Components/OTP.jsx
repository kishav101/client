import React, { Component, useState } from 'react'
import { Container, Form, Card, ToggleButtonGroup, ButtonGroup } from 'react-bootstrap'

export default class OTP extends Component {
    render() {

        return (
            <div>
                <Container>
                    <Form>
                        <Card className="p-5 shadow mt-5 ">
                           <div className="row ">
                                <div className="col-xs-12 col-sm-12 col-md-12 ">
                                    <h3 >OTP Verification</h3>
                                    <hr style={{backgroundColor:'orange', padding:'5px'}}/>
                                </div>
                           </div>
                           <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <h5>Please select method of choice</h5>
                                </div>
                           </div>
                           <div className="row">
                                <div className="col-xs-12 col-sm-3 col-md-3">
                                   <Form.Group className="mb-3" >
                                        <Form.Check type="checkbox" name="smsCheckbox" id="smsCheckbox"  onClick={} value="yes"  label="via SMS:" />
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-3 col-md-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Check type="checkbox" name="emailCheckbox"  id="emailCheckbox" onClick={} value="yes" label="via Email:" />
                                    </Form.Group>
                                </div>
                           </div>
                        </Card>
                    </Form>
                </Container>
            </div>
        )
    }
}
