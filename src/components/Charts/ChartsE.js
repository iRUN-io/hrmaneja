import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ChartsE extends Component {
	componentDidMount() {
		const scripts = [
			'../assets/bundles/lib.vendor.bundle.js',
			'../assets/bundles/echarts.bundle.js',
			'../assets/js/core.js',
			'assets/js/chart/echart.js',
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
									<NavLink to="/charts-e" className="nav-link active">
										E Chart
									</NavLink>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										data-toggle="dropdown"
										href="/#"
										role="button"
										aria-haspopup="true"
										aria-expanded="false"
									>
										More
									</a>
									<div className="dropdown-menu">
										<NavLink to="/charts-c3" className="dropdown-item">
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
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Bubble Chart</h3>
									</div>
									<div className="card-body">
										<div id="echart-Bubble_chart" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Customized Pie</h3>
									</div>
									<div className="card-body">
										<div id="echart-Customized_Pie" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">World Total Population</h3>
									</div>
									<div className="card-body">
										<div id="echart-World_Population" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Gradient shadow</h3>
									</div>
									<div className="card-body">
										<div id="echart-Gradient_shadow" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Line Gradient</h3>
									</div>
									<div className="card-body">
										<div id="echart-Line_Gradient" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Large scale area chart</h3>
									</div>
									<div className="card-body">
										<div id="echart-large_scale_area" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Bar Area</h3>
									</div>
									<div className="card-body">
										<div id="echart-bar_area" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Rainfall and Evaporation</h3>
									</div>
									<div className="card-body">
										<div id="echart-rainfall" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Dynamic Data</h3>
									</div>
									<div className="card-body">
										<div id="echart-dynamic_data" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Basic Candlestick</h3>
									</div>
									<div className="card-body">
										<div id="echart-candlestick" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Basic Scatter Chart</h3>
									</div>
									<div className="card-body">
										<div id="echart-basic_scatter" style={{ height: 400 }} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Doughnut Chart</h3>
									</div>
									<div className="card-body">
										<div id="echart-doughnut" style={{ height: 400 }} />
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
