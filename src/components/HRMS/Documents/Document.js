import React, { useState, useEffect } from 'react';
import { toast } from 'material-react-toastify';
import EmptyState from '../../EmptyState';
import { Link, useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { getUser } from '../../../config/common';
import { getAllUsers } from '../../../services/user';
import { getAllEmployees } from '../../../services/employee';


const Documents = () => {
    const [currentUser, setCurrentUser] = useState([]);
	const [userData, setUserData] = useState([]);
	const [users, setUsers] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
    const [UserPerPage] = useState(10);
	const [loading, setLoading] = useState(false);
	

	
	const history = useHistory();


	const updateForm = (e) => {
		const { value, name } = e.target;
		if (name === 'employeeID') {
			const userExists = users.find(user => user.employee_id === value);
			if (userExists) {
				toast.error('User already created for selected employee');
				return;
			}
		}
		setFormState({
			...formState,
			[name]: value,
		})
		console.log({ [name]: value })
	}

	const removeUser = async (userId) => {
		try {
			const response = await deleteUser(userId);
			if (response.message) {
				const newUsers = users.filter(user => user.id !== userId);

				// create activity
				const logUser = await createActivity(
					{
						name: 'Delete User',
						employee_id: currentUser.id,
						activity: `${currentUser.name} Deleted a User with name; ${response.name}`,
						activity_name: 'Deletion',
						user: currentUser.name,
						company_id: currentUser.company_id,
					}
				)

				if (logUser.id) {
					sendEmail(currentUser.emailAddress, currentUser.name, emailCase.deleteUser);
					setUsers(newUsers);
					toast.info(response.message);
				}
			}

		} catch (err) {
			toast.error("Error, try again");
			setFormState({ ...formState });

		};

	};

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const user = await getUser();
			if (user) {
				const company_id = user.company_id;
				const response = await getAllUsers(company_id);
				const employeeResponse = await getAllEmployees(company_id);
				setUsers(response);
				setEmployees(employeeResponse);
				setCurrentUser(user)
				setLoading(false);
			}
		}
		fetchData();
	}, []);
	const indexOfLastUser = currentPage * UserPerPage;
    const indexOfFirstUser = indexOfLastUser - UserPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / UserPerPage); i++) {
        pageNumbers.push(i);
    }

	return (
		<>
			<div>
				<div className='container'>
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center">
							<ul className="nav nav-tabs page-header-tab">
								<li className="nav-item">

									<Link to={'/admin/settings'} className="nav-link active">
										<i className="fa fa-arrow-left"></i>
									</Link>
								</li>
							</ul>
							<div className="header-action">
								<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section-body mt-3">
					<div className="container-fluid">
						<div className="tab-content mt-3">
							<div className="tab-pane fade show active" id="user-list" role="tabpanel">
								<div className="card table-card">
									<div className="card-header">
										<h3 className="card-title">User List</h3>
										<div className="card-options">
											<form>
												<div className="input-group">
													<input
														type="text"
														className="form-control form-control-sm"
														placeholder="Search something..."
														name="s"
													/>
													<span className="input-group-btn ml-2">
														<button className="btn btn-sm btn-default" type="submit">
															<span className="fe fe-search" />
														</button>
													</span>
												</div>
											</form>
										</div>
									</div>
									{currentPage.length === 0 && !loading ? (
										<EmptyState/>
										) : (
									<div className="card-body">
										<div className="table-responsive">
											{loading ? (
												<Skeleton count={4} height={50} />
											) : (
												<>
													<table className="table table-striped table-hover table-vcenter text-nowrap mb-0">
														<thead>
															<tr>
																<th className="w60">Name</th>
																<th />
																<th>Role</th>
																<th>Phone</th>
																<th>Created Date</th>
																<th className="w100">Action</th>
															</tr>
														</thead>
														<tbody>
															{currentUsers.map((user) => (
																<tr key={user.id}>
																	<td className="width45">
																		<span
																			className="avatar avatar-blue"
																			data-toggle="tooltip"
																			data-placement="top"
																			data-original-title="Avatar Name"
																		>
																			{user.name.charAt(0)}
																		</span>
																	</td>
																	<td>
																		<h6 className="mb-0">{user.name}</h6>
																		<span>{user.email}</span>
																	</td>
																	<td>
																		<span className="tag tag-danger">{user.role}</span>
																	</td>
																	<td>{user.phone}</td>

																	<td>{formatDate(user.createdAt)}</td>
																	<td>

																		{user.id !== currentUser.id ? (
																			<td>
																				<button
																					data-toggle="modal" data-target="#editModal"
																					type="button"
																					className="btn btn-icon"
																					title="Edit"
																					onClick={() => setUserData(user)}
																				>
																					<i className="fa fa-edit" />
																				</button>
																				<OverlayTrigger trigger="focus" placement="bottom" delay={1}
																					overlay={
																						<Popover id="popover-basic">
																							<Popover.Header as="p">Confirm Delete</Popover.Header>
																							<Popover.Body>
																								<div className="clearfix" >
																									<button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
																									<button style={{ margin: '10px' }} onClick={() => removeUser(user.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
																								</div>
																							</Popover.Body>
																						</Popover>
																					}>
																					<button type="button" className="btn btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
																				</OverlayTrigger>
																			</td>
																		) : (
																			<td />
																		)}
																	</td>
																</tr>
															))}


														</tbody>
													</table>
												</>
											)}
										</div>
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

export default Documents;