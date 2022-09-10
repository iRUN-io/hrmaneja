/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getCompanyData } from '../../../config/common';

const Features = () => {
    const [company, setCompany] = useState({});

    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const response = await getCompanyData();
            if (response) {
                setCompany(response);
            }
        }
        fetchData();
    }, []);

    const icons = [
        {
            icon: 'fas fa-users',
            name: 'expense',
        },
        {
            icon: 'fas fa-money',
            name: 'payroll',
        },
    ]

    const features = Object.keys(company.settings?.features || []).map((key) => {
        const icon = icons.find((icon) => icon.name === key);
        return { name: key, value: company.settings?.features[key], icon: icon?.icon };
    });


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
							
						</div>
					</div>
				</div>
                <div className={`section-body mt-3`}>
                    <div className="container-fluid features ">

                        <div className='d-flex justify-content-between '>
                            <div className=" ">
                                <p className='text'>All Features</p>
                            </div>
                        </div>
                        <div className="row clearfix ">
                            {features.map((feature, index) => (
                                <div key={index} className="col-6 col-md-4 col-xl-3 ">
                                    <Link to="#" className="text-muted text-white text-bold">
                                        <div className={`card ${feature.value ? "card-hrmaneja" : "card-hrmaneja disabled-card"}`}>
                                            <div className="card-body">
                                            <span className='text-md' style={{ fontSize: '12px' }}>{feature.name.charAt(0).toUpperCase() + feature.name.slice(1).replace(/([A-Z])/g, ' $1').trim()}</span>
                                                <i style={{ float: 'right' }} className={`fa ${feature.value ? " fa-check" : "fa-times"}`} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}


                        </div>

                    </div>


                </div>
            </div>
        </>
    )
};


export default Features