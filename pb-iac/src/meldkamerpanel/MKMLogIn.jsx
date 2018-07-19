import React, { Component } from 'react'
import './MKMLogIn.css';
class MKMLogIn extends Component {
    render () {
        return (
           <div>
           <div class="row">
               
  <div className="container">
    <div id="login-box">
      <div className="logo">
        <img src="http://lorempixel.com/output/people-q-c-100-100-1.jpg" className="img img-responsive img-circle center-block" alt="" />
        <h1 className="logo-caption"><span className="tweak">L</span>ogin</h1>
      </div>{/* /.logo */}
      <div className="controls">
        <input type="text" name="username" placeholder="Username" className="form-control" />
        <input type="text" name="username" placeholder="Password" className="form-control" />
        <button type="button" className="btn btn-default btn-block btn-custom">Login</button>
      </div>{/* /.controls */}
    </div>{/* /#login-box */}
  </div>{/* /.container */}
  <div id="particles-js" />
</div>
</div>
        )
    }
}

export default MKMLogIn