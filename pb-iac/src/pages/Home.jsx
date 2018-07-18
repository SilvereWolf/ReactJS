import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/ClientNavbar.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        <div className="container">
          <h2>Welcome</h2>
          <p>
            landing
          </p>
          <p>
          page  
          </p>
        </div>
        <Footer fixed />
      </div>
    );
  }
}

export default Home