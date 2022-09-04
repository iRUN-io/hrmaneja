import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'


class WSocial extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                    <div className="container-fluid">
                        <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item"><NavLink to="/widgets" className="nav-link">Card</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-card" className="nav-link ">Card Image</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-statistics" className="nav-link">Statistics</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-data" className="nav-link" >Data</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-social" className="nav-link active">Social</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-other" className="nav-link">Mix</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card">
                                    <div className="card-body w_social_state">
                                        <div className="icon"><i className="fa fa-facebook" /></div>
                                        <div className="content">
                                            <div className="text">Like</div>
                                            <div className="number">123</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card">
                                    <div className="card-body w_social_state">
                                        <div className="icon"><i className="fa fa-instagram" /></div>
                                        <div className="content">
                                            <div className="text">Followers</div>
                                            <div className="number">231</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card">
                                    <div className="card-body w_social_state">
                                        <div className="icon"><i className="fa fa-twitter" /></div>
                                        <div className="content">
                                            <div className="text">Followers</div>
                                            <div className="number">31</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card">
                                    <div className="card-body w_social_state">
                                        <div className="icon"><i className="fa fa-google" /></div>
                                        <div className="content">
                                            <div className="text">Like</div>
                                            <div className="number">254</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card">
                                    <div className="card-body w_social_state">
                                        <div className="icon"><i className="fa fa-linkedin" /></div>
                                        <div className="content">
                                            <div className="text">Followers</div>
                                            <div className="number">2510</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card">
                                    <div className="card-body w_social_state">
                                        <div className="icon"><i className="fa fa-behance" /></div>
                                        <div className="content">
                                            <div className="text">Project</div>
                                            <div className="number">121</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body w_user">
                                        <div className="user_avtar">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                        </div>
                                        <div className="wid-u-info">
                                            <h5>Dessie Parks</h5>
                                            <p className="text-muted m-b-0">123 6th St. Melbourne, FL 32904</p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5 className="mb-0">270</h5>
                                                    <small>Followers</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">310</h5>
                                                    <small>Following</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">908</h5>
                                                    <small>Liks</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body w_user">
                                        <div className="user_avtar">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar4.jpg" alt="fake_url" />
                                        </div>
                                        <div className="wid-u-info">
                                            <h5>Nancy Flanary</h5>
                                            <p className="text-muted m-b-0">123 6th St. Melbourne, FL 32904</p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5 className="mb-0">270</h5>
                                                    <small>Followers</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">310</h5>
                                                    <small>Following</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">908</h5>
                                                    <small>Liks</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body w_user">
                                        <div className="user_avtar">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar3.jpg" alt="fake_url" />
                                        </div>
                                        <div className="wid-u-info">
                                            <h5>Paul Schmidt</h5>
                                            <p className="text-muted m-b-0">123 6th St. Melbourne, FL 32904</p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5 className="mb-0">270</h5>
                                                    <small>Followers</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">310</h5>
                                                    <small>Following</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">908</h5>
                                                    <small>Liks</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Social Media</h3>
                                        <div className="card-options">
                                            <div className="item-action dropdown ml-2">
                                                <a href="fake_url" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                    <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                    <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                    <div className="dropdown-divider" />
                                                    <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                                                    <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                                                    <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                                                    <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-vcenter text-nowrap table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Media</th>
                                                        <th>Name</th>
                                                        <th>Like</th>
                                                        <th>Comments</th>
                                                        <th>Share</th>
                                                        <th>Members</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="width40"><i className="fa fa-linkedin" /></td>
                                                        <td><span className="list-name">Linked In</span>
                                                            <span className="text-muted">Florida, United States</span>
                                                        </td>
                                                        <td>19K</td>
                                                        <td>14K</td>
                                                        <td>10K</td>
                                                        <td>
                                                            <span className="tag tag-success">2341</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-twitter" /></td>
                                                        <td><span className="list-name">Twitter</span>
                                                            <span className="text-muted">Arkansas, United States</span>
                                                        </td>
                                                        <td>7K</td>
                                                        <td>11K</td>
                                                        <td>21K</td>
                                                        <td>
                                                            <span className="tag tag-success">952</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-facebook" /></td>
                                                        <td><span className="list-name">Facebook</span>
                                                            <span className="text-muted">Illunois, United States</span>
                                                        </td>
                                                        <td>15K</td>
                                                        <td>18K</td>
                                                        <td>8K</td>
                                                        <td>
                                                            <span className="tag tag-success">6127</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-google-plus" /></td>
                                                        <td><span className="list-name">Google Plus</span>
                                                            <span className="text-muted">Arizona, United States</span>
                                                        </td>
                                                        <td>15K</td>
                                                        <td>18K</td>
                                                        <td>154</td>
                                                        <td>
                                                            <span className="tag tag-success">325</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-youtube-play" /></td>
                                                        <td><span className="list-name">YouTube</span>
                                                            <span className="text-muted">Alaska, United States</span>
                                                        </td>
                                                        <td>15K</td>
                                                        <td>18K</td>
                                                        <td>200</td>
                                                        <td>
                                                            <span className="tag tag-success">160</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix row-cards">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <article className="media">
                                            <div className="mr-3">
                                                <img className="avatar avatar-xl" src="../assets/images/sm/avatar5.jpg" alt="fake_url" />
                                            </div>
                                            <div className="media-body">
                                                <div className="content">
                                                    <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                                    <figure>
                                                        <img src="../assets/images/gallery/14.jpg" alt="fake_url" className="rounded" />
                                                    </figure>
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
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <article className="media">
                                            <div className="mr-3">
                                                <img className="avatar avatar-xl" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
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
                                                <img className="avatar avatar-xl" src="../assets/images/sm/avatar3.jpg" alt="fake_url" />
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
                                                <img className="avatar avatar-xl" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
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
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <img className="rounded" src="../assets/images/gallery/4.jpg" alt="fake_url" />
                                    <div className="card-body w_user">
                                        <div className="user_avtar">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
                                        </div>
                                        <div className="wid-u-info">
                                            <h5>Dessie Parks</h5>
                                            <p className="text-muted m-b-0">123 6th St. Melbourne, FL 32904</p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5 className="mb-0">270</h5>
                                                    <small>Followers</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">310</h5>
                                                    <small>Following</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">908</h5>
                                                    <small>Liks</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <img className="rounded" src="../assets/images/gallery/6.jpg" alt="fake_url" />
                                    <div className="card-body w_user">
                                        <div className="user_avtar">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar3.jpg" alt="fake_url" />
                                        </div>
                                        <div className="wid-u-info">
                                            <h5>Nancy Flanary</h5>
                                            <p className="text-muted m-b-0">123 6th St. Melbourne, FL 32904</p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5 className="mb-0">270</h5>
                                                    <small>Followers</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">310</h5>
                                                    <small>Following</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">908</h5>
                                                    <small>Liks</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <img className="rounded" src="../assets/images/gallery/2.jpg" alt="fake_url" />
                                    <div className="card-body w_user">
                                        <div className="user_avtar">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar4.jpg" alt="fake_url" />
                                        </div>
                                        <div className="wid-u-info">
                                            <h5>Paul Schmidt</h5>
                                            <p className="text-muted m-b-0">123 6th St. Melbourne, FL 32904</p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5 className="mb-0">270</h5>
                                                    <small>Followers</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">310</h5>
                                                    <small>Following</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">908</h5>
                                                    <small>Liks</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card w_social_state2">
                                    <div className="card-body">
                                        <div className="icon facebook"><i className="fa fa-facebook fa-2x" /></div>
                                        <div className="content">
                                            <div className="text">Like</div>
                                            <h5 className="mb-0">123</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card w_social_state2">
                                    <div className="card-body">
                                        <div className="icon instagram"><i className="fa fa-instagram fa-2x" /></div>
                                        <div className="content">
                                            <div className="text">Followers</div>
                                            <h5 className="mb-0">231</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card w_social_state2">
                                    <div className="card-body">
                                        <div className="icon twitter"><i className="fa fa-twitter fa-2x" /></div>
                                        <div className="content">
                                            <div className="text">Followers</div>
                                            <h5 className="mb-0">31</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card w_social_state2">
                                    <div className="card-body">
                                        <div className="icon google"><i className="fa fa-google fa-2x" /></div>
                                        <div className="content">
                                            <div className="text">Like</div>
                                            <h5 className="mb-0">254</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card w_social_state2">
                                    <div className="card-body">
                                        <div className="icon linkedin"><i className="fa fa-linkedin fa-2x" /></div>
                                        <div className="content">
                                            <div className="text">Followers</div>
                                            <h5 className="mb-0">2510</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="card w_social_state2">
                                    <div className="card-body">
                                        <div className="icon behance"><i className="fa fa-behance fa-2x" /></div>
                                        <div className="content">
                                            <div className="text">Project</div>
                                            <h5 className="mb-0">121</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12">
                                <div className="card google w_social">
                                    <div id="w_social1" className="carousel slide" data-ride="carousel" data-interval={2000}>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <i className="fa fa-google-plus fa-2x" />
                                                <p>18th Feb</p>
                                                <h4>Now Get <span>Up to 70% Off</span><br />on buy</h4>
                                                <div className="mt-20"><i>- post form WrapTheme</i></div>
                                            </div>
                                            <div className="carousel-item">
                                                <i className="fa fa-google-plus fa-2x" />
                                                <p>28th Mar</p>
                                                <h4>Now Get <span>50% Off</span><br />on buy</h4>
                                                <div className="mt-20"><i>- post form Epic Theme</i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card twitter w_social">
                                    <div id="w_social2" className="carousel vert slide" data-ride="carousel" data-interval={2000}>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <i className="fa fa-twitter fa-2x" />
                                                <p>23th Feb</p>
                                                <h4>Now Get <span>Up to 70% Off</span><br />on buy</h4>
                                                <div className="mt-20"><i>- post form Epic Theme</i></div>
                                            </div>
                                            <div className="carousel-item">
                                                <i className="fa fa-twitter fa-2x" />
                                                <p>25th Jan</p>
                                                <h4>Now Get <span>50% Off</span><br />on buy</h4>
                                                <div className="mt-20"><i>- post form WrapTheme</i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card facebook w_social">
                                    <div id="w_social2" className="carousel vert slide" data-ride="carousel" data-interval={2000}>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <i className="fa fa-facebook fa-2x" />
                                                <p>20th Jan</p>
                                                <h4>Now Get <span>50% Off</span><br />on buy</h4>
                                                <div className="mt-20"><i>- post form Theme</i></div>
                                            </div>
                                            <div className="carousel-item">
                                                <i className="fa fa-facebook fa-2x" />
                                                <p>23th Feb</p>
                                                <h4>Now Get <span>Up to 70% Off</span><br />on buy</h4>
                                                <div className="mt-20"><i>- post form Theme</i></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(WSocial);