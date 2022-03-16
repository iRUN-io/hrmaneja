import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<>
				<div>
					<div className="section-body">
						<footer className="footer">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6 col-sm-12">
										Copyright © 2020{' '}
										<a href="https://themeforest.net/user/puffintheme/portfolio">PuffinTheme</a>
											.
										</div>
									<div className="col-md-6 col-sm-12 text-md-right">
										<ul className="list-inline mb-0">
											<li className="list-inline-item">
												<a href="fake_url">Documentation</a>
											</li>
											<li className="list-inline-item">
												<a href="fake_url">FAQ</a>
											</li>
											<li className="list-inline-item">
												<a href="fake_url" className="btn btn-outline-primary btn-sm">
													Buy Now
													</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</footer>
					</div>
				</div>
			</>
		);
	}
}
