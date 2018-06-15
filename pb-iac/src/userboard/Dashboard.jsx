import React, { Component } from 'react';
import fire from '../config/Fire';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>Welcome home  </h1>
                <button onlick={this.logout}>logout</button>
            </div>
        );
    }
}

export default Dashboard;
