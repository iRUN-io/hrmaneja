
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
const LeaveRequest = () => {
    return (
        <>
            <div className="tab-pane fade" id="Employee-Request" role="tabpanel">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Employee ID</th>
                                        <th>Leave Type</th>
                                        <th>Date</th>
                                        <th>Reason</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="width45">
                                            <span
                                                className="avatar avatar-orange"
                                                data-toggle="tooltip"
                                                title="Avatar Name"
                                            >
                                                DB
                                            </span>
                                        </td>
                                        <td>
                                            <div className="font-15">Marshall Nichols</div>
                                        </td>
                                        <td>
                                            <span>LA-8150</span>
                                        </td>
                                        <td>
                                            <span>Casual Leave</span>
                                        </td>
                                        <td>24 July, 2019 to 26 July, 2019</td>
                                        <td>Going to Family Function</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-sm"
                                                title="Approved"
                                            >
                                                <i className="fa fa-check text-success" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-sm js-sweetalert"
                                                title="Delete"
                                                data-type="confirm"
                                            >
                                                <i className="fa fa-trash-o text-danger" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="width45">
                                            <span
                                                className="avatar avatar-pink"
                                                data-toggle="tooltip"
                                                title="Avatar Name"
                                            >
                                                GC
                                            </span>
                                        </td>
                                        <td>
                                            <div className="font-15">Gary Camara</div>
                                        </td>
                                        <td>
                                            <span>LA-8795</span>
                                        </td>
                                        <td>
                                            <span>Medical Leave</span>
                                        </td>
                                        <td>20 July, 2019 to 26 July, 2019</td>
                                        <td>Going to Development</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-sm"
                                                title="Approved"
                                            >
                                                <i className="fa fa-check text-success" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-sm js-sweetalert"
                                                title="Delete"
                                                data-type="confirm"
                                            >
                                                <i className="fa fa-trash-o text-danger" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="width45">
                                            <img
                                                className="avatar"
                                                src="../assets/images/xs/avatar1.jpg"
                                                data-toggle="tooltip"
                                                title="Avatar Name"
                                                alt="fake_url"
                                            />
                                        </td>
                                        <td>
                                            <div className="font-15">Maryam Amiri</div>
                                        </td>
                                        <td>
                                            <span>LA-0258</span>
                                        </td>
                                        <td>
                                            <span>Casual Leave</span>
                                        </td>
                                        <td>21 July, 2019 to 26 July, 2019</td>
                                        <td>Attend Birthday party</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-sm"
                                                title="Approved"
                                            >
                                                <i className="fa fa-check text-success" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-sm js-sweetalert"
                                                title="Delete"
                                                data-type="confirm"
                                            >
                                                <i className="fa fa-trash-o text-danger" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="width45">
                                            <img
                                                className="avatar"
                                                src="../assets/images/xs/avatar2.jpg"
                                                data-toggle="tooltip"
                                                title="Avatar Name"
                                                alt="fake_url"
                                            />
                                        </td>
                                        <td>
                                            <div className="font-15">Frank Camly</div>
                                        </td>
                                        <td>
                                            <span>LA-1515</span>
                                        </td>
                                        <td>
                                            <span>Casual Leave</span>
                                        </td>
                                        <td>11 Aug, 2019 to 21 Aug, 2019</td>
                                        <td>Going to Holiday</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-sm"
                                                title="Approved"
                                            >
                                                <i className="fa fa-check text-success" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-sm js-sweetalert"
                                                title="Delete"
                                                data-type="confirm"
                                            >
                                                <i className="fa fa-trash-o text-danger" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeaveRequest;
