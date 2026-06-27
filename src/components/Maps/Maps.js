import React, { Component } from 'react';
import MapChart from '../common/MapChart';
import { connect } from 'react-redux';

class Maps extends Component {

	render() {
		const { fixNavbar } = this.props;
		return (
			<>

				<div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
					<div className="container-fluid">
						<div className="row clearfix">
							<div className="col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Map</h3>
									</div>
									<div className="card-body text-center">
										<MapChart></MapChart>
									</div>
								</div>
							</div>
							{/* <div className="col-md-12 col-lg-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">USA Map</h3>
									</div>
									<div className="card-body text-center">
										<div id="usa_map" style={{ height: 300 }} />
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Australia Map</h3>
									</div>
									<div className="card-body text-center">
										<div id="au_map" style={{ height: 300 }} />
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">UK Map</h3>
									</div>
									<div className="card-body text-center">
										<div id="uk_map" style={{ height: 300 }} />
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>

				{/*  */}
				{/* </div> */}
			</>
		);
	}
}
const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Maps);