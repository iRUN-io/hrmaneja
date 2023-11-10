import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCompanyData, getUser } from "../../../config/common";
import Skeleton from "react-loading-skeleton";
import {Link, useHistory, useParams} from 'react-router-dom'
import moment from "moment";
import { getEmployeeReport } from "../../../services/report";
import Time from "../../elements/Time";
import html2pdf from 'html2pdf.js'

function ReportDoc(props) {
    const {fixNavbar} = props;
    const { location } = props;
    const { state } = location;
    const reportData = state.reportData; 
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [companyData, setCompanyData] = useState({})
    // const [report, setReport] = useState({});
    const [user, setUser] = useState({});
    const [featureEnabled, setFeatureEnabled] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const companyData = await getCompanyData();
				companyData.settings?.features['reports'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                // const report = await getEmployeeReport(id);
                // setReport(report);
                setCompanyData(companyData)
                setUser(user)
                setLoading(false);
                
            }
        }
        fetchData();
    }, []);

    const readableDate = (date) => {
        return Time(date);
    }

    // const handlePrint = () => {
    //     // e.preventDefault();
    //     const element = document.getElementById('reportContent');
    //     const opt = {
    //       margin:       10,
    //       filename:     `${moment(reportData?.from).format('MMM Do YYYY')} To ${moment(reportData?.to).format('MMM Do YYYY')}.pdf`,
    //       image:        { type: 'jpeg', quality: 0.98 },
    //       html2canvas:  { scale: 2 },
    //       jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    //     };
      
    //     html2pdf(element, opt)
    //     .then(() => console.log("PDF generation complete."))
    //     .catch(error => console.error("Error generating PDF:", error));
    //   };

    const handlePrint = () => {
        const content = document.getElementById('reportContent').innerHTML;
    
        const newWindow = window.open();
        newWindow.document.write('<html><head><title>Print</title>');
    
        // Add styles to center content
        newWindow.document.write('<style>');
        newWindow.document.write(`
    
    
            #printContainer {
                width: 210mm; /* A4 width */
                margin: auto;
                text-align: left;
            }
    
            #reportContent {
                padding: 20px; /* Adjust as needed */
                border: 1px solid #000; /* Optional border for clarity */
            }
    
            h2, .info {
                text-align: center;
            }
        `);
        newWindow.document.write('</style></head><body>');
    
        newWindow.document.write('<div id="printContainer">');
    
        newWindow.document.write(content);
    
        newWindow.document.write('</div>');
    
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        newWindow.print();
    };
    
    return (
        <>
                        <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                            <div className="container-fluid">
                                <div className="d-flex justify-content-between align-items-center">
                                    <ul className="nav nav-tabs page-header-tab">
                                        <li className="nav-item">

                                            <Link to={'/admin/hr-report'} className="nav-link active">
                                                <i className="fa fa-arrow-left"></i>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="section-body mt-3">
                            <div className="container-fluid">
                                <div className="tab-content mt-3">
                                    <div id="Payroll-Payslip" role="tabpanel">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media mb-4">
                                                    <div className="media-body">
                                                        <div className="content">
                                                            <div id="reportContent"><div className="text-center"><h2>Weekly Activity Report</h2></div>
                                                            <div className="body"><div>
                                                                <strong>Report Date</strong> <br/>
                                                                <small>{moment(reportData?.from).format('MMM Do YYYY')} To {moment(reportData?.to).format('MMM Do YYYY')}</small>
                                                            </div><br/>
                                                            <div>
                                                                <strong>Name of Team Member</strong> <br/>
                                                                <small>{reportData.team_member}</small>
                                                            </div><br/>
                                                            <div>
                                                                <strong>Designation</strong> <br/>
                                                                <small>{reportData.designation}</small>
                                                            </div><br/>
                                                            <div>
                                                                <strong>Report Summary</strong> <br/>
                                                                <small>{reportData.report_summary}</small>
                                                            </div><br/>
                                                            <div>
                                                                <strong>Outline of accomplished and in-progress tasks</strong> <br/>
                                                                <small>{reportData.tasks}</small>
                                                            </div><br/>
                                                            <div>
                                                                <strong>Weekly Outcomes</strong> <br/>
                                                                <small>{reportData.weekly_outcomes}</small>
                                                            </div><br/>
                                                            <div>
                                                                <strong>Challenges and Implemented Solutions</strong> <br/>
                                                                <small>{reportData.weekly_challenges}</small>
                                                            </div><br/>
                                                            <div>
                                                                <strong>Fture Overview</strong> <br/>
                                                                <small>{reportData.report_overview}</small>
                                                            </div><br/>
                                                            <div className="info text-center"><big>{companyData.name} | {companyData.registered_company_number} | email: <a href={`mailto:${companyData.email}`}>{companyData.email}</a></big></div><br/></div>
                                                            
                                                            </div>
                                                            
                                                        </div>
                                                        <nav className="d-flex text-muted">
                                                            <a href="" className="icon mr-3" >
                                                                <i className="icon-envelope text-info" />
                                                            </a>
                                                            <a href="" className="icon mr-3" onClick={(e) => handlePrint(e)} target="_blank" rel="noopener noreferrer">
                                                                <i className="icon-printer" />
                                                            </a>
                                                        </nav>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
        
    )
}

const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(ReportDoc);