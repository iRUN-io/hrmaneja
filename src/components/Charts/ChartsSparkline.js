import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ChartsSparkline extends Component {
	componentDidMount() {
		const scripts = [
			'../assets/bundles/lib.vendor.bundle.js',
			'../assets/js/core.js',
			'assets/js/chart/sparkline.js',
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
										<NavLink to="/charts-c3" className="dropdown-item">
											{' '}
											C3 Chart
										</NavLink>
										<NavLink to="/charts-knob" className="dropdown-item">
											{' '}
											jQuery Knob
										</NavLink>
										<NavLink to="/charts-sparkline" className="dropdown-item active">
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
						<div className="row clearfix">
							<div className="col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Mini Line Chart</h3>
									</div>
									<div className="card-body">
										<div className="row clearfix">
											<div className="col-lg-8 col-md-12">
												<p className="margin-bottom-30">
													Mouse over the chart to see the tooltip
												</p>
												<span className="inlinesparkline" id="demo-sparkline-line1">
													26,68,35,38,53,95,114,87,114
												</span>{' '}
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line2">
													9,43,50,36,95,41,69,113,50
												</span>{' '}
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line3">
													5,43,66,73,50,102,40,92,59
												</span>{' '}
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line4">
													14,89,16,35,63,63,64,124,100
												</span>{' '}
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line5">
													38,13,36,62,98,48,93,60,75
												</span>
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line6">
													Loading...
												</span>{' '}
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line7">
													Loading...
												</span>{' '}
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line8">
													Loading...
												</span>{' '}
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line9">
													Loading...
												</span>{' '}
												&nbsp;&nbsp;&nbsp;
												<span className="inlinesparkline" id="demo-sparkline-line10">
													Loading...
												</span>
											</div>
											<div className="col-lg-4 col-md-12">
												<p>Composite Inline</p>
												<span id="demo-sparkline-compositeline">
													8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Mini Bar Chart</h3>
									</div>
									<div className="card-body">
										<div className="row clearfix">
											<div className="col-lg-6 col-md-12">
												<span id="mini-bar-chart1" className="mini-bar-chart" />{' '}
												&nbsp;&nbsp;&nbsp;
												<span id="mini-bar-chart2" className="mini-bar-chart" />{' '}
												&nbsp;&nbsp;&nbsp;
												<span id="mini-bar-chart3" className="mini-bar-chart" />{' '}
												&nbsp;&nbsp;&nbsp;
												<span id="mini-bar-chart4" className="mini-bar-chart" />{' '}
												&nbsp;&nbsp;&nbsp;
												<span id="mini-bar-chart5" className="mini-bar-chart" />
											</div>
											<div className="col-lg-2 col-md-4">
												<span id="mini-bar-negative" className="mini-bar-chart">
													25, -10, 15, 35, -15, -5, 10, 20, 15
												</span>
												<p className="mb-0">Negative values</p>
											</div>
											<div className="col-lg-2 col-md-4">
												<span id="mini-bar-stacked" className="mini-bar-chart">
													2:4, 5:7, 2:9, 4:8, 3:10, 4:10, 3:6, 5:8, 2:3
												</span>
												<p className="mb-0">Stacked</p>
											</div>
											<div className="col-lg-2 col-md-4">
												<span id="demo-sparkline-compositebar">4,6,7,7,4,3,2,1,4</span>
												<p className="mb-0">Composite Bar</p>
											</div>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Mini Pie Chart</h3>
									</div>
									<div className="card-body">
										<span id="mini-pie-chart1">30, 15, 55</span> &nbsp;&nbsp;&nbsp;
										<span id="mini-pie-chart2">65, 25, 10</span> &nbsp;&nbsp;&nbsp;
										<span id="mini-pie-chart3">70, 30</span>
										<span id="mini-pie-chart4">20, 15, 65</span> &nbsp;&nbsp;&nbsp;
										<span id="mini-pie-chart5">60, 10, 30</span> &nbsp;&nbsp;&nbsp;
										<span id="mini-pie-chart6">15, 35, 50</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row clearfix">
							<div className="col-md-12 col-lg-4">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Pie Chart</h3>
									</div>
									<div className="card-body align-center">
										<div className="sparkline-pie">6,4,8</div>
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-4">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Bar Chart</h3>
									</div>
									<div className="card-body">
										<div className="sparkline-bar">8,2,5,4,6,1,7,8,3</div>
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-4">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Line Chart</h3>
									</div>
									<div className="card-body">
										<div className="sparkline-line">8,2,5,4,6,1,7,8,3</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row clearfix">
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="card">
									<div className="card-body">
										<div id="sparkline14" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="card">
									<div className="card-body">
										<div id="sparkline16" className="text-center" />
									</div>
								</div>
							</div>
						</div>
						<div className="row clearfix">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">All Examples</h3>
									</div>
									<div className="card-body">
										<div className="row clearfix">
											<div className="col-sm-6">
												<p>
													{' '}
													Mouse speed <span id="mousespeed">Loading..</span>
												</p>
												<p>
													{' '}
													Inline <span className="sparkline-1">10,8,9,3,5,8,5</span> line
													graphs{' '}
													<span className="sparkline-1">
														8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10
													</span>
												</p>
												<p>
													{' '}
													Bar charts <span className="sparkbar">10,8,9,3,5,8,5</span> negative
													values: <span className="sparkbar">-3,1,2,0,3,-1</span> stacked:{' '}
													<span className="sparkbar">0:2,2:4,4:2,4:1</span>
												</p>
												<p>
													{' '}
													Composite inline{' '}
													<span id="compositeline">
														8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10
													</span>
												</p>
												<p>
													{' '}
													Inline with normal range{' '}
													<span id="normalline">
														8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10
													</span>
												</p>
												<p>
													{' '}
													Composite bar <span id="compositebar">4,6,7,7,4,3,2,1,4</span>
												</p>
												<p>
													{' '}
													Discrete{' '}
													<span className="discrete1">
														4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5
													</span>
													<br />
													Discrete with threshold{' '}
													<span id="discrete2">4,6,7,7,4,3,2,1,4</span>
												</p>
												<p>
													{' '}
													Bullet charts
													<br />
													<span className="sparkbullet">10,12,12,9,7</span>
													<br />
													<span className="sparkbullet">14,12,12,9,7</span>
													<br />
													<span className="sparkbullet">10,12,14,9,7</span>
													<br />
												</p>
											</div>
											<div className="col-sm-6">
												<p>
													{' '}
													Customize size and colours{' '}
													<span id="linecustom">10,8,9,3,5,8,5,7</span>
												</p>
												<p>
													{' '}
													Tristate charts{' '}
													<span className="sparktristate">1,1,0,1,-1,-1,1,-1,0,0,1,1</span>
													<br />
													(think games won, lost or drawn){' '}
												</p>
												<p>
													{' '}
													Tristate chart using a colour map:{' '}
													<span className="sparktristatecols">
														1,2,0,2,-1,-2,1,-2,0,0,1,1
													</span>
												</p>
												<p>
													{' '}
													Box Plot:{' '}
													<span className="sparkboxplot">
														4,27,34,52,54,59,61,68,78,82,85,87,91,93,100
													</span>
													<br />
													Pre-computed box plot{' '}
													<span className="sparkboxplotraw">Loading..</span>
												</p>
												<p>
													<span className="sparkpie">1,1,2,4,3</span>
													<span className="sparkpie">1,5</span>
													<span className="sparkpie">20,50,80</span>
												</p>
											</div>
										</div>
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
