import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class TablesColor extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><NavLink to="/tables" className="nav-link">Basic</NavLink></li>
                                <li className="nav-item"><NavLink to="/tables-datatable" className="nav-link">Datatable</NavLink></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                                    <div className="dropdown-menu">
                                        <NavLink to="/tables-color" className="dropdown-item active">Table Color</NavLink>
                                        <NavLink to="/tables-basic" className="dropdown-item">Other</NavLink>
                                    </div>
                                </li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Bootstrap 4 Table background <small>The contextual classes that can be used are:</small> </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Class</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-primary</code></td>
                                                        <td>Blue: Indicates an important action</td>
                                                    </tr>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-success</code></td>
                                                        <td>Green: Indicates a successful or positive action</td>
                                                    </tr>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-danger</code></td>
                                                        <td>Red: Indicates a dangerous or potentially negative action</td>
                                                    </tr>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-info</code></td>
                                                        <td>Light blue: Indicates a neutral informative change or action</td>
                                                    </tr>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-warning</code></td>
                                                        <td>Orange: Indicates a warning that might need attention</td>
                                                    </tr>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-active</code></td>
                                                        <td>Grey: Applies the hover color to the table row or table cell</td>
                                                    </tr>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-secondary</code></td>
                                                        <td>Grey: Indicates a slightly less important action</td>
                                                    </tr>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-light</code></td>
                                                        <td>Light grey table or table row background</td>
                                                    </tr>
                                                    <tr>
                                                        <td><code className="w3-codespan">.table-dark</code></td>
                                                        <td>Dark grey table or table row background</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Table Dark<small>Add Class <code>.table-dark .table-striped</code></small></h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table m-b-0 table-striped table-dark">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Table head Dark<small>Add Class <code>.thead-dark</code></small></h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table m-b-0">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Table head Light<small>Add Class <code>.thead-light</code></small></h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table m-b-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Solid Color background <small>Add Class <code>.bg-pink</code></small> </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Class name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-blue text-light">
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>.bg-blue</td>
                                                    </tr>
                                                    <tr className="bg-indigo text-light">
                                                        <td>2</td>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>.bg-indigo</td>
                                                    </tr>
                                                    <tr className="bg-red text-light">
                                                        <td>3</td>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>.bg-red</td>
                                                    </tr>
                                                    <tr className="bg-orange text-light">
                                                        <td>4</td>
                                                        <td>Larry</td>
                                                        <td>Jellybean</td>
                                                        <td>.bg-orange</td>
                                                    </tr>
                                                    <tr className="bg-green text-light">
                                                        <td>5</td>
                                                        <td>Larry</td>
                                                        <td>Kikat</td>
                                                        <td>.bg-green</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(TablesColor);