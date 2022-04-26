import React, { useState, useEffect } from 'react'
import { getAllActivities } from '../../../services/activities'
import { getUser } from '../../../config/common';
import Ckeditor from '../../common/ckeditor';
const Activities = () => {
	const [activities, setActivities] = useState([]);
			useEffect(() => {
				async function fetchData() {
					const user = await getUser();
					if(user){
						const userId = user.id;
						const response = await getAllActivities(userId);
						setActivities(response?.data);
					}
				}
				fetchData();
			}, []);
		return (
			<>
				{/* <link rel="stylesheet" href="../assets/plugins/summernote/dist/summernote.css" /> */}
				<div>
					<div>
						<div className="container-fluid">
							<div className="row clearfix">
								<div className="col-md-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Timeline Activity</h3>
										</div>
										<div className="card-body">
											<div className="summernote">
												<Ckeditor />
												Hello there,
												<br />
												<p>
													The toolbar can be customized and it also supports various callbacks
													such as <code>oninit</code>, <code>onfocus</code>,{' '}
													<code>onpaste</code> and many more.
												</p>
												<p>
													Please try <b>paste some texts</b> here
												</p>
											</div>
											<div className="timeline_item ">
												<img
													className="tl_avatar"
													src="../assets/images/xs/avatar1.jpg"
													alt="fake_url"
												/>
												<span>
													<a href="fake_url;">Elisse Joson</a> San Francisco, CA{' '}
													<small className="float-right text-right">
														20-April-2019 - Today
													</small>
												</span>
												<h6 className="font600">
													Hello, 'Im a single div responsive timeline without media Queries!
												</h6>
												<div className="msg">
													<p>
														I'm speaking with myself, number one, because I have a very good
														brain and I've said a lot of things. I write the best
														placeholder text, and I'm the biggest developer on the web card
														she has is the Lorem card.
													</p>
													<a href="fake_url;" className="mr-20 text-muted">
														<i className="fa fa-heart text-pink" /> 12 Love
													</a>
													<a
														className="text-muted"
														role="button"
														data-toggle="collapse"
														href="#collapseExample"
														aria-expanded="false"
														aria-controls="collapseExample"
													>
														<i className="fa fa-comments" /> 1 Comment
													</a>
													<div
														className="collapse p-4 section-gray mt-2"
														id="collapseExample"
													>
														<form className="well">
															<div className="form-group">
																<textarea
																	rows={2}
																	className="form-control no-resize"
																	placeholder="Enter here for tweet..."
																	defaultValue={''}
																/>
															</div>
															<button className="btn btn-primary">Submit</button>
														</form>
														<ul className="recent_comments list-unstyled mt-4 mb-0">
															<li>
																<div className="avatar_img">
																	<img
																		className="rounded img-fluid"
																		src="../assets/images/xs/avatar4.jpg"
																		alt="fake_url"
																	/>
																</div>
																<div className="comment_body">
																	<h6>
																		Donald Gardner{' '}
																		<small className="float-right font-14">
																			Just now
																		</small>
																	</h6>
																	<p>
																		Lorem ipsum Veniam aliquip culpa laboris minim
																		tempor
																	</p>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="timeline_item ">
												<img
													className="tl_avatar"
													src="../assets/images/xs/avatar4.jpg"
													alt="fake_url"
												/>
												<span>
													<a href="fake_url">Dessie Parks</a> Oakland, CA{' '}
													<small className="float-right text-right">
														19-April-2019 - Yesterday
													</small>
												</span>
												<h6 className="font600">Oeehhh, that's awesome.. Me too!</h6>
												<div className="msg">
													<p>
														I'm speaking with myself, number one, because I have a very good
														brain and I've said a lot of things. on the web by far... While
														that's mock-ups and this is politics, are they really so
														different? I think the only card she has is the Lorem card.
													</p>
													<div className="timeline_img mb-20">
														<img
															className="width100"
															src="../assets/images/gallery/1.jpg"
															alt="Awesome"
														/>
														<img
															className="width100"
															src="../assets/images/gallery/2.jpg"
															alt="Awesome"
														/>
													</div>
													<a href="fake_url;" className="mr-20 text-muted">
														<i className="fa fa-heart text-pink" /> 23 Love
													</a>
													<a
														className="text-muted"
														role="button"
														data-toggle="collapse"
														href="#collapseExample1"
														aria-expanded="false"
														aria-controls="collapseExample1"
													>
														<i className="fa fa-comments" /> 2 Comment
													</a>
													<div
														className="collapse p-4 section-gray mt-2"
														id="collapseExample1"
													>
														<form className="well">
															<div className="form-group">
																<textarea
																	rows={2}
																	className="form-control no-resize"
																	placeholder="Enter here for tweet..."
																	defaultValue={''}
																/>
															</div>
															<button className="btn btn-primary">Submit</button>
														</form>
														<ul className="recent_comments list-unstyled mt-4 mb-0">
															<li>
																<div className="avatar_img">
																	<img
																		className="rounded img-fluid"
																		src="../assets/images/xs/avatar4.jpg"
																		alt="fake_url"
																	/>
																</div>
																<div className="comment_body">
																	<h6>
																		Donald Gardner{' '}
																		<small className="float-right font-14">
																			Just now
																		</small>
																	</h6>
																	<p>
																		Lorem ipsum Veniam aliquip culpa laboris minim
																		tempor
																	</p>
																	<div className="timeline_img mb-20">
																		<img
																			className="width150"
																			src="../assets/images/gallery/7.jpg"
																			alt="Awesome"
																		/>
																		<img
																			className="width150"
																			src="../assets/images/gallery/8.jpg"
																			alt="Awesome"
																		/>
																	</div>
																</div>
															</li>
															<li>
																<div className="avatar_img">
																	<img
																		className="rounded img-fluid"
																		src="../assets/images/xs/avatar3.jpg"
																		alt="fake_url"
																	/>
																</div>
																<div className="comment_body">
																	<h6>
																		Dessie Parks{' '}
																		<small className="float-right font-14">
																			1min ago
																		</small>
																	</h6>
																	<p>
																		It is a long established fact that a reader will
																		be distracted by the readable content of a page
																		when looking
																	</p>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="timeline_item ">
												<img
													className="tl_avatar"
													src="../assets/images/xs/avatar7.jpg"
													alt="fake_url"
												/>
												<span>
													<a href="fake_url">Rochelle Barton</a> San Francisco, CA{' '}
													<small className="float-right text-right">12-April-2019</small>
												</span>
												<h6 className="font600">
													An Engineer Explains Why You Should Always Order the Larger Pizza
												</h6>
												<div className="msg">
													<p>
														I'm speaking with myself, number one, because I have a very good
														brain and I've said a lot of things. I write the best
														placeholder text, and I'm the biggest developer on the web by
														far... While that's mock-ups and this is politics, is the Lorem
														card.
													</p>
													<a href="fake_url;" className="mr-20 text-muted">
														<i className="fa fa-heart text-pink" /> 7 Love
													</a>
													<a
														className="text-muted"
														role="button"
														data-toggle="collapse"
														href="#collapseExample2"
														aria-expanded="false"
														aria-controls="collapseExample2"
													>
														<i className="fa fa-comments" /> 1 Comment
													</a>
													<div
														className="collapse p-4 section-gray mt-2"
														id="collapseExample2"
													>
														<form className="well">
															<div className="form-group">
																<textarea
																	rows={2}
																	className="form-control no-resize"
																	placeholder="Enter here for tweet..."
																	defaultValue={''}
																/>
															</div>
															<button className="btn btn-primary">Submit</button>
														</form>
													</div>
												</div>
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

export default Activities;