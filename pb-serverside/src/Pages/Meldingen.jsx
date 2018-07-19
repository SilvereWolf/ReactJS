import React, { Component } from 'react';
import Table from '../components/Table';
import './Admin.css';
import icons from 'glyphicons'

class Meldingen extends Component {
  
    render () {
      console.info('I' + icons.heart + ' Glyphicons!')
        return (
            <div>
 {/* Navigation */}    
 <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
              <a className="navbar-brand" href="">MeldKamer</a>
              <a className="btn btn-primary" href="/Login">Sign In</a>
            </div>
          </nav>
  <div className="content-wrapper">
    <div className="container-fluid">
      {/* Breadcrumbs*/}
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Tables</li>
      </ol>
      {/* Example DataTables Card*/}
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table" /> Incidenten</div>
        <div className="card-body">
          <div className="table-responsive">
            <Table />
          </div>
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
    </div>
    {/* /.container-fluid*/}
    {/* /.content-wrapper*/}
    <footer className="sticky-footer">
      <div className="container">
        <div className="text-center">
          <small>Copyright © MeldKamer Pagina 2018</small>
        </div>
      </div>
    </footer>
    </div>
    </div>
        )
    }
}

export default Meldingen