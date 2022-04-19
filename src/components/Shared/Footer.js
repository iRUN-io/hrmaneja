import React, { Component } from 'react';

const year = new Date().getFullYear();
export default class Footer extends Component {	render() {
		return (
			<>
				<div>
					<div className="section-body">
						<footer className="footer">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6 col-sm-12">
										Copyright © {year}{' '}
										<a href="https://irunauto.com">iRUN Technology</a>
											.
										</div>
									<div className="col-md-6 col-sm-12 text-md-right">
										<ul className="list-inline mb-0">
											<li className="list-inline-item">
												<a href="fake_url">User Manual</a>
											</li>
											<li className="list-inline-item">
												<a href="fake_url">FAQ</a>
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
