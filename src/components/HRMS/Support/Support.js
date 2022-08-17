import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { OverlayTrigger, Popover } from 'react-bootstrap';

import { Link, } from 'react-router-dom';

const Support = () => {
    
    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <div className='container'>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item">
                                <Link  className="nav-link active">
                                    <i className="fa fa-arrow-left"></i>
                                </Link>
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
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Departments-list" role="tabpanel">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Tickets</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-icon"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* {departments.length === 0 && !loading ? (
                                        <EmptyState/>
                                        ) : ( */}
                                    <div className="card-body">
                                        <div className="table-responsive">

                                            {/* {loading ? (
                                                <Skeleton count={4} height={50} />
                                            ) : ( */}
                                                <table className="table table-striped table-vcenter table-hover mb-0">
                                                    <thead>
                                                        <tr>
                                                            {/* <th>#</th> */}
                                                            <th>Category</th>
                                                            <th>Ticket ID</th>
                                                            <th>Note</th>
                                                            {/* <th>Action</th> */}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* {departments.map((department) => ( */}
                                                            <tr>
                                                                {/* <td>0{department.id}</td> */}
                                                                <td><div className="font-15">name</div></td>
                                                                <td>head</td>
                                                                <td>id</td>
                                                                
                                                            </tr>
                                                        {/* ))} */}
                                                    </tbody>
                                                </table>
                                            {/* )} */}
                                        </div>
                                    </div>
                                        {/* )} */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Contact Customer Support</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        {/* update form */}
                        <div className="modal-body">
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <select name='departmentHead' 
                                            required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option>Category</option>
                                            {/* {users.map((user) => ( */}
                                                    <option >Leave request</option>
                                                    <option >Expenses</option>
                                            {/* ))} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p>Note</p>
                                        <textarea className='form-control' name="" id="" cols="43" rows="10" style={{}}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit"  className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Modal */}
            {/* <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Department</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <EditDepartments department={department} />
                    </div>
                </div>
            </div> */}

        </>
    );
}

export default Support;