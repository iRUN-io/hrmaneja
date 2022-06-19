import React, { useState, useEffect } from 'react'
import { getAllActivities } from '../../../services/activities'
import { getUser } from '../../../config/common';
import moment from 'moment';
// import Ckeditor from '../../common/ckeditor';
const Activities = () => {
	const [activities, setActivities] = useState([]);
			useEffect(() => {
				async function fetchData() {
					const user = await getUser();
					if(user){
						const response = await getAllActivities();
						setActivities(response);
					}
				}
				fetchData();
			}, []);

			console.log(activities);

			// get user by id

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
											{/* <div className="summernote">
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
											</div> */}
											{/* map activities */}
											{activities.map((activity) => (
											<div key={activity.id} className="timeline_item ">
												<img
													className="tl_avatar"
													src="../assets/images/xs/avatar1.jpg"
													alt="fake_url"
												/>
												<span>
													<a href="fake_url;">{activity.user}</a>
													<small className="float-right text-right">
														<i className="fa fa-clock-o" /> 
														{moment(activity.created_at).format('MMMM Do YYYY, h:mm:ss a')}
													</small>
												</span>
												<h6 className="font600">
													{activity.activity_name}
												</h6>
												<div className="msg">
													<p>
														{activity.activity}
													</p>
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
											))}

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