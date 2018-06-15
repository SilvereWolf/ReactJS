import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from '../components/ClientNavbar.jsx';
import Footer from '../components/Footer.jsx';
import fire from "../config/Fire.jsx"



export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            email:'',
            password:''
        }
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        }).catch((error)=>{
            console.log(error)
        });
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    
}
  render() {
            return (
                <div>
                <Navbar />
                <div className="container">
                    <table>
                    <Form>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="*******" />
                        </FormGroup>
                        <Button>Login</Button>
                    </Form>
                    </table>
                </div>
                <Footer />
                </div>
            );
          }
        }