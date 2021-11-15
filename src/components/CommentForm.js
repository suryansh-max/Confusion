import React, { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Button, Col, Form, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModelOpen: false
        }
        this.toggleModel = this.toggleModel.bind(this);
        this.HandleSumbit = this.HandleSumbit.bind(this);
    }

    toggleModel() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        });
    }

    HandleSumbit(values) {
        alert('Current State is: ' + JSON.stringify(values));
        console.log('handle sumbit invocked' );
    }

    render() {
        return (
            <div className="container">
                <Button outline onClick={this.toggleModel} color="primary" >
                    <span className="fa  fa-pencil fa-lg"></span> Sumbit Comment</Button>

                <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
                    <ModalHeader toggle={this.toggleModel}>Sumbit Comment</ModalHeader>
                    <ModalBody toggle={this.toggleModel}>
                        <LocalForm onSubmit={ (values) => this.HandleSumbit(values)}  className="container">
                            <Row className="form-group">

                                <Label model=".ratenum" name="ratenum">Rate this dish</Label>
                                <Control.select model=".ratenum" name="ratenum"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>

                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" >First Name</Label>

                                <Control.text model=".name" id="name" name="name"
                                    placeholder=" Name"
                                    className="form-control"
                                    validators={
                                        {
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }
                                    }
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={
                                        {
                                            required: 'Required , ',
                                            minLength: 'too short name',
                                            maxLength: 'very long name'
                                        }
                                    }
                                />


                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" >Your comment</Label>

                                <Control.textarea model=".message" id="message" name="message"
                                    rows="6"
                                    className="form-control"
                                    validators={{
                                        maxLength: maxLength(100)
                                    }} />
                                <Errors className="text-danger" show="touched" model=".message" messages={{ maxLength: 'very big feedback' }} />

                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary" >
                                    Send Feedback
                                </Button>
                            </Row>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;