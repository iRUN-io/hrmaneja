import React, { useState, useEffect } from 'react'
import { getAllActivities } from '../../../services/activities'
import { getUser } from '../../../config/common';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
const Activities = () => {
	const [activities, setActivities] = useState([]);
	const history = useHistory();
	useEffect(() => {
		async function fetchData() {
			const user = await getUser();
			if (user) {
				const company_id = user.company_id;
				const response = await getAllActivities(company_id);
				setActivities(response);
			}
		}
		fetchData();
	}, []);

	return (
		<>
			<div>
				<div>
					<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item">
                                <Link onClick={() => history.goBack()} className="nav-link active">
                                    <i className="fa fa-arrow-left"></i>
                                </Link>
                                </li>
                            </ul>
                        </div>
						<div className="row clearfix">
							<div className="col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Timeline Activity</h3>
									</div>
									<div className="card-body">
										{activities.map((activity) => (
											<div key={activity.id} className="timeline_item ">
												<img
													className="tl_avatar"
													src="../assets/images/xs/avatar1.jpg"
													alt="#"
												/>
												<span>
													<a href="#;">{activity.user}</a>
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