import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUser } from '../../../config/common';
import { getHolidays } from '../../../services/setting';
import Loader from '../../common/loader';

const Holidays = () => {
	const [loading, setLoading] = useState(false);
	const [, setUser] = useState({});
	const [holidays, setHolidays] = useState([]);
    const history = useHistory();
	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const user = await getUser();
			if (user) {
				const holiday = await getHolidays('NG', '2022');
				setHolidays(holiday);
				setLoading(false);
				setUser(user)
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <Loader />
	}
	

	// if date is in the past, add a class to it
	const isPast = (date) => {
		const today = moment().format('YYYY-MM-DD');
		return moment(date).isBefore(today);
	}

	return (
		<>
			<div className={`section-body`}>
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<ul className="nav nav-tabs page-header-tab">
							<li className="nav-item">
							<Link to={'/'} className="nav-link active">
							<i className="fa fa-arrow-left"></i>
							</Link>
							</li>
						</ul>

					</div>
				</div>
			</div>
			<div>
				<div className={`section-body`}>
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-body">
										<div className="table-responsive">
											<table className="table table_custom spacing5 border-style mb-0">
												<thead>
													<tr>
														<th>DAY</th>
														<th>DATE</th>
														<th>HOLIDAY</th>
													</tr>
												</thead>
												<tbody>
													{holidays?.map((holiday, index) => (
														<>
															{isPast(holiday.date) ? (
																<tr key={index} className="disabled-card">
																	<td>
																		<span>{moment(holiday.date).format('dddd')}</span>
																	</td>
																	<td>
																		<span>{moment(holiday.date).format('MMM Do YYYY')}</span>
																	</td>
																	<td>
																		<span>{holiday.name}</span>
																	</td>
																</tr>
															) : (
																<tr key={index}>
																	<td>
																		<span>{moment(holiday.date).format('dddd')}</span>
																	</td>
																	<td>
																		<span>{moment(holiday.date).format('MMM Do YYYY')}</span>
																	</td>
																	<td>
																		<span>{holiday.name}</span>
																	</td>
																</tr>
															)}
														</>
													))}
												</tbody>
											</table>
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

export default Holidays;
