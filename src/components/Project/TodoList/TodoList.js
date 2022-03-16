import React, { Component } from 'react'
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive todo_list">
                                            <table className="table table-hover table-striped table-vcenter mb-0">
                                                <thead>
                                                    <tr>
                                                        <th><a href="fake_url;" className="btn btn-info btn-sm">Add New</a></th>
                                                        <th className="w150 text-right">Due</th>
                                                        <th className="w100">Priority</th>
                                                        <th className="w80"><i className="icon-user" /></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">Report Panel Usag</span>
                                                            </label>
                                                        </td>
                                                        <td className="text-right">Feb 12-2019</td>
                                                        <td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
                                                        <td>
                                                            <span className="avatar avatar-pink" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">NG</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
                                                                <span className="custom-control-label">Report Panel Usag</span>
                                                            </label>
                                                        </td>
                                                        <td className="text-right">Feb 18-2019</td>
                                                        <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">New logo design for Angular Admin</span>
                                                            </label>
                                                        </td>
                                                        <td className="text-right">March 02-2019</td>
                                                        <td><span className="tag tag-success ml-0 mr-0">High</span></td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">Report Panel Usag</span>
                                                            </label>
                                                        </td>
                                                        <td className="text-right">Feb 12-2019</td>
                                                        <td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
                                                        <td>
                                                            <span className="avatar avatar-pink" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">NG</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
                                                                <span className="custom-control-label">Report Panel Usag</span>
                                                            </label>
                                                        </td>
                                                        <td className="text-right">Feb 18-2019</td>
                                                        <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">New logo design for Angular Admin</span>
                                                            </label>
                                                        </td>
                                                        <td className="text-right">March 02-2019</td>
                                                        <td><span className="tag tag-success ml-0 mr-0">High</span></td>
                                                        <td>
                                                            <span className="avatar avatar-blue" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">NG</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
                                                                <span className="custom-control-label">Design PSD files for Angular Admin</span>
                                                            </label>
                                                        </td>
                                                        <td className="text-right">March 20-2019</td>
                                                        <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
                                                                <span className="custom-control-label">Design PSD files for Angular Admin</span>
                                                            </label>
                                                        </td>
                                                        <td className="text-right">March 20-2019</td>
                                                        <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                        </td>
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
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);