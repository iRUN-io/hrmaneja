import React, { Component } from 'react'
import { connect } from 'react-redux';

class Search extends Component {
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
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Search here..." />
                                        </div>
                                        <p className="mb-0">Search Result For "Bootstrap 4 admin"</p>
                                        <strong className="font-12"> About 16,853 result ( 0.13 seconds)</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body">
                    <div className="container-fluid">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#All" aria-expanded="true">All</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Images" aria-expanded="true">Images</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Video" aria-expanded="false">Video</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#News" aria-expanded="false">News</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#More" aria-expanded="false">More</a></li>
                        </ul>
                        <div className="tab-content mt-3">
                            <div role="tabpanel" className="tab-pane vivify fadeIn active" id="All" aria-expanded="false">
                                <div className="table-responsive">
                                    <table className="table table-hover card-table table_custom">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h6><a target="_blank" href="fake_url">Bootstrap 4 Light &amp; Dark Admin with Free VueJs</a></h6>
                                                    <span className="text-green font-13">https://themeforest.net/user/puffintheme</span>
                                                    <p className="mt-10 mb-0 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success"><i className="fa fa-eye" /> 1501</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6><a target="_blank" href="fake_url">Bootstrap 4 Admin Dashboard Template</a></h6>
                                                    <span className="text-green font-13">https://themeforest.net/user/puffintheme</span>
                                                    <p className="mt-10 mb-0 text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success"><i className="fa fa-eye" /> 1894</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6><a target="_blank" href="fake_url">The ultimate Bootstrap 4 Admin Dashboard</a></h6>
                                                    <span className="text-green font-13">https://themeforest.net/user/puffintheme</span>
                                                    <p className="mt-10 mb-0 text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success"><i className="fa fa-eye" /> 1205</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6><a target="_blank" href="fake_url">Bootstrap 4 Admin Dashboard Template</a></h6>
                                                    <span className="text-green font-13">https://themeforest.net/user/puffintheme</span>
                                                    <p className="mt-10 mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success"><i className="fa fa-eye" /> 985</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane vivify fadeIn" id="Images" aria-expanded="true">
                                <div className="card">
                                    <div className="card-body text-center py-5">
                                        <img src="assets/images/search.svg" className="width360 mb-3" alt="fake_url" />
                                        <h4>No Images Found</h4>
                                        <span>Choose a different filter to view test results to you</span>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane vivify fadeIn" id="Video" aria-expanded="true">
                                <div className="card">
                                    <div className="card-body text-center py-5">
                                        <img src="assets/images/search.svg" className="width360  mb-3" alt="fake_url" />
                                        <h4>No Video Found</h4>
                                        <span>Choose a different filter to view test results to you</span>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane vivify fadeIn" id="News" aria-expanded="true">
                                <div className="card">
                                    <div className="card-body">
                                        <article className="media">
                                            <div className="mr-3">
                                                <img className="w150" src="../assets/images/gallery/1.jpg" alt="fake_url" />
                                            </div>
                                            <div className="media-body">
                                                <div className="content">
                                                    <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                                </div>
                                                <nav className="d-flex text-muted">
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-repeat" /></a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-twitter" /> 24</a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-heart" /> 43</a>
                                                    <a href="fake_url" className="text-muted ml-auto">5 notes</a>
                                                </nav>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <article className="media">
                                            <div className="mr-3">
                                                <img className="w150" src="../assets/images/gallery/2.jpg" alt="fake_url" />
                                            </div>
                                            <div className="media-body">
                                                <div className="content">
                                                    <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                                </div>
                                                <nav className="d-flex text-muted">
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-repeat" /></a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-twitter" /> 24</a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-heart" /> 43</a>
                                                    <a href="fake_url" className="text-muted ml-auto">5 notes</a>
                                                </nav>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <article className="media">
                                            <div className="mr-3">
                                                <img className="w150" src="../assets/images/gallery/3.jpg" alt="fake_url" />
                                            </div>
                                            <div className="media-body">
                                                <div className="content">
                                                    <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                                </div>
                                                <nav className="d-flex text-muted">
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-repeat" /></a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-twitter" /> 24</a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-heart" /> 43</a>
                                                    <a href="fake_url" className="text-muted ml-auto">5 notes</a>
                                                </nav>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <article className="media">
                                            <div className="mr-3">
                                                <img className="w150" src="../assets/images/gallery/4.jpg" alt="fake_url" />
                                            </div>
                                            <div className="media-body">
                                                <div className="content">
                                                    <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                                </div>
                                                <nav className="d-flex text-muted">
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-repeat" /></a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-twitter" /> 24</a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-heart" /> 43</a>
                                                    <a href="fake_url" className="text-muted ml-auto">5 notes</a>
                                                </nav>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <article className="media">
                                            <div className="mr-3">
                                                <img className="w150" src="../assets/images/gallery/5.jpg" alt="fake_url" />
                                            </div>
                                            <div className="media-body">
                                                <div className="content">
                                                    <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                                </div>
                                                <nav className="d-flex text-muted">
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-repeat" /></a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-twitter" /> 24</a>
                                                    <a href="/#" className="icon mr-3"><i className="fe fe-heart" /> 43</a>
                                                    <a href="fake_url" className="text-muted ml-auto">5 notes</a>
                                                </nav>
                                            </div>
                                        </article>
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);