import React, { Component } from 'react'
import { connect } from 'react-redux';
import CountUp from 'react-countup'

class Accounts extends Component {

    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div>
                    <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between align-items-center">
                                <ul className="nav nav-tabs page-header-tab">
                                    <li className="nav-item"><a className="nav-link active" id="Accounts-tab" data-toggle="tab" href="#Accounts-Invoices">Invoices</a></li>
                                    <li className="nav-item"><a className="nav-link" id="Accounts-tab" data-toggle="tab" href="#Accounts-Payments">Payments</a></li>
                                    <li className="nav-item"><a className="nav-link" id="Accounts-tab" data-toggle="tab" href="#Accounts-Expenses">Expenses</a></li>
                                </ul>
                                <div className="header-action">
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-body mt-3">
                        <div className="container-fluid">
                            <div className="tab-content mt-3">
                                <div className="tab-pane fade show active" id="Accounts-Invoices" role="tabpanel">
                                    <div className="row clearfix">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div>Total Accounts</div>
                                                    <div className="py-4 m-0 text-center h1 text-success counter"><CountUp end={78} /></div>
                                                    <div className="d-flex">
                                                        <small className="text-muted">This years</small>
                                                        <div className="ml-auto"><i className="fa fa-caret-up text-success" />4%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div>New Account</div>
                                                    <div className="py-4 m-0 text-center h1 text-info counter"><CountUp end={28} /></div>
                                                    <div className="d-flex">
                                                        <small className="text-muted">This years</small>
                                                        <div className="ml-auto"><i className="fa fa-caret-up text-success" />13%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div>Total Current A/C</div>
                                                    <div className="py-4 m-0 text-center h1 text-warning counter"><CountUp end={8} /></div>
                                                    <div className="d-flex">
                                                        <small className="text-muted">This years</small>
                                                        <div className="ml-auto"><i className="fa fa-caret-up text-success" />3%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div>Total Seving A/C</div>
                                                    <div className="py-4 m-0 text-center h1 text-danger counter"><CountUp end={70} /></div>
                                                    <div className="d-flex">
                                                        <small className="text-muted">This years</small>
                                                        <div className="ml-auto"><i className="fa fa-caret-down text-danger" />10%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Invoices</h3>
                                            <div className="card-options">
                                                <form>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                                                        <span className="input-group-btn ml-2"><button className="btn btn-icon btn-sm" type="submit"><span className="fe fe-search" /></button></span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped table-vcenter">
                                                    <thead>
                                                        <tr>
                                                            <th>Invoice No.</th>
                                                            <th>Clients</th>
                                                            <th>Date</th>
                                                            <th>Type</th>
                                                            <th>Status</th>
                                                            <th className="w100">Amount</th>
                                                            <th className="w150">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>#LA-5218</td>
                                                            <td>vPro tec LLC.</td>
                                                            <td>07 March, 2018</td>
                                                            <td><i className="payment payment-cirrus" data-toggle="tooltip" data-original-title="payment payment-cirrus" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$4,205</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-1212</td>
                                                            <td>BT Technology</td>
                                                            <td>25 Jun, 2018</td>
                                                            <td><i className="payment payment-bitcoin" data-toggle="tooltip" data-original-title="payment payment-bitcoin" /></td>
                                                            <td><span className="tag tag-warning">Pending</span></td>
                                                            <td>$5,205</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-0222</td>
                                                            <td>More Infoweb Pvt.</td>
                                                            <td>12 July, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-warning">Pending</span></td>
                                                            <td>$2,000</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-0312</td>
                                                            <td>RETO Tech LLC.</td>
                                                            <td>13 July, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$10,000</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-5656</td>
                                                            <td>SDRAPP Pvt.</td>
                                                            <td>27 July, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$1,205</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-4515</td>
                                                            <td>Kdash Infoweb LLC.</td>
                                                            <td>07 March, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$4,205</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-1212</td>
                                                            <td>BT Technology</td>
                                                            <td>25 Jun, 2018</td>
                                                            <td><i className="payment payment-bitcoin" data-toggle="tooltip" data-original-title="payment payment-bitcoin" /></td>
                                                            <td><span className="tag tag-warning">Pending</span></td>
                                                            <td>$5,205</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-0222</td>
                                                            <td>More Infoweb Pvt.</td>
                                                            <td>12 July, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-warning">Pending</span></td>
                                                            <td>$2,000</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-7845</td>
                                                            <td>BT infoweb</td>
                                                            <td>25 Jun, 2018</td>
                                                            <td><i className="payment payment-bitcoin" data-toggle="tooltip" data-original-title="payment payment-bitcoin" /></td>
                                                            <td><span className="tag tag-warning">Pending</span></td>
                                                            <td>$5,205</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#LA-5656</td>
                                                            <td>SDRAPP Pvt.</td>
                                                            <td>27 July, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$1,205</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope text-info" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer" /></button>
                                                                <button type="button" className="btn btn-icon btn-sm" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash text-danger" /></button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <nav aria-label="Page navigation">
                                                <ul className="pagination mb-0 justify-content-end">
                                                    <li className="page-item"><a className="page-link" href="/#">Previous</a></li>
                                                    <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="/#">Next</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Accounts-Payments" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="table-responsive invoice_list">
                                                <table className="table table-hover table-striped table-vcenter">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Clients Name</th>
                                                            <th>Project Name</th>
                                                            <th>Date</th>
                                                            <th>Type</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>MP 4515</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >Zoe Baker</a>
                                                                        <p className="mb-0">zoe.baker@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>UPlo - Bootstrap 4 </td>
                                                            <td>07 March, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td>$4,205</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LK 1515</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >South Shyanne</a>
                                                                        <p className="mb-0">south.shyanne@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Tito Wordpress</td>
                                                            <td>25 Jun, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td>$5,205</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SS 6323</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >South Shyanne</a>
                                                                        <p className="mb-0">south.shyanne@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Hotel Management</td>
                                                            <td>12 July, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td>$2,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PQ 8585</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >Zoe Baker</a>
                                                                        <p className="mb-0">zoe.baker@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Bootstrap 4 Angular5 Admin</td>
                                                            <td>13 July, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td>$10,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>WD 4455</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >Zoe Baker</a>
                                                                        <p className="mb-0">zoe.baker@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Angular Dashboard</td>
                                                            <td>27 July, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td>$1,205</td>
                                                        </tr>
                                                        <tr>
                                                            <td>MP 4515</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >Zoe Baker</a>
                                                                        <p className="mb-0">zoe.baker@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>UPlo - Bootstrap 4 </td>
                                                            <td>07 March, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td>$4,205</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LK 1515</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >South Shyanne</a>
                                                                        <p className="mb-0">south.shyanne@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Tito Wordpress</td>
                                                            <td>25 Jun, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td>$5,205</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SS 6323</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar8.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >South Shyanne</a>
                                                                        <p className="mb-0">south.shyanne@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Hotel Management</td>
                                                            <td>12 July, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td>$2,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PQ 8585</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                                    <div className="ml-3">
                                                                        <a href="fake_url" >Zoe Baker</a>
                                                                        <p className="mb-0">zoe.baker@example.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Bootstrap 4 Angular5 Admin</td>
                                                            <td>13 July, 2018</td>
                                                            <td><i className="payment payment-visa-dark" data-toggle="tooltip" data-original-title="payment payment-visa-dark" /></td>
                                                            <td>$10,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <nav aria-label="Page navigation">
                                                <ul className="pagination mb-0 justify-content-end">
                                                    <li className="page-item"><a className="page-link" href="/#">Previous</a></li>
                                                    <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="/#">Next</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Accounts-Expenses" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped table-vcenter mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Item</th>
                                                            <th>Order by</th>
                                                            <th>From</th>
                                                            <th>Date</th>
                                                            <th>Paid By</th>
                                                            <th>Status</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>HP Laptop</td>
                                                            <td>Marshall Nichols</td>
                                                            <td>Paytem</td>
                                                            <td>07 March, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-warning">Pending</span></td>
                                                            <td>$205</td>
                                                        </tr>
                                                        <tr>
                                                            <td>iMack Desktop</td>
                                                            <td>Marshall Nichols</td>
                                                            <td>ebay USA</td>
                                                            <td>22 July, 2017</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-warning">Pending</span></td>
                                                            <td>$355</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Logitech USB Mouse, Keyboard</td>
                                                            <td>Marshall Nichols</td>
                                                            <td>Amazon</td>
                                                            <td>28 July, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$40</td>
                                                        </tr>
                                                        <tr>
                                                            <td>MacBook Pro Air</td>
                                                            <td>Debra Stewart</td>
                                                            <td>Amazon</td>
                                                            <td>17 Jun, 2018</td>
                                                            <td><i className="payment payment-mastercard" data-toggle="tooltip" data-original-title="payment payment-mastercard" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$800</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dell Monitor 28 inch</td>
                                                            <td>Ava Alexander</td>
                                                            <td>Flipkart UK</td>
                                                            <td>21 Jun, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$205</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Logitech USB Mouse, Keyboard</td>
                                                            <td>Marshall Nichols</td>
                                                            <td>Amazon</td>
                                                            <td>28 July, 2018</td>
                                                            <td><i className="payment payment-paypal" data-toggle="tooltip" data-original-title="payment payment-paypal" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$40</td>
                                                        </tr>
                                                        <tr>
                                                            <td>MacBook Pro Air</td>
                                                            <td>Debra Stewart</td>
                                                            <td>Amazon</td>
                                                            <td>17 Jun, 2018</td>
                                                            <td><i className="payment payment-mastercard" data-toggle="tooltip" data-original-title="payment payment-mastercard" /></td>
                                                            <td><span className="tag tag-success">Approved</span></td>
                                                            <td>$800</td>
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

                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Accounts);