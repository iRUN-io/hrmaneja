import React, { useState, useEffect, useMemo } from 'react'
import { getAllActivities } from '../../../services/activities'
import { getCompanyData, getUser } from '../../../config/common';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FeatureNotAvailable from '../../common/featureDisabled';
import EmptyState from '../../EmptyState';
const Activities = () => {
	const [activities, setActivities] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [ActivityPerPage] = useState(15);
	const [searchActivity, setSearchActivity] = useState('');
	const [loading, setLoading] = useState(false);
	const [featureEnabled, setFeatureEnabled] = useState(false);

	useEffect(() => {

		async function fetchData() {
			setLoading(true);
			const user = await getUser();
			if (user) {
				const company_id = user.company_id;
				const response = await getAllActivities(company_id);
				const companyData = await getCompanyData();
				companyData.settings?.features['activity'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
				setActivities(response);
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	const setSearch = (e) => {
		const { value } = e.target;
		setSearchActivity(value);
	};

	const getActivityBySearchQuery = (
		activities,
		searchQuery,
	) => {
		return activities.filter(activity =>
			activity.name.toLowerCase().includes(searchQuery.toLowerCase())
			|| activity.activity.toLowerCase().includes(searchQuery.toLowerCase())
			|| activity.user.toLowerCase().includes(searchQuery.toLowerCase())
			|| activity.activity_name?.toLowerCase().includes(searchQuery.toLowerCase())

		);
	};

	const allActivitiesArray = useMemo(() => {
		let allActivities = activities;
		if (searchActivity) {
			allActivities = getActivityBySearchQuery(allActivities, searchActivity);
		}

		return allActivities || [];
	}, [activities, searchActivity]);


	const indexOfLastActivity = currentPage * ActivityPerPage;
	const indexOfFirstActivity = indexOfLastActivity - ActivityPerPage;
	const currentActivity = allActivitiesArray.slice(indexOfFirstActivity, indexOfLastActivity);

	const paginate = pageNumber => setCurrentPage(pageNumber);
	const nextPage = () => setCurrentPage(currentPage + 1);
	const prevPage = () => setCurrentPage(currentPage - 1);

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(allActivitiesArray.length / ActivityPerPage); i++) {
		pageNumbers.push(i);
	}
	if (!featureEnabled && !loading) {
		return <FeatureNotAvailable />
	}
	return (
		<>
			<div>
				<div>
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center">
							<ul className="nav nav-tabs page-header-tab">
								<li className="nav-item">
									<Link to={'/admin/settings'} className="nav-link active">
										<i className="fa fa-arrow-left"></i>
									</Link>
								</li>
							</ul>
						</div>
						<div className="row clearfix">
							<div className="col-md-12">
								<div className="card table-card table-card">
									<div className="card-header">
										<h3 className="card-title">Timeline Activity</h3>
										<div className="card-options">
											<form>
												<div className="input-group">
													<input
														type="text"
														onChange={setSearch}
														value={searchActivity}
														className="form-control form-control-sm"
														placeholder="Search Activity..."
														name="" />
													<span className="input-group-btn ml-2">
														<button className="btn btn-icon" type="submit">
															<span className="fe fe-search" />
														</button>
													</span>
												</div>
											</form>
										</div>
									</div>
									{currentActivity.length === 0 && !loading ? (
                                        <EmptyState />
                                    ) : (
									<div className="card-body">
										{currentActivity.map((activity) => (
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
														{moment(activity.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
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
										<div className=''>
											<nav aria-label="Page navigation example">
												<ul className="pagination justify-content-end">
													<li className="page-item" style={{ marginRight: '5px' }}>
														<button className="btn btn-sm btn-primary" onClick={prevPage} disabled={currentPage === 1 ? true : false}><i className="fa fa-angle-double-left"></i></button>
													</li>
													{pageNumbers.map(number => (
														<li key={number} className="page-item" style={{ marginRight: '5px' }}>
															<button onClick={() => paginate(number)} className={currentPage === number ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'}>{number}</button>
														</li>
													))}
													<li className="page-item">
														<button className="btn btn-sm btn-primary" onClick={nextPage} disabled={currentPage === pageNumbers.length ? true : false}><i className="fa fa-angle-double-right"></i></button>
													</li>
												</ul>
											</nav>
										</div>
									</div>
									)}

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