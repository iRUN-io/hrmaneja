import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ChartsKnob extends Component {
	componentDidMount() {
		const scripts = [
			'../assets/bundles/lib.vendor.bundle.js',
			'../assets/bundles/knobjs.bundle.js',
			'../assets/js/core.js',
			'assets/js/chart/knobjs.js',
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
										<NavLink to="/charts-knob" className="dropdown-item active">
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
						<div className="row clearfix">
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">BASIC EXAMPLES</h3>
									</div>
									<div className="card-body text-center">
										<input
											type="text"
											className="knob"
											defaultValue={86}
											data-width={125}
											data-height={125}
											data-thickness="0.25"
											data-fgcolor="#e8769f"
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">ROUNDED CORNERS</h3>
									</div>
									<div className="card-body text-center">
										<input
											type="text"
											className="knob"
											data-linecap="round"
											defaultValue={56}
											data-width={125}
											data-height={125}
											data-thickness="0.25"
											data-fgcolor="#5a5278"
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">READ-ONLY</h3>
									</div>
									<div className="card-body text-center">
										<input
											type="text"
											className="knob"
											defaultValue={65}
											data-width={125}
											data-height={125}
											data-thickness="0.25"
											data-fgcolor="#5a5278"
											readOnly
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">TRON STYLE</h3>
									</div>
									<div className="card-body text-center">
										<input
											type="text"
											className="knob"
											data-skin="tron"
											defaultValue={100}
											data-width={125}
											data-height={125}
											data-thickness="0.2"
											data-anglearc={270}
											data-angleoffset={90}
											data-fgcolor="#5a5278"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row row-deck">
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Knob with %</h3>
									</div>
									<div className="card-body text-center">
										<input
											type="text"
											className="knob2"
											defaultValue={86}
											data-width={150}
											data-height={150}
											data-thickness="0.25"
											data-fgcolor="#e4bd51"
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Cursor' Mode</h3>
									</div>
									<div className="card-body text-center">
										<input
											className="knob"
											data-width={150}
											data-cursor="true"
											data-fgcolor="#e4bd51"
											data-thickness=".3"
											defaultValue={29}
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Different Sizes</h3>
									</div>
									<div className="card-body">
										<div className="row row-deck">
											<div className="col-md-4">
												<input
													type="text"
													className="knob"
													defaultValue={86}
													data-width={90}
													data-height={90}
													data-thickness="0.05"
													data-fgcolor="#e4bd51"
												/>
											</div>
											<div className="col-md-4">
												<input
													type="text"
													className="knob"
													defaultValue={93}
													data-width={120}
													data-height={120}
													data-thickness="0.50"
													data-fgcolor="#e4bd51"
												/>
											</div>
											<div className="col-md-4">
												<input
													type="text"
													className="knob"
													defaultValue={35}
													data-width={125}
													data-height={125}
													data-thickness="0.25"
													data-anglearc={250}
													data-angleoffset={-125}
													data-fgcolor="#e4bd51"
												/>
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
