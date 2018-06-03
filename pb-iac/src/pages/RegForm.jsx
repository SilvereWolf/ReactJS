import React, { Component } from 'react';
import Navbar from '../components/ClientNavbar.jsx';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { Button } from 'reactstrap';

class RegForm extends Component {
    render() {
        return (
            <div>
        <Navbar />
        <div  className="container">
                <Form>
        <FormGroup>
          <Label for="exampleEmail">Plain Text (Static)</Label>
          <Input plaintext>Some plain text/ static value</Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="varchar" name="name" id="exampleEmail" placeholder="Last name" />
          <FormGroup>
          <Label for="exampleEmail">First name</Label>
          <Input type="varchar" name="firstname" id="exampleEmail" placeholder="First name" />
        </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="*********" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUrl">adres</Label>
          <Input type="location" name="adress" id="exampleUrl" placeholder="Example street #20" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">ID Card</Label>
          <Input type="varchar" name="phone" id="exampleNumber" placeholder="093827FMK" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="text" name="email" id="exampleEmail" placeholder="email adress" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">phone</Label>
          <Input type="varchar" name="phone" id="examplephone" placeholder="phone number" />
        </FormGroup>
        <div>
        <Button color="secondary" size="lg">Register</Button>
        </div>
        </Form>
        </div>
        </div>
        );
    }
}

export default RegForm;
