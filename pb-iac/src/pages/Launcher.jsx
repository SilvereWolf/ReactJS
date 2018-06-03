import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/ClientNavbar.jsx';
import {Media} from 'reactstrap';
//import { Container, Row, Col } from 'reactstrap';-->

class Launcher extends Component {
    render(){
    return ( <div>
        <Navbar />
        <Media>
          <Media left top href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mt-1">
          <Media left middle href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Middle aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mt-1">
          <Media left bottom href="#">
            <Media object data-src="./assets/ButtonPanic/6inch_3.png" alt="Generic placeholder image" />
         </Media>
        </Media>
        <Footer />
      </div>
    );
   }
  };

export default Launcher;
