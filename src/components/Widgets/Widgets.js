import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import {
    boxAction, box2Action, box3Action, box4Action, box5Action, box6Action, box7Action, box8Action, box9Action, box10Action,
    boxCloseAction, box2CloseAction, box3CloseAction, box4CloseAction, box5CloseAction, box6CloseAction, box7CloseAction, box8CloseAction, box9CloseAction, box10CloseAction
} from '../../actions/settingsAction';

class Widgets extends Component {
    handleBox(e) {
        this.props.boxAction(e)
    }
    handleBox2(e) {
        this.props.box2Action(e)
    }
    handleBox3(e) {
        this.props.box3Action(e)
    }
    handleBox4(e) {
        this.props.box4Action(e)
    }
    handleBox5(e) {
        this.props.box5Action(e)
    }
    handleBox6(e) {
        this.props.box6Action(e)
    }
    handleBox7(e) {
        this.props.box7Action(e)
    }
    handleBox8(e) {
        this.props.box8Action(e)
    }
    handleBox9(e) {
        this.props.box9Action(e)
    }
    handleBox10(e) {
        this.props.box10Action(e)
    }
    closeBox(e) {
        this.props.boxCloseAction(e)
    }
    closeBox2(e) {
        this.props.box2CloseAction(e)
    }
    closeBox3(e) {
        this.props.box3CloseAction(e)
    }
    closeBox4(e) {
        this.props.box4CloseAction(e)
    }
    closeBox5(e) {
        this.props.box5CloseAction(e)
    }
    closeBox6(e) {
        this.props.box6CloseAction(e)
    }
    closeBox7(e) {
        this.props.box7CloseAction(e)
    }
    closeBox8(e) {
        this.props.box8CloseAction(e)
    }
    closeBox9(e) {
        this.props.box9CloseAction(e)
    }
    closeBox10(e) {
        this.props.box10CloseAction(e)
    }
    render() {
        const { fixNavbar, boxOpen, box2Open, box3Open, box4Open, box5Open, box6Open,
            box7Open, box8Open, box9Open, box10Open, boxClose, box2Close, box3Close,
            box4Close, box5Close, box6Close, box7Close, box8Close, box9Close, box10Close } = this.props;
        return (

            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                    <div className="container-fluid">
                        <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item"><NavLink to="/widgets" className="nav-link active">Card</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-card" className="nav-link">Card Image</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-statistics" className="nav-link">Statistics</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-data" className="nav-link" >Data</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-social" className="nav-link">Social</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-other" className="nav-link">Mix</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix row-deck">
                            <div className="col-md-6">
                                {boxClose ?
                                    <div className={`card  ${!boxOpen ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">This is a standard card</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox(!boxOpen)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                        <div className="card-footer">This is standard card footer</div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-md-6">
                                {box2Close ?
                                    <div className={`card  ${!box2Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">Built card</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox2(!box2Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox2(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                    </div>
                                    : ""}
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {box3Close ?
                                    <div className={`card  ${!box3Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-status bg-blue" />
                                        <div className="card-header">
                                            <h3 className="card-title">Card blue</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox3(!box3Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox3(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {box4Close ?
                                    <div className={`card  ${!box4Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-status bg-green" />
                                        <div className="card-header">
                                            <h3 className="card-title">Card green</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox4(!box4Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox4(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {box5Close ?
                                    <div className={`card  ${!box5Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-status bg-orange" />
                                        <div className="card-header">
                                            <h3 className="card-title">Card orange</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox5(!box5Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox5(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                    </div>
                                    : ""}
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {box9Close ?
                                    <div className={`card  ${!box9Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-status bg-purple" />
                                        <div className="card-header">
                                            <h3 className="card-title">Card purple</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox9(!box9Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox9(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {box10Close ?
                                    <div className={`card  ${!box10Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-status card-status-left bg-blue" />
                                        <div className="card-header">
                                            <h3 className="card-title">Card status on left side</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox10(!box10Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox10(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                    </div>
                                    : ""}
                            </div>

                        </div>
                        <div className="row clearfix row-deck">

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Panel with custom buttons</h3>
                                        <div className="card-options">
                                            <a href="/#" className="btn btn-primary btn-sm">Action 1</a>
                                            <a href="/#" className="btn btn-secondary btn-sm ml-2">Action 2</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Card with search form</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-sm btn-default" type="submit"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                {box6Close ?
                                    <div className={`card  ${!box6Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">Card with alert</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox6(!box6Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox6(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-alert alert alert-success mb-0">
                                            Adding action was successful
            </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {box7Close ?
                                    <div className={`card  ${!box7Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">Card with alert</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox7(!box7Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox7(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-alert alert alert-danger mb-0">
                                            Adding action failed
            </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Card with switch</h3>
                                        <div className="card-options">
                                            <label className="custom-switch m-0">
                                                <input type="checkbox" defaultValue={1} className="custom-switch-input" defaultChecked />
                                                <span className="custom-switch-indicator" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
            </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {box8Close ?
                                    <div className={`card  ${!box8Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">Card with loader</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox8(!box8Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox8(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="dimmer active">
                                                <div className="loader" />
                                                <div className="dimmer-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : ""}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar,
    boxOpen: state.settings.isbox,
    box2Open: state.settings.isbox2,
    box3Open: state.settings.isbox3,
    box4Open: state.settings.isbox4,
    box5Open: state.settings.isbox5,
    box6Open: state.settings.isbox6,
    box7Open: state.settings.isbox7,
    box8Open: state.settings.isbox8,
    box9Open: state.settings.isbox9,
    box10Open: state.settings.isbox10,
    boxClose: state.settings.isBoxClose,
    box2Close: state.settings.isBox2Close,
    box3Close: state.settings.isBox3Close,
    box4Close: state.settings.isBox4Close,
    box5Close: state.settings.isBox5Close,
    box6Close: state.settings.isBox6Close,
    box7Close: state.settings.isBox7Close,
    box8Close: state.settings.isBox8Close,
    box9Close: state.settings.isBox9Close,
    box10Close: state.settings.isBox10Close,
})

const mapDispatchToProps = dispatch => ({
    boxAction: (e) => dispatch(boxAction(e)),
    box2Action: (e) => dispatch(box2Action(e)),
    box3Action: (e) => dispatch(box3Action(e)),
    box4Action: (e) => dispatch(box4Action(e)),
    box5Action: (e) => dispatch(box5Action(e)),
    box6Action: (e) => dispatch(box6Action(e)),
    box7Action: (e) => dispatch(box7Action(e)),
    box8Action: (e) => dispatch(box8Action(e)),
    box9Action: (e) => dispatch(box9Action(e)),
    box10Action: (e) => dispatch(box10Action(e)),
    boxCloseAction: (e) => dispatch(boxCloseAction(e)),
    box2CloseAction: (e) => dispatch(box2CloseAction(e)),
    box3CloseAction: (e) => dispatch(box3CloseAction(e)),
    box4CloseAction: (e) => dispatch(box4CloseAction(e)),
    box5CloseAction: (e) => dispatch(box5CloseAction(e)),
    box6CloseAction: (e) => dispatch(box6CloseAction(e)),
    box7CloseAction: (e) => dispatch(box7CloseAction(e)),
    box8CloseAction: (e) => dispatch(box8CloseAction(e)),
    box9CloseAction: (e) => dispatch(box9CloseAction(e)),
    box10CloseAction: (e) => dispatch(box10CloseAction(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Widgets);