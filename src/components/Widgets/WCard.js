import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'


class WCard extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                    <div className="container-fluid">
                        <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item"><NavLink to="/widgets" className="nav-link">Card</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-card" className="nav-link active">Card Image</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-statistics" className="nav-link">Statistics</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-data" className="nav-link" >Data</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-social" className="nav-link">Social</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-other" className="nav-link">Mix</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <img className="card-img-top" src="../assets/images/gallery/12.jpg" alt="Card  cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="fake_url;" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <img className="card-img-top" src="../assets/images/gallery/13.jpg" alt="Card  cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="fake_url;" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <img className="card-img-top" src="../assets/images/gallery/15.jpg" alt="Card  cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="fake_url;" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <img className="card-img-top" src="../assets/images/gallery/4.jpg" alt="Card  cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="fake_url;" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card-group mb-4">
                                    <div className="card">
                                        <img className="card-img-top" src="../assets/images/gallery/6.jpg" alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="../assets/images/gallery/7.jpg" alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="../assets/images/gallery/8.jpg" alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-12">
                                <div className="card-columns mb-4">
                                    <div className="card">
                                        <img className="card-img-top" src="../assets/images/gallery/12.jpg" alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title that wraps to a new line</h5>
                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                    <div className="card p-3">
                                        <blockquote className="blockquote mb-0 card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted">
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="../assets/images/gallery/13.jpg" alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img" src="../assets/images/gallery/14.jpg" alt="Card" />
                                    </div>
                                    <div className="card p-3 text-right">
                                        <blockquote className="blockquote mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted">
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <img src="../assets/images/gallery/1.jpg" className="card-img-top" alt="fake_url" />
                                    <div className="card-body">
                                        <h5 className="mb-4">Girl &amp; Lake</h5>
                                        <div className="row mb-4">
                                            <div className="col-5">
                                                <i className="mdi mdi-camera mr-1" />ISO 200
                </div>
                                            <div className="col-7">
                                                <i className="mdi mdi-camera-iris mr-1" />1/1000
                </div>
                                            <div className="col-5">3780 x 2984</div>
                                            <div className="col-7">9.54 MB</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-5"><strong>Created:</strong></div>
                                            <div className="col-7">09 Jun 2017 11:32AM</div>
                                            <div className="col-5"><strong>Updated:</strong></div>
                                            <div className="col-7">19 Jun 2017 9:43PM</div>
                                            <div className="col-5"><strong>Bit Depth:</strong></div>
                                            <div className="col-7">16 bit</div>
                                            <div className="col-5"><strong>Creator:</strong></div>
                                            <div className="col-7">Nathan Guerrero</div>
                                        </div>
                                        <hr />
                                        <div className="row align-items-center mb-4">
                                            <div className="col-5"><strong>Privacy</strong></div>
                                            <div className="col-7">
                                                <select className="custom-select custom-select-sm">
                                                    <option value>Public</option>
                                                    <option value>Private</option>
                                                    <option value>Friends</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-5"><strong>Collaborators</strong></div>
                                            <div className="col-7">
                                                <ul className="list-inline avatar-list">
                                                    <li className="avatar-list-item inlineblock"><img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" alt="avatar" /></li>
                                                    <li className="avatar-list-item inlineblock"><img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" alt="avatar" /></li>
                                                    <li className="avatar-list-item inlineblock"><img className="avatar avatar-sm" src="../assets/images/xs/avatar3.jpg" alt="avatar" /></li>
                                                    <li className="avatar-list-item inlineblock"><img className="avatar avatar-sm" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></li>
                                                    <li className="avatar-list-item inlineblock"><img className="avatar avatar-sm" src="../assets/images/xs/avatar5.jpg" alt="avatar" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <img className="card-img-top" src="../assets/images/gallery/9.jpg" alt="Card cap" />
                                    <ul className="list-group card-list-group">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
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
export default connect(mapStateToProps, mapDispatchToProps)(WCard);