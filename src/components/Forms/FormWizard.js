import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class FormWizard extends Component {


	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				{/* <link rel="stylesheet" href="../assets/plugins/jquery-steps/jquery.steps.css" /> */}
				<div>
					<div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
						<div className="container-fluid">
							<div className="d-flex justify-content-between align-items-center">
								<ul className="nav nav-tabs page-header-tab">
									<li className="nav-item">
										<NavLink to="/forms" className="nav-link">
											Basic
										</NavLink>
									</li>
									{/* <li className="nav-item">
										<NavLink to="/form-advanced" className="nav-link">
											Advanced
										</NavLink>
									</li> */}
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
											<NavLink to="/form-validation" className="dropdown-item">
												Form Validation
											</NavLink>
											<NavLink to="/form-wizard" className="dropdown-item active">
												Form Wizard
											</NavLink>
											<NavLink to="/form-summernote" className="dropdown-item">
												Summernote
											</NavLink>
										</div>
									</li>
								</ul>
								<div className="header-action">
									<button
										type="button"
										className="btn btn-primary"
										data-toggle="modal"
										data-target="/#exampleModal"
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
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Basic Example - Horizontal Layout</h3>
										</div>
										<div className="card-body">
											<div id="wizard_horizontal">
												<h2>First Step</h2>
												<section>
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														ut nulla nunc. Maecenas arcu sem, hendrerit a tempor quis,
														sagittis accumsan tellus. In hac habitasse platea dictumst.
														Donec a semper dui. Nunc eget quam libero. Nam at felis metus.
														Nam tellus dolor, tristique ac tempus nec, iaculis quis nisi.{' '}
													</p>
												</section>
												<h2>Second Step</h2>
												<section>
													<p>
														Donec mi sapien, hendrerit nec egestas a, rutrum vitae dolor.
														Nullam venenatis diam ac ligula elementum pellentesque. In
														lobortis sollicitudin felis non eleifend. Morbi tristique tellus
														est, sed tempor elit. Morbi varius, nulla quis condimentum
														dictum, nisi elit condimentum magna, nec venenatis urna quam in
														nisi. Integer hendrerit sapien a diam adipiscing consectetur. In
														euismod augue ullamcorper leo dignissim quis elementum arcu
														porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
														Vestibulum leo velit, blandit ac tempor nec, ultrices id diam.
														Donec metus lacus, rhoncus sagittis iaculis nec, malesuada a
														diam. Donec non pulvinar urna. Aliquam id velit lacus.{' '}
													</p>
												</section>
												<h2>Third Step</h2>
												<section>
													<p>
														{' '}
														Morbi ornare tellus at elit ultrices id dignissim lorem
														elementum. Sed eget nisl at justo condimentum dapibus. Fusce
														eros justo, pellentesque non euismod ac, rutrum sed quam. Ut non
														mi tortor. Vestibulum eleifend varius ullamcorper. Aliquam erat
														volutpat. Donec diam massa, porta vel dictum sit amet, iaculis
														ac massa. Sed elementum dui commodo lectus sollicitudin in
														auctor mauris venenatis.{' '}
													</p>
												</section>
												<h2>Forth Step</h2>
												<section>
													<p>
														{' '}
														Quisque at sem turpis, id sagittis diam. Suspendisse malesuada
														eros posuere mauris vehicula vulputate. Aliquam sed sem tortor.
														Quisque sed felis ut mauris feugiat iaculis nec ac lectus. Sed
														consequat vestibulum purus, imperdiet varius est pellentesque
														vitae. Suspendisse consequat cursus eros, vitae tempus enim
														euismod non. Nullam ut commodo tortor.{' '}
													</p>
												</section>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row clearfix">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Basic Example - Vertical Layout</h3>
										</div>
										<div className="card-body">
											<div id="wizard_vertical">
												<h2>First Step</h2>
												<section>
													<p>
														{' '}
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														ut nulla nunc. Maecenas arcu sem, hendrerit a tempor quis,
														sagittis accumsan tellus. In hac habitasse platea dictumst.
														Donec a semper dui. Nunc eget quam libero. Nam at felis metus.
														Nam tellus dolor, tristique ac tempus nec, iaculis quis nisi.{' '}
													</p>
												</section>
												<h2>Second Step</h2>
												<section>
													<p>
														{' '}
														Donec mi sapien, hendrerit nec egestas a, rutrum vitae dolor.
														Nullam venenatis diam ac ligula elementum pellentesque. In
														lobortis sollicitudin felis non eleifend. Morbi tristique tellus
														est, sed tempor elit. Morbi varius, nulla quis condimentum
														dictum, nisi elit condimentum magna, nec venenatis urna quam in
														nisi. Integer hendrerit sapien a diam adipiscing consectetur. In
														euismod augue ullamcorper leo dignissim quis elementum arcu
														porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
														Vestibulum leo velit, blandit ac tempor nec, ultrices id diam.
														Donec metus lacus, rhoncus sagittis iaculis nec, malesuada a
														diam. Donec non pulvinar urna. Aliquam id velit lacus.{' '}
													</p>
												</section>
												<h2>Third Step</h2>
												<section>
													<p>
														{' '}
														Morbi ornare tellus at elit ultrices id dignissim lorem
														elementum. Sed eget nisl at justo condimentum dapibus. Fusce
														eros justo, pellentesque non euismod ac, rutrum sed quam. Ut non
														mi tortor. Vestibulum eleifend varius ullamcorper. Aliquam erat
														volutpat. Donec diam massa, porta vel dictum sit amet, iaculis
														ac massa. Sed elementum dui commodo lectus sollicitudin in
														auctor mauris venenatis.{' '}
													</p>
												</section>
												<h2>Forth Step</h2>
												<section>
													<p>
														{' '}
														Quisque at sem turpis, id sagittis diam. Suspendisse malesuada
														eros posuere mauris vehicula vulputate. Aliquam sed sem tortor.
														Quisque sed felis ut mauris feugiat iaculis nec ac lectus. Sed
														consequat vestibulum purus, imperdiet varius est pellentesque
														vitae. Suspendisse consequat cursus eros, vitae tempus enim
														euismod non. Nullam ut commodo tortor.{' '}
													</p>
												</section>
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
const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(FormWizard);