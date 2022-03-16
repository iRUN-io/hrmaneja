import React, { Component } from 'react'
import { connect } from 'react-redux';


class AppFileManager extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Recently Accessed Files</h3>
                                        <div className="card-options">
                                            <a href="/#"><i className="fa fa-plus" data-toggle="tooltip" data-placement="right" title="Upload New" /></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="file_folder">
                                            <a href="/#;">
                                                <div className="icon">
                                                    <i className="fa fa-folder text-success" />
                                                </div>
                                                <div className="file-name">
                                                    <p className="mb-0 text-muted">Family</p>
                                                    <small>3 File, 1.2GB</small>
                                                </div>
                                            </a>
                                            <a href="/#;">
                                                <div className="icon">
                                                    <i className="fa fa-file-word-o text-primary" />
                                                </div>
                                                <div className="file-name">
                                                    <p className="mb-0 text-muted">Report2017.doc</p>
                                                    <small>Size: 68KB</small>
                                                </div>
                                            </a>
                                            <a href="/#;">
                                                <div className="icon">
                                                    <i className="fa fa-file-pdf-o text-danger" />
                                                </div>
                                                <div className="file-name">
                                                    <p className="mb-0 text-muted">Report2017.pdf</p>
                                                    <small>Size: 68KB</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-none b-none">
                                    <div className="card-body pt-0">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-vcenter table_custom text-nowrap spacing5 text-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th />
                                                        <th>Name</th>
                                                        <th>Share With</th>
                                                        <th>Owner</th>
                                                        <th>Last Update</th>
                                                        <th>File Size</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-folder" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">Work</span>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-list avatar-list-stacked">
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                            </div>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Me</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Oct 7, 2018</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> - </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-folder" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">Family</span>
                                                        </td>
                                                        <td>
                                                            -
                    </td>
                                                        <td className="width100">
                                                            <span>Me</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Oct 17, 2018</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> - </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-folder text-danger" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">Holidays</span>
                                                        </td>
                                                        <td>
                                                            -
                    </td>
                                                        <td className="width100">
                                                            <span>John</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Oct 18, 2018</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> 50MB </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-folder" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">Mobile Work </span>
                                                        </td>
                                                        <td>
                                                            -
                    </td>
                                                        <td className="width100">
                                                            <span>Me</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>April 7, 2019</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> 1GB </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-folder" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">Photoshop Data</span>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-list avatar-list-stacked">
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                            </div>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Andrew</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Nov 23, 2019</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> - </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-folder text-danger" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">Holidays</span>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-list avatar-list-stacked">
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                                <img className="avatar avatar-sm" src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" title="Avatar" alt="avatar" />
                                                            </div>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Me</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Dec 5, 2018</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> 100MB </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-file-excel-o text-success" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">new timesheet.xlsx</span>
                                                        </td>
                                                        <td>
                                                            -
                    </td>
                                                        <td className="width100">
                                                            <span>Me</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Dec 5, 2018</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> 52KB </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-file-word-o text-warning" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">new project.doc</span>
                                                        </td>
                                                        <td>
                                                            -
                    </td>
                                                        <td className="width100">
                                                            <span>Me</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>May 5, 2019</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> 152KB </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-file-pdf-o text-warning" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">report.pdf</span>
                                                        </td>
                                                        <td>
                                                            -
                    </td>
                                                        <td className="width100">
                                                            <span>Me</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>May 2, 2019</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> 841KB </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="width45">
                                                            <i className="fa fa-file-pdf-o text-warning" />
                                                        </td>
                                                        <td>
                                                            <span className="folder-name">report-2018.pdf</span>
                                                        </td>
                                                        <td>
                                                            -
                    </td>
                                                        <td className="width100">
                                                            <span>Me</span>
                                                        </td>
                                                        <td className="width100">
                                                            <span>Oct 16, 2018</span>
                                                        </td>
                                                        <td className="width100 text-center">
                                                            <span className="size"> 541KB </span>
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
} const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(AppFileManager);