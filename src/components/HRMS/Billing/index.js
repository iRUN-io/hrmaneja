import React, { useEffect, useState } from 'react';

import {  getUser } from "../../../config/common";

import { getAllBillings } from '../../../services/billing';
import ComingSoon from '../../common/comingSoon';
import Loader from '../../common/loader';
import Subscribe from '../../common/subscribe';
import { useHistory } from 'react-router-dom';


const Billing = () => {
	const [billings, setBillings] = useState([]);
	const user = getUser();
	const [billingExists, setBillingExists] = useState(false);
	const [loading, setLoading] = useState(false);
	const isAdmin = user?.role === "HR Manager";
	const comingSoon = false;

	const history = useHistory();
	

	useEffect(() => {

		async function fetchData() {
			setLoading(true);
			const user = await getUser();
			if (user) {
				const company_id = user.company_id;
				const response = await getAllBillings(company_id);
				const currentMonth = new Date().getMonth();
				const currentYear = new Date().getFullYear();
				if (response?.length > 0) {
					const billingMonth = new Date(response[0]?.createdAt).getMonth();
					const billingYear = new Date(response[0]?.createdAt).getFullYear();
					if (currentMonth === billingMonth && currentYear === billingYear) {
						setBillingExists(true);
					}
				}
				setBillings(response);
				setLoading(false);
			}
		}
		fetchData();
	}, []);
	


	if (loading) {
		return <Loader />
	}

	if (comingSoon) {
		return <ComingSoon />
	}

	if (!billingExists) {
		return <Subscribe />
	}


	const viewBilling = (id) => {
		history.push(`/admin/billing-receipt/${id}`);
	}

	// get next billing date
	const getNextBillingDate = () => {
		const currentBillingDate = new Date(billings[0]?.createdAt);
		const nextBillingDate = new Date(currentBillingDate.setMonth(currentBillingDate.getMonth() + 1));
		return `${nextBillingDate.getDate()} ${nextBillingDate.toLocaleString('default', { month: 'long' })}`;
	}
	

	return (
		<>
			<div>
				<div className={`section-body  mt-3`}>
					{isAdmin && (
						<>
							<div className="container-fluid" style={{ marginTop: '20px' }}>
								<div className="row clearfix">
									<div className="col-lg-12">
										<div className={`mb-4`}>
											<h6>
												Billing Details{' '}
											</h6>
											<small>Have visibility of your billing information</small>
										</div>
									</div>
								</div>
								
								
								<div className="row clearfix">
									{billings.map((billing) => (
										<>
										<div className="card ">
											<div className="row">
												
												<div className="col-6">
													<div className="">
														<div className="card-body">
															
															<p></p>
															<h3>Zenith Bank</h3>
															<h5>4022651865</h5>
															<h5>$ 250</h5>
															<div className='upgrade-button'>
																<button className="btn btn-default card-blue btn-sm">Fund Account</button>
															</div>
														</div>
													</div>
												</div>
												<div className="col-6 wallet-card">

												</div>
											</div>
										</div>
											
										<div key={billing._id} className="col-6 col-md-4 col-xl-6">
											<div className="card  more-cards card-blue">
												<div className="card-body">
													<div className='card-icon card-icon-white' style={{ float: 'right' }}>
														<h5 className="mb-0 font-weight-bold" style={{ color: '#4356A5' }}><i className='fe fe-star'></i></h5>
													</div>
													<p></p>
													<h3>${billing.amount}</h3>
													<h5>{billing.plan}</h5>
													<div className='upgrade-button'>
														<button className="btn btn-default disabled btn-sm">Upgrade</button>
													</div>
												</div>
											</div>
										</div>

										<div className="col-6 col-md-4 col-xl-6">
										<div className="card next-plan-card  more-cards card-white">

											<div className="card-body">
												<div className='card-icon card-icon-white' style={{ float: 'right' }}>
													<h5 className="mb-0 font-weight-bold" style={{ color: '#4356A5' }}><i className='fe fe-credit-card'></i></h5>
												</div>
												<p>Next Payment</p>
												<h3>${billing.amount}</h3>
												<h5>on {getNextBillingDate()}</h5>
												<div className='upgrade-button'>
													<button className="btn btn-dark disabled btn-sm">Manage Payments</button>
												</div>
											</div>
										</div>
										</div>

										

										{/* test table */}
										<div className="card ">
											<div className="row">
												
											<div className=' col-6'>
											
											<div className='card-header'>Transaction history</div>
												<div className="card-body">
													<div className="table-responsive">
														<table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
															<thead>
																<tr>
																	<th>Amount</th>
																	<th>Plan</th>
																	<th>Date</th>
																	<th>Paid By</th>
																	<th>Status</th>
																	<th>Action</th>
																</tr>
															</thead>
															<tbody>
																{billings.map((billing) => (
																	<tr key={billing.id}>
																		<td>${billing.amount}</td>
																		<td>{billing.plan}</td>
																		<td>Nov 2022</td>
																		<td>{billing.paidBy}</td>
																		<td>{billing.status}</td>
																		<td>
																			<button 
																				type="button"
																				className="btn btn-icon "
																				title="Print"
																				data-toggle="tooltip"
																				data-placement="top"
																				onClick={() => viewBilling(billing.id)}
																			>
																			<i className="icon-printer" />

																			</button>
																		</td>
																	</tr>
																))}
																
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<div className=' col-6'>
											
											<div className='card-header'>Payment history</div>
												<div className="card-body">
													<div className="table-responsive">
														<table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
															<thead>
																<tr>
																	<th>Amount</th>
																	<th>Plan</th>
																	<th>Date</th>
																	<th>Paid By</th>
																	<th>Status</th>
																	<th>Action</th>
																</tr>
															</thead>
															<tbody>
																{billings.map((billing) => (
																	<tr key={billing.id}>
																		<td>${billing.amount}</td>
																		<td>{billing.plan}</td>
																		<td>Nov 2022</td>
																		<td>{billing.paidBy}</td>
																		<td>{billing.status}</td>
																		<td>
																			<button 
																				type="button"
																				className="btn btn-icon "
																				title="Print"
																				data-toggle="tooltip"
																				data-placement="top"
																				onClick={() => viewBilling(billing.id)}
																			>
																			<i className="icon-printer" />

																			</button>
																		</td>
																	</tr>
																))}
																
															</tbody>
														</table>
													</div>
												</div>
											</div>
											
																								

											</div>
										</div>
									</>

									))}
									
									
									
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default Billing;