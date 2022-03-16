import React, { Component } from 'react'
import Barchart from '../common/barchart';
import Areachart from '../common/areachart';
import Stackedchart from '../common/stackedchart';
import Timelinechart from '../common/timelinechart';
import Columnchart from '../common/columnchart';
import Candlestick from '../common/candlestick';
import Donutchart from '../common/donutchart';
import Piechart from '../common/piechart';
import { connect } from 'react-redux';
class Charts extends Component {

    render() {
        const { fixNavbar } = this.props;
        return (
            <>

                <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-xl-6 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Stacked Area</h3>
                                    </div>
                                    <div className="card-body">
                                        <Stackedchart />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Area Datetime</h3>
                                    </div>
                                    <div className="card-body">

                                        <Areachart></Areachart>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Timeline</h3>
                                    </div>
                                    <div className="card-body">
                                        <Timelinechart></Timelinechart>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Basic Bar</h3>
                                    </div>
                                    <div className="card-body">
                                        <Barchart></Barchart>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Basic CandleStick</h3>
                                    </div>
                                    <div className="card-body">
                                        <Candlestick></Candlestick>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Basic Column</h3>
                                    </div>
                                    <div className="card-body">
                                        <Columnchart></Columnchart>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row row-deck">



                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Simple Donut</h3>
                                    </div>
                                    <div className="card-body">
                                        <Donutchart></Donutchart>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Pie Chart</h3>
                                    </div>
                                    <div className="card-body">
                                        <Piechart></Piechart>
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
export default connect(mapStateToProps, mapDispatchToProps)(Charts);