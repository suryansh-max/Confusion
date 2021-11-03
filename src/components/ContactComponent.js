import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Col, Input, FormFeedback } from 'reactstrap';

class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstname : '',
            lastname : '' ,
            telnum : '',
            email : '',
            agree : false ,
            contactType : '',
            message : '',
            disabled : false,
            touched : {
                firstname : false,
                lastname : false,
                email : false,
                telnum :  false,
                message : false

            }
        }
        this.HandleSumbit = this.HandleSumbit.bind(this);
        this.HandleInput = this.HandleInput.bind(this);
        this.handleBlur = this.HandleBlur.bind(this);
        this.Validate = this.Validate.bind(this);
    }

    HandleInput(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState(
            {[name] : value}
        );

       // console.log('handle input invocked');
    }

    HandleSumbit(event){
        console.log(JSON.stringify(this.state));
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    HandleBlur = (field) => (evt) => {
        this.setState({
            touched : {...this.state.touched , [field] : true}
        }
        );
    }

    Validate(firstname , lastname , email , telnum , message) {
        const errors = {
            firstname : '',
            lastname : '',
            email : '',
            telnum :  '',
            message : ''
        };
        
        console.log('validate error invocked');
       
        const reg = /^[a-zA-Z\s]+$/;
        if(this.state.touched.firstname && !reg.test(firstname)){
            errors.firstname = 'Special char not allowed';
        }

        if(this.state.touched.lastname && !reg.test(lastname)){
            errors.lastname = 'Special char not allowed';
        }

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
        errors.email = 'Email should contain a @';

        if(this.state.touched.telnum && telnum.length != 10){
            errors.telnum = 'must contaion 10 numbers';
        }

        if(this.state.touched.message && message.split(' ').length > 100){
            errors.message = 'too long reply';
        }
       
      
        

        return errors;
    }

    render() {
        const errors = this.Validate(this.state.firstname , this.state.lastname , this.state.email , this.state.telnum , this.state.message);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb className="bc">
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3><br />
                    </div>
                    <div className="col-12 col-md-9" >
                        <Form onSubmit={this.HandleSumbit}>
                            <FormGroup row className="fg">
                                <Label md={2} htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" id="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.HandleInput} 
                                    onBlur={this.HandleBlur('firstname')} valid={errors.firstname === ''} invalid={errors.firstname !== ''} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="fg">
                                <Label md={2} htmlFor="lastname">Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" id="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.HandleInput}
                                             onBlur={this.HandleBlur('lastname')} valid={errors.lastname=== ''} invalid={errors.lastname !== ''} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="fg">
                                <Label md={2} htmlFor="email">Email</Label>
                                <Col md={10}>
                                    <Input type="email" name="email" id="email" placeholder="email" value={this.state.email} onChange={this.HandleInput}
                                         onBlur={this.HandleBlur('email')} valid={errors.email === ''} invalid={errors.email !== ''} />
                                <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup >
                            <FormGroup row className="fg">
                                <Label md={2} htmlFor="telnum">Tel NO.</Label>
                                <Col md={10}>
                                    <Input type="number" name="telnum" id="telnum" placeholder="123-456-4890" value={this.state.telnum} onChange={this.HandleInput}
                                         onBlur={this.HandleBlur('telnum')} valid={errors.telnum === ''} invalid={errors.telnum !== ''} />
                                         <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="fg">
                                <Col md={{size : 6 , offset : 2}} >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.HandleInput} />
                                            {' '}<strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size : 3 , offset : 1}} >
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.HandleInput}>
                                        <option>tel number </option>
                                        <option>Email </option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="fg">
                                <Label md={2} htmlFor="message">Write us:</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" id="message" placeholder="start typing..." rows="12" value={this.state.message} onChange={this.HandleInput} 
                                         onBlur={this.HandleBlur('message')} valid={errors.message === ''} invalid={errors.message !== ''} />
                                         <FormFeedback>{errors.message}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="fg">
                                <Col md={{size : 3 , offset : 2}}>
                                    <Button  type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </div>
               
            </div>
        );
    }

}

export default Contact;