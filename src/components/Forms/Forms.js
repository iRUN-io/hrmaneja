import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class Forms extends Component {


    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div>
                    <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between align-items-center">
                                <ul className="nav nav-tabs page-header-tab">
                                    <li className="nav-item"><NavLink to="/forms" className="nav-link active">Basic</NavLink></li>
                                    {/* <li className="nav-item"><NavLink to="/form-advanced" className="nav-link">Advanced</NavLink></li> */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="//#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                                        <div className="dropdown-menu">
                                            <NavLink to="/form-validation" className="dropdown-item" >Form Validation</NavLink>
                                            <NavLink to="/form-wizard" className="dropdown-item" >Form Wizard</NavLink>
                                            <NavLink to="/form-summernote" className="dropdown-item" >Summernote</NavLink>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-action">
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="/#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-body mt-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Static</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label className="form-label">Static</label>
                                                <div className="form-control-plaintext">Username</div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Text</label>
                                                <input type="text" className="form-control" name="example-text-input" placeholder="Text.." />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Disabled</label>
                                                <input type="text" className="form-control" name="example-disabled-input" placeholder="Disabled.." defaultValue="Well, she turned me into a newt." disabled />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Readonly</label>
                                                <input type="text" className="form-control" name="example-disabled-input" placeholder="Disabled.." defaultValue="Well, how'd you become king, then?" readOnly />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Textarea <span className="form-label-small">56/100</span></label>
                                                <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Content.." defaultValue={"Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. I'm not a witch. Camelot!"} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Image Check</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row gutters-sm">
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={1} className="imagecheck-input" />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar1.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={2} className="imagecheck-input" defaultChecked />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar2.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={3} className="imagecheck-input" />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar3.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={4} className="imagecheck-input" defaultChecked />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar5.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={5} className="imagecheck-input" />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar6.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={6} className="imagecheck-input" />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar6.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={7} className="imagecheck-input" defaultChecked />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar1.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={8} className="imagecheck-input" />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar2.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <label className="imagecheck mb-3">
                                                        <input name="imagecheck" type="checkbox" defaultValue={9} className="imagecheck-input" />
                                                        <figure className="imagecheck-figure">
                                                            <img src="../assets/images/sm/avatar3.jpg" alt="}" className="imagecheck-image" />
                                                        </figure>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Color Input</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row gutters-xs">
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="azure" className="colorinput-input" />
                                                            <span className="colorinput-color bg-azure" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="indigo" className="colorinput-input" defaultChecked />
                                                            <span className="colorinput-color bg-indigo" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="purple" className="colorinput-input" />
                                                            <span className="colorinput-color bg-purple" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="pink" className="colorinput-input" />
                                                            <span className="colorinput-color bg-pink" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="red" className="colorinput-input" />
                                                            <span className="colorinput-color bg-red" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="orange" className="colorinput-input" />
                                                            <span className="colorinput-color bg-orange" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="yellow" className="colorinput-input" />
                                                            <span className="colorinput-color bg-yellow" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="lime" className="colorinput-input" />
                                                            <span className="colorinput-color bg-lime" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="green" className="colorinput-input" />
                                                            <span className="colorinput-color bg-green" />
                                                        </label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="colorinput">
                                                            <input name="color" type="checkbox" defaultValue="teal" className="colorinput-input" />
                                                            <span className="colorinput-color bg-teal" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Form validation</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" name="example-password-input" placeholder="Password.." />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Valid State</label>
                                                <input type="text" className="form-control is-valid" name="example-text-input-valid" placeholder="Valid State.." />
                                                <input type="text" className="form-control mt-3 state-valid" defaultValue="Valid state" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Invalid State</label>
                                                <input type="text" className="form-control is-invalid" name="example-text-input-invalid" placeholder="Invalid State.." />
                                                <div className="invalid-feedback">Invalid feedback</div>
                                                <input type="text" className="form-control mt-3 state-invalid" defaultValue="Invalid state" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Country</label>
                                                <select className="form-control custom-select">
                                                    <option value>Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Groups</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label className="form-label">Size</label>
                                                <div className="selectgroup w-100">
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="value" defaultValue={50} className="selectgroup-input" defaultChecked />
                                                        <span className="selectgroup-button">S</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="value" defaultValue={100} className="selectgroup-input" />
                                                        <span className="selectgroup-button">M</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="value" defaultValue={150} className="selectgroup-input" />
                                                        <span className="selectgroup-button">L</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="value" defaultValue={200} className="selectgroup-input" />
                                                        <span className="selectgroup-button">XL</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Icons input</label>
                                                <div className="selectgroup w-100">
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="transportation" defaultValue={2} className="selectgroup-input" />
                                                        <span className="selectgroup-button selectgroup-button-icon"><i className="fe fe-smartphone" /></span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="transportation" defaultValue={1} className="selectgroup-input" defaultChecked />
                                                        <span className="selectgroup-button selectgroup-button-icon"><i className="fe fe-tablet" /></span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="transportation" defaultValue={6} className="selectgroup-input" />
                                                        <span className="selectgroup-button selectgroup-button-icon"><i className="fe fe-monitor" /></span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="transportation" defaultValue={6} className="selectgroup-input" />
                                                        <span className="selectgroup-button selectgroup-button-icon"><i className="fe fe-x" /></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Icon input</label>
                                                <div className="selectgroup selectgroup-pills">
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="icon-input" defaultValue={1} className="selectgroup-input" defaultChecked />
                                                        <span className="selectgroup-button selectgroup-button-icon"><i className="fe fe-sun" /></span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="icon-input" defaultValue={2} className="selectgroup-input" />
                                                        <span className="selectgroup-button selectgroup-button-icon"><i className="fe fe-moon" /></span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="icon-input" defaultValue={3} className="selectgroup-input" />
                                                        <span className="selectgroup-button selectgroup-button-icon"><i className="fe fe-cloud-rain" /></span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="radio" name="icon-input" defaultValue={4} className="selectgroup-input" />
                                                        <span className="selectgroup-button selectgroup-button-icon"><i className="fe fe-cloud" /></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Your skills</label>
                                                <div className="selectgroup selectgroup-pills">
                                                    <label className="selectgroup-item">
                                                        <input type="checkbox" name="value" defaultValue="HTML" className="selectgroup-input" defaultChecked />
                                                        <span className="selectgroup-button">HTML</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="checkbox" name="value" defaultValue="CSS" className="selectgroup-input" />
                                                        <span className="selectgroup-button">CSS</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="checkbox" name="value" defaultValue="PHP" className="selectgroup-input" />
                                                        <span className="selectgroup-button">PHP</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="checkbox" name="value" defaultValue="JavaScript" className="selectgroup-input" />
                                                        <span className="selectgroup-button">JavaScript</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="checkbox" name="value" defaultValue="Ruby" className="selectgroup-input" />
                                                        <span className="selectgroup-button">Ruby</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="checkbox" name="value" defaultValue="Ruby" className="selectgroup-input" />
                                                        <span className="selectgroup-button">Ruby</span>
                                                    </label>
                                                    <label className="selectgroup-item">
                                                        <input type="checkbox" name="value" defaultValue="C++" className="selectgroup-input" />
                                                        <span className="selectgroup-button">C++</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Toggle switches</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="custom-switches-stacked">
                                                    <label className="custom-switch">
                                                        <input type="radio" name="option" defaultValue={1} className="custom-switch-input" defaultChecked />
                                                        <span className="custom-switch-indicator" />
                                                        <span className="custom-switch-description">Option 1</span>
                                                    </label>
                                                    <label className="custom-switch">
                                                        <input type="radio" name="option" defaultValue={2} className="custom-switch-input" />
                                                        <span className="custom-switch-indicator" />
                                                        <span className="custom-switch-description">Option 2</span>
                                                    </label>
                                                    <label className="custom-switch">
                                                        <input type="radio" name="option" defaultValue={3} className="custom-switch-input" />
                                                        <span className="custom-switch-indicator" />
                                                        <span className="custom-switch-description">Option 3</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-label">Toggle switch single</div>
                                                <label className="custom-switch">
                                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                                                    <span className="custom-switch-indicator" />
                                                    <span className="custom-switch-description">I agree with terms and conditions</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Ratios</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <input type="range" className="form-control custom-range" step={5} min={0} max={50} />
                                                    </div>
                                                    <div className="col-auto">
                                                        <input type="number" className="form-control w-8" defaultValue={45} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Radios</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control custom-radio">
                                                        <input type="radio" className="custom-control-input" name="example-radios" defaultValue="option1" defaultChecked />
                                                        <div className="custom-control-label">Option 1</div>
                                                    </label>
                                                    <label className="custom-control custom-radio">
                                                        <input type="radio" className="custom-control-input" name="example-radios" defaultValue="option2" />
                                                        <div className="custom-control-label">Option 2</div>
                                                    </label>
                                                    <label className="custom-control custom-radio">
                                                        <input type="radio" className="custom-control-input" name="example-radios" defaultValue="option3" disabled />
                                                        <div className="custom-control-label">Option Disabled</div>
                                                    </label>
                                                    <label className="custom-control custom-radio">
                                                        <input type="radio" className="custom-control-input" name="example-radios2" defaultValue="option4" disabled defaultChecked />
                                                        <div className="custom-control-label">Option Disabled Checked</div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-label">Inline Radios</div>
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" defaultValue="option1" defaultChecked />
                                                        <span className="custom-control-label">Option 1</span>
                                                    </label>
                                                    <label className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" defaultValue="option2" />
                                                        <span className="custom-control-label">Option 2</span>
                                                    </label>
                                                    <label className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" className="custom-control-input" name="example-inline-radios" defaultValue="option3" />
                                                        <span className="custom-control-label">Option 3</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Checkboxes</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                        <span className="custom-control-label">Option 1</span>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox2" defaultValue="option2" />
                                                        <span className="custom-control-label">Option 2</span>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox3" defaultValue="option3" disabled />
                                                        <span className="custom-control-label">Option Disabled</span>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox4" defaultValue="option4" defaultChecked disabled />
                                                        <span className="custom-control-label">Option Disabled Checked</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-label">Inline Checkboxes</div>
                                                <div>
                                                    <label className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" name="example-inline-checkbox1" defaultValue="option1" defaultChecked />
                                                        <span className="custom-control-label">Option 1</span>
                                                    </label>
                                                    <label className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" name="example-inline-checkbox2" defaultValue="option2" />
                                                        <span className="custom-control-label">Option 2</span>
                                                    </label>
                                                    <label className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" name="example-inline-checkbox3" defaultValue="option3" />
                                                        <span className="custom-control-label">Option 3</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Mix</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label className="form-label">Tags</label>
                                                <input type="text" className="form-control" id="input-tags" defaultValue="aa,bb,cc,dd" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Beast</label>
                                                <select name="beast" id="select-beast" className="form-control custom-select">
                                                    <option value={1}>Chuck Testa</option>
                                                    <option value={4}>Sage Cattabriga-Alosa</option>
                                                    <option value={3}>Nikola Tesla</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Users list</label>
                                                <select name="user" id="select-users" className="form-control custom-select">
                                                    <option value={1} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar1.jpg&quot;}">Victoria King</option>
                                                    <option value={2} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar2.jpg&quot;}">Nathan Guerrero</option>
                                                    <option value={3} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar3.jpg&quot;}">Alice Mason</option>
                                                    <option value={4} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar4.jpg&quot;}">Rose Bradley</option>
                                                    <option value={5} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar5.jpg&quot;}">Peter Richards</option>
                                                    <option value={6} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar6.jpg&quot;}">Wayne Holland</option>
                                                    <option value={7} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar7.jpg&quot;}">Michelle Ross</option>
                                                    <option value={8} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar8.jpg&quot;}">Debra Beck</option>
                                                    <option value={9} data-data="{&quot;image&quot;:  &quot;../assets/images/xs/avatar1.jpg&quot;}">Phillip Peters</option>
                                                    <option value={10} data-data="{&quot;image&quot;: &quot;../assets/images/xs/avatar2.jpg&quot;}">Jack Ruiz</option>
                                                    <option value={11} data-data="{&quot;image&quot;: &quot;../assets/images/xs/avatar3.jpg&quot;}">Ronald Bradley</option>
                                                    <option value={12} data-data="{&quot;image&quot;: &quot;../assets/images/xs/avatar4.jpg&quot;}">Kathleen Harper</option>
                                                    <option value={13} data-data="{&quot;image&quot;: &quot;../assets/images/xs/avatar5.jpg&quot;}">Bobby Knight</option>
                                                    <option value={14} data-data="{&quot;image&quot;: &quot;../assets/images/xs/avatar6.jpg&quot;}">Craig Anderson</option>
                                                    <option value={15} data-data="{&quot;image&quot;: &quot;../assets/images/xs/avatar7.jpg&quot;}">Crystal Wallace</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Countries</label>
                                                <select name="country" id="select-countries" className="form-control custom-select">
                                                    <option value="br" data-data="{&quot;image&quot;: &quot;../assets/images/flags/br.svg&quot;}">Brazil</option>
                                                    <option value="cz" data-data="{&quot;image&quot;: &quot;../assets/images/flags/cz.svg&quot;}">Czech Republic</option>
                                                    <option value="de" data-data="{&quot;image&quot;: &quot;../assets/images/flags/de.svg&quot;}">Germany</option>
                                                    <option value="pl" data-data="{&quot;image&quot;: &quot;../assets/images/flags/pl.svg&quot;}" >Poland</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Input group</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Search for..." />
                                                    <span className="input-group-append"><button className="btn btn-primary" type="button">Go!</button></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Input group buttons</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" />
                                                    <div className="input-group-append">
                                                        <button type="button" className="btn btn-primary">Action</button>
                                                        <button data-toggle="dropdown" type="button" className="btn btn-primary dropdown-toggle" />
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="/#">News</a>
                                                            <a className="dropdown-item" href="/#">Messages</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item" href="/#">Edit Profile</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Icon input</label>
                                                <div className="input-icon mb-3">
                                                    <input type="text" className="form-control" placeholder="Search for..." />
                                                    <span className="input-icon-addon"><i className="fe fe-search" /></span>
                                                </div>
                                                <div className="input-icon">
                                                    <span className="input-icon-addon"><i className="fe fe-user" /></span>
                                                    <input type="text" className="form-control" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Separated inputs</label>
                                                <div className="row gutters-xs">
                                                    <div className="col">
                                                        <input type="text" className="form-control" placeholder="Search for..." />
                                                    </div>
                                                    <span className="col-auto"><button className="btn btn-secondary" type="button"><i className="fe fe-search" /></button></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">ZIP Code</label>
                                                <div className="row gutters-sm">
                                                    <div className="col">
                                                        <input type="text" className="form-control" placeholder="Search for..." />
                                                    </div>
                                                    <span className="col-auto align-self-center">
                                                        <span className="form-help" data-toggle="popover" data-placement="top" data-content="<p>ZIP Code must be US or CDN format. You can use an extended ZIP+4 code to determine address more accurately.</p>
                                      <p class='mb-0'><a href=''>USP ZIP codes lookup tools</a></p>
                                      ">?</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Input mask</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label className="form-label">Date</label>
                                                <input type="text" name="field-name" className="form-control" data-mask="00/00/0000" data-mask-clearifnotmatch="true" placeholder="00/00/0000" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Hour</label>
                                                <input type="text" name="field-name" className="form-control" data-mask="00:00:00" data-mask-clearifnotmatch="true" placeholder="00:00:00" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Date &amp; Hour</label>
                                                <input type="text" name="field-name" className="form-control" data-mask="00/00/0000 00:00:00" data-mask-clearifnotmatch="true" placeholder="00/00/0000 00:00:00" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">ZIP Code</label>
                                                <input type="text" name="field-name" className="form-control" data-mask="00000-000" data-mask-clearifnotmatch="true" placeholder="00000-000" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Money</label>
                                                <input type="text" name="field-name" className="form-control" data-mask="000.000.000.000.000,00" data-mask-reverse="true" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Telephone</label>
                                                <input type="text" name="field-name" className="form-control" data-mask="0000-0000" data-mask-clearifnotmatch="true" placeholder="0000-0000" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Telephone with Code Area</label>
                                                <input type="text" name="field-name" className="form-control" data-mask="(00) 0000-0000" data-mask-clearifnotmatch="true" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">IP Address</label>
                                                <input type="text" name="field-name" className="form-control" data-mask="099.099.099.099" data-mask-clearifnotmatch="true" placeholder="000.000.000.000" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">My Profile</h3>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <img className="avatar avatar-xl" src="../assets/images/sm/avatar2.jpg" alt="avatar" />
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label className="form-label">Email-Address</label>
                                                            <input className="form-control" placeholder="your-email@domain.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Bio</label>
                                                    <textarea className="form-control" rows={5} defaultValue={"Big belly rude boy, million dollar hustler. Unemployed."} />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Email-Address</label>
                                                    <input className="form-control" placeholder="your-email@domain.com" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control" defaultValue="password" />
                                                </div>
                                                <div className="form-footer">
                                                    <button className="btn btn-primary btn-block">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <form className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Edit Profile</h3>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="form-group">
                                                        <label className="form-label">Company</label>
                                                        <input type="text" className="form-control" disabled placeholder="Company" defaultValue="Creative Code Inc." />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Username</label>
                                                        <input type="text" className="form-control" placeholder="Username" defaultValue="michael23" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <div className="form-group">
                                                        <label className="form-label">Email address</label>
                                                        <input type="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">First Name</label>
                                                        <input type="text" className="form-control" placeholder="Company" defaultValue="Chet" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Last Name</label>
                                                        <input type="text" className="form-control" placeholder="Last Name" defaultValue="Faker" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Address</label>
                                                        <input type="text" className="form-control" placeholder="Home Address" defaultValue="Melbourne, Australia" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <div className="form-group">
                                                        <label className="form-label">City</label>
                                                        <input type="text" className="form-control" placeholder="City" defaultValue="Melbourne" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Postal Code</label>
                                                        <input type="number" className="form-control" placeholder="ZIP Code" />
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="form-group">
                                                        <label className="form-label">Country</label>
                                                        <select className="form-control custom-select">
                                                            <option value>Germany</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">About Me</label>
                                                        <textarea rows={5} className="form-control" placeholder="Here can be your description" defaultValue={"Oh so, your weak rhyme\n                                            You doubt I'll bother, reading into it I'll probably won't, left to my own devicesBut that's the difference in our opinions."} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-right">
                                            <button type="submit" className="btn btn-primary">Update Profile</button>
                                        </div>
                                    </form>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">HTTP Request</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="form-group col-sm-4 col-md-2">
                                                    <label className="form-label">
                                                        Method <span className="form-required">*</span>
                                                    </label>
                                                    <select className="custom-select">
                                                        <option value="GET">GET</option>
                                                        <option value="POST">POST</option>
                                                        <option value="PUT">PUT</option>
                                                        <option value="HEAD">HEAD</option>
                                                        <option value="DELETE">DELETE</option>
                                                        <option value="PATCH">PATCH</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-8 col-md-10">
                                                    <label className="form-label">
                                                        URL <span className="form-required">*</span>
                                                    </label>
                                                    <input name="url" type="text" className="form-control" defaultValue="https://content.googleapis.com/discovery/v1/apis/surveys/v2/rest" />
                                                </div>
                                            </div>
                                            <div className="form-label">Assertions</div>
                                            <div className="table-responsive">
                                                <table className="table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="pl-0">Source</th>
                                                            <th>Property</th>
                                                            <th>Comparison</th>
                                                            <th className="pr-0">Target</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody><tr>
                                                        <td className="pl-0">
                                                            <select className="custom-select">
                                                                <option value="STATUS_CODE" >Status code</option>
                                                                <option value="JSON_BODY">JSON body</option>
                                                                <option value="HEADERS">Headers</option>
                                                                <option value="TEXT_BODY">Text body</option>
                                                                <option value="RESPONSE_TIME">Response time</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <input type="text" className="form-control" /></td>
                                                        <td>
                                                            <select className="custom-select">
                                                                <option value="EQUALS" >Equals</option>
                                                                <option value="NOT_EQUALS">Not equals</option>
                                                                <option value="HAS_KEY">Has key</option>
                                                                <option value="NOT_HAS_KEY">Not has key</option>
                                                                <option value="HAS_VALUE">Has value</option>
                                                                <option value="NOT_HAS_VALUE">Not has value</option>
                                                                <option value="IS_EMPTY">Is empty</option>
                                                                <option value="NOT_EMPTY">Is not empty</option>
                                                                <option value="GREATER_THAN">Greater than</option>
                                                                <option value="LESS_THAN">Less than</option>
                                                            </select>
                                                        </td>
                                                        <td className="pr-0">
                                                            <input type="text" className="form-control" defaultValue={200} />
                                                        </td>
                                                    </tr>
                                                        <tr>
                                                            <td className="pl-0">
                                                                <select className="custom-select">
                                                                    <option value="STATUS_CODE">Status code</option>
                                                                    <option value="JSON_BODY" >JSON body</option>
                                                                    <option value="HEADERS">Headers</option>
                                                                    <option value="TEXT_BODY">Text body</option>
                                                                    <option value="RESPONSE_TIME">Response time</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="form-control" defaultValue="parameters.alt.type" />
                                                            </td>
                                                            <td>
                                                                <select className="custom-select">
                                                                    <option value="EQUALS">Equals</option>
                                                                    <option value="NOT_EQUALS">Not equals</option>
                                                                    <option value="HAS_KEY">Has key</option>
                                                                    <option value="NOT_HAS_KEY">Not has key</option>
                                                                    <option value="HAS_VALUE" >Has value</option>
                                                                    <option value="NOT_HAS_VALUE">Not has value</option>
                                                                    <option value="IS_EMPTY">Is empty</option>
                                                                    <option value="NOT_EMPTY">Is not empty</option>
                                                                    <option value="GREATER_THAN">Greater than</option>
                                                                    <option value="LESS_THAN">Less than</option>
                                                                </select>
                                                            </td>
                                                            <td className="pr-0">
                                                                <input type="text" className="form-control" defaultValue="string" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pl-0">
                                                                <select className="custom-select">
                                                                    <option value="STATUS_CODE">Status code</option>
                                                                    <option value="JSON_BODY">JSON body</option>
                                                                    <option value="HEADERS">Headers</option>
                                                                    <option value="TEXT_BODY">Text body</option>
                                                                    <option value="RESPONSE_TIME" >Response time</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="form-control" /></td>
                                                            <td>
                                                                <select className="custom-select">
                                                                    <option value="EQUALS">Equals</option>
                                                                    <option value="NOT_EQUALS">Not equals</option>
                                                                    <option value="HAS_KEY">Has key</option>
                                                                    <option value="NOT_HAS_KEY">Not has key</option>
                                                                    <option value="HAS_VALUE">Has value</option>
                                                                    <option value="NOT_HAS_VALUE">Not has value</option>
                                                                    <option value="IS_EMPTY">Is empty</option>
                                                                    <option value="NOT_EMPTY">Is not empty</option>
                                                                    <option value="GREATER_THAN">Greater than</option>
                                                                    <option value="LESS_THAN" >Less than</option>
                                                                </select>
                                                            </td>
                                                            <td className="pr-0">
                                                                <input type="text" className="form-control" defaultValue={500} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pl-0">
                                                                <select className="custom-select">
                                                                    <option value="STATUS_CODE">Status code</option>
                                                                    <option value="JSON_BODY">JSON body</option>
                                                                    <option value="HEADERS" >Headers</option>
                                                                    <option value="TEXT_BODY">Text body</option>
                                                                    <option value="RESPONSE_TIME">Response time</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="form-control" defaultValue="content-type" />
                                                            </td>
                                                            <td>
                                                                <select className="custom-select">
                                                                    <option value="EQUALS" >Equals</option>
                                                                    <option value="NOT_EQUALS">Not equals</option>
                                                                    <option value="HAS_KEY">Has key</option>
                                                                    <option value="NOT_HAS_KEY">Not has key</option>
                                                                    <option value="HAS_VALUE">Has value</option>
                                                                    <option value="NOT_HAS_VALUE">Not has value</option>
                                                                    <option value="IS_EMPTY">Is empty</option>
                                                                    <option value="NOT_EMPTY">Is not empty</option>
                                                                    <option value="GREATER_THAN">Greater than</option>
                                                                    <option value="LESS_THAN">Less than</option>
                                                                </select>
                                                            </td>
                                                            <td className="pr-0">
                                                                <input type="text" className="form-control" defaultValue="application/json; charset=UTF-8" />
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                        <div className="card-footer text-right">
                                            <button type="submit" className="btn btn-primary">Make request</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Forms);