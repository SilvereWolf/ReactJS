import React, { Component } from 'react'
import './Admin.css';
import icons from 'glyphicons'

class Login extends Component {
    render () {
      console.info('I' + icons.heart + ' Glyphicons!')
        return (
            <div className="container">
  <div className="card card-login mx-auto mt-5">
    <div className="card-header">Login</div>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" />
        </div>
        <div className="form-group">
        </div>
        <a className="btn btn-primary btn-block" href="index.html">Login</a>
      </form>
    </div>
  </div>
</div>

        )
    }
}

export default Login