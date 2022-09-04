import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ChartsC3 extends Component {
	componentDidMount() {
		const scripts = [
			'../../../assets/js/core.js',
			'../../../assets/js/chart/c3.js',
			'../../../assets/bundles/c3.bundle.js',
			'../../../assets/bundles/lib.vendor.bundle.js',
		];

		scripts.forEach((item) => {
			const script = document.createElement('script');
			script.src = item;
			script.async = true;
			script.onload = () => this.scriptLoaded();
			document.body.appendChild(script);
		});
	}

	scriptLoaded() {
		console.log('consoleconsoleconsoleconsoleconsoleconsoleconsole');
		// $('.counter').counterUp({
		// 	delay: 10,
		// 	time: 1000,
		// });
	}

	render() {
		return (
			<>
				<link rel="stylesheet" href="../../../assets/plugins/charts-c3/c3.min.css" />
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center">
							<ul className="nav nav-tabs page-header-tab">
								<li className="nav-item">
									<NavLink to="/charts" className="nav-link ">
										Apex Chart
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/charts-e" className="nav-link">
										E Chart
									</NavLink>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle active"
										data-toggle="dropdown"
										href="/#"
										role="button"
										aria-haspopup="true"
										aria-expanded="false"
									>
										More
									</a>
									<div className="dropdown-menu">
										<NavLink to="/charts-c3" className="dropdown-item active">
											{' '}
											C3 Chart
										</NavLink>
										<NavLink to="/charts-knob" className="dropdown-item">
											{' '}
											jQuery Knob
										</NavLink>
										<NavLink to="/charts-sparkline" className="dropdown-item">
											Sparkline
										</NavLink>
									</div>
								</li>
							</ul>
							<div className="header-action">
								<button
									type="button"
									className="btn btn-primary"
									data-toggle="modal"
									data-target="#exampleModal"
								>
									<i className="fe fe-plus mr-2" />
									Add
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section-body mt-3">
					<div className="container-fluid">
						<div className="row row-cards">
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Employment Growth</h3>
									</div>
									<div className="card-body">
										<div id="chart-employment" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Monthly Average Temperature</h3>
									</div>
									<div className="card-body">
										<div id="chart-temperature" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Area Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-area" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Lorem ipsum</h3>
									</div>
									<div className="card-body">
										<div id="chart-area-spline" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Area Chart Sracked</h3>
									</div>
									<div className="card-body">
										<div id="chart-area-spline-sracked" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Wind speed during two days</h3>
									</div>
									<div className="card-body">
										<div id="chart-spline" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Rotated Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-spline-rotated" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Step Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-step" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Step Chart Fill</h3>
									</div>
									<div className="card-body">
										<div id="chart-area-step" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Bar Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-bar" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Bar Rotated Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-bar-rotated" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Stacked Bar Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-bar-stacked" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Pie Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-pie" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Donut Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-donut" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">scatter Chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-scatter" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Combination chart</h3>
									</div>
									<div className="card-body">
										<div id="chart-combination" style={{ height: '16rem' }} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
