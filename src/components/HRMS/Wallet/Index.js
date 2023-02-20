/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Loader from '../../common/loader.js';
import { formatMoney, getCompanyData, getUser } from '../../../config/common.js';
import { createActivity } from '../../../services/activities.js';
import { createBankAccount, getAccountBalance, getAccountTransactions } from '../../../services/flutterwave.js';
import { sendEmail } from '../../../services/mail/sendMail.js';
import { emailCase } from '../../../enums/emailCase.js';
import { toast } from 'material-react-toastify';
import EmptyState from '../../EmptyState/index.js';
import moment from 'moment';

const Wallet = () => {

    const [company, setCompany] = useState({});

    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(false);

    const [balance, setBalance] = useState();

    const [transactions, setTransactions] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [transactionsPerPage] = useState(10);

    const id = window.location.pathname.split('/')[3];

    const history = useHistory();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const companyData = await getCompanyData();
            const balance = await getAccountBalance(companyData.bankAccount.account_ref);
            const transactions = await getAccountTransactions(companyData.bankAccount.account_ref);
            const userData = await getUser(id);
            setUser(userData);
            setBalance(balance.data);
            setTransactions(transactions.data.transactions);
            setCompany(companyData);
            setLoading(false);
        }
        fetchData();
    }, [id]);



    const createSubAccount = async () => {
        const body = {
            account_name: company.name,
            email: company.email,
            mobilenumber: company.email,
            country: "NG",
            companyId: company.id
        }
        const response = await createBankAccount(body);

        if (response.status === 'success') {
            const logLeave = await createActivity(
                {
                    name: 'Create Wallet',
                    employee_id: user.employee_id,
                    activity: `${user.name} Created a wallet account ; ${response.nuban}`,
                    activity_name: 'Creation',
                    user: user.name,
                    company_id: user.company_id,
                }
            )

            if (logLeave.id) {
                sendEmail(user.emailAddress, user.name, emailCase.walletAccountCreated);
                toast.success("Account created successfully");
            }
        }
        toast.info(response.message);
    }



    const indexOfLastTransactions = currentPage * transactionsPerPage;
    const indexOfFirstTransactions = indexOfLastTransactions - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransactions, indexOfLastTransactions);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(transactions.length / transactionsPerPage); i++) {
        pageNumbers.push(i);
    }



    if (loading) {
        return <Loader />
    }

    console.log('balance', transactions)

    return (
        <>
            <div>
                <div className={`section-body mt-3`} style={{ marginBottom: '50px' }}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link active">
                                        <i className="fa fa-arrow-left"></i>
                                    </Link>
                                </li>
                            </ul>
                            <div className="header-action">
                                {/* <span className="nav-item badge badge-primary">{company.name} </span> */}
                            </div>

                        </div>

                        <div className="row clearfix">
                            {!company.bankAccount ? (
                                <div className={`col-12 col-md-12 col-xl-12`}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <p>You currently do not have a wallet in the system, click below to generate a new one for your company</p>
                                                    <button onClick={() => createSubAccount()} type="button" className="btn btn-success btn-lg">
                                                        Create Wallet Account
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <><div className={`col-6 col-md-6 col-xl-6`}>
                                    <div className="card feature-card">
                                        <div className="card-body ribbon">
                                            <h5>Available Balance {formatMoney(balance?.available_balance)}</h5>
                                            <p>Ledger Balance {formatMoney(balance?.ledger_balance)}</p>
                                            <button onClick={() => history.push('#')} type="button" className="btn disabled btn-success btn-lg">
                                                Fund Account
                                            </button>
                                        </div>
                                    </div>
                                </div><div className={`col-6 col-md-6 col-xl-6`}>
                                        <div className="card feature-card">
                                            <div className="card-body ribbon">
                                                <Link to={'#'} className=" text-muted">
                                                    <p>Bank: <span className='text-info'>{company.bankAccount.bank_name}</span></p>
                                                    <p>Account Number: <span className='text-info'>{company.bankAccount.account_number}</span></p>
                                                    <p>Account Name: <span className='text-info'>{company.bankAccount.account_name}</span></p>

                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}


                        </div>

                        {currentTransactions?.length === 0 ? (
                            <EmptyState />
                        ) : (
                            <div className="card card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped table-vcenter text-nowrap">
                                        <thead>
                                            <tr>
                                                <th className="w200">Amount</th>
                                                <th className="w200">Type</th>
                                                <th className="w60">Remarks</th>
                                                <th className="w200">Balance Before</th>
                                                <th className="w200">Balance After</th>
                                                <th className=''>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {currentTransactions.map((transaction, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <span className='text-primary'>{transaction.amount}</span>
                                                    </td>
                                                    <td>
                                                        {transaction.type === 'D' ? (
                                                        <span className='text-danger'>Debit</span>
                                                        ):(
                                                        <span className='text-success'>Credit</span>
                                                        )}
                                                    </td>

                                                    <td>{transaction.remarks}</td>
                                                    <td>{transaction.balance_before}</td>
                                                    <td>{transaction.balance_after}</td>
                                                    <td>
														<span className="tag tag-secondary ml-0 mr-0">{moment(transaction.date).format('MMM Do YYYY')}</span>
													</td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
        </>
    );
}
export default Wallet;
