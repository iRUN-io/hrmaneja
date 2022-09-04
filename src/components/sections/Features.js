/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Image from "../elements/Image";
import { Modal } from "react-bootstrap";
import PickyDateTime from 'react-picky-date-time';
import { toast, ToastContainer } from 'material-react-toastify';
import { sendEmail } from '../../services/mail/sendMail';
import { createSession } from '../../services/support';
import { SUPPORT_MAIL } from '../../config/config';
const Features = () => {
    const [showmodal, setShowModal] = useState(false);
    const currentDate = new Date(); 
    const [clockState, setClockState] = useState({
        showPickyDateTime: true,
        date: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        hour: currentDate.getHours(),
        minute: currentDate.getMinutes(),
        second: currentDate.getSeconds(),
        meridiem: currentDate.getHours() >= 12 ? 'PM' : 'AM',
        note: '',
        email: '',
      });
  
    const onYearPicked = (res) => {
      let { year } = res;
      setClockState({...clockState, year: year});
    }
  
    const onMonthPicked  = (res) => {
      let { month, year } = res;
      setClockState({ ...clockState, year: year, month: month});
    }
  
    const onDatePicked = (res) => {
      let { date, month, year } = res;
      setClockState({ ...clockState, year: year, month: month, date: date });
    }
  
    const onResetDate = (res) => {
      let { date, month, year } = res;
      setClockState({ ...clockState, year: year, month: month, date: date });
    }
  
    const onResetDefaultDate = (res) => {
      let { date, month, year } = res;
      setClockState({ ...clockState, year: year, month: month, date: date });
    }
  
    const onSecondChange = (res) => {
      setClockState({ ...clockState, second: res.value });
    }
  
    const onMinuteChange = (res) => {
      setClockState({ ...clockState, minute: res.value });
    }
  
    const onHourChange = (res) => {
      setClockState({ ...clockState, hour: res.value });
    }
  
    const onMeridiemChange = (res) => {
      setClockState({ ...clockState, meridiem: res });
    }
  
    const onResetTime = (res) => {
      setClockState({ 
        ...clockState,
        second: res.clockHandSecond.value,
        minute: res.clockHandMinute.value,
        hour: res.clockHandHour.value
      });
    }
  
    const onResetDefaultTime = (res) => {
      setClockState({
        ...clockState,
        second: res.clockHandSecond.value,
        minute: res.clockHandMinute.value,
        hour: res.clockHandHour.value
      });
    }
  
    const onClearTime = (res) => {
      setClockState({
        ...clockState,
        second: res.clockHandSecond.value,
        minute: res.clockHandMinute.value,
        hour: res.clockHandHour.value
      });
    }

    const updateForm = e => {
        const { name, value } = e.target;
        setClockState({
            ...clockState,
            [name]: value,
        })
      };

      const submitForm = async () => {
        const { date, month, year, hour, minute, second, meridiem, note, email } = clockState;
		try {
			const body = {
                date ,
                month,
                year,
                hour,
                minute,
                second,
                meridiem,
                note,
                email
			}
			if (email === '' || date === '' || month === '' || year === '' || hour === '' || minute === '' || second === '' || meridiem === '' || note === '') {
                toast.error('Please fill all the fields');
				return;
			}

            localStorage.setItem('bookingDetails', JSON.stringify(body));
			const response = await createSession(body);

			if (!response.error) {
                sendEmail('godfredakpan@gmail.com', 'Admin', 'createDemoSession');
                }
            toast.success("Demo booked successfully");
            localStorage.removeItem('bookingDetails');
            setShowModal(false);
			setClockState({
				showPickyDateTime: true,
                date: new Date().getDate() + 1,
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds(),
                meridiem: new Date().getHours() >= 12 ? 'PM' : 'AM',
                note: '',
                email: '',
			});
		} catch (err) {
			toast.error("Error, try again");
			setClockState({ ...clockState });
		}
	}; 

    return (
        <>
        <ToastContainer />
            <div className=' Features'>
                <div className=' hero-container fea-card'>
                    {/* <div className='section container hero '> */}
                    <p className='p-header'>All-In-One HR Software</p>
                    <p className='p-text'>This software is built for both small and large scale business owners and employees.</p>
                    {/* </div> */}
                </div>
                <div className=' features '>
                    {/* data card */}
                    <div className=' row features-card data-card '>

                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-1'>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>HR Data & Analysis</p>
                                <p className='text-tiny'>HR maneja provides access to organized data and analytics to help decision making and reports.</p>
                                <div className='hero-links'>
                                     <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1 order-lg-2'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >HR Data & Analysis</p>
                                <Image
                                    src={require("../../assets/images/home/analysis.svg")}
                                    alt="Open"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px" }}
                                />
                            </div>
                        </div>


                    </div>

                    {/* hiring card */}
                    <div className=' row features-card hiring-card '>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Hiring</p>
                                <Image
                                    src={require("../../assets/images/home/hiring.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Hiring</p>
                                <p className='text-tiny'>Our software helps to handle recruiting and selection process by tracking candidate information , enabling recruiter to match job openings to suitable candidates and successfully onboard these candidates.</p>
                                <div className='hero-links'>
                                     <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* file manager */}
                    <div className=' row features-card data-card '>


                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-1'>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>File Manager</p>
                                <p className='text-tiny'>Our software provides a comprehensive platform to store both large and small files for future purposes.</p>
                                <div className='hero-links'>
                                     <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1 order-lg-2'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >File Manager</p>
                                <Image
                                    src={require("../../assets/images/home/filemanager.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                    </div>
                    {/* compensation card */}
                    <div className=' row features-card hiring-card dark-card'>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Compensation</p>

                                <Image
                                    src={require("../../assets/images/home/compensate.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Compensation</p>

                                <p className='text-tiny'>With HR maneja , you can carefully allocate compensation and other benefits to your employees.</p>
                                <div className='hero-links'>
                                     <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* expense card */}
                    <div className=' row features-card data-card light-card'>

                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-1'>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Expense Management</p>
                                <p className='text-tiny'>
                                    HR maneja is built to help companies manage business funds and track expenses.</p>
                                <div className='hero-links'>
                                     <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1 order-lg-2'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Expense Management</p>

                                <Image
                                    src={require("../../assets/images/home/expense.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                    </div>
                    {/* learning card */}
                    <div className=' row features-card hiring-card light-card'>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Learning & Development</p>
                                <Image
                                    src={require("../../assets/images/home/learning.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Learning & Development</p>
                                <p className='text-tiny'>Team members are able to learn from resources and scheduled courses using the HR maneja.</p>
                                <div className='hero-links'>
                                     <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* performance */}
                    <div className=' row features-card data-card dark-card'>

                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-1'>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Performance Management</p>
                                <p className='text-tiny'>HR maneja helps to set and track tasks, Monitor and measure staff performance and delivery.</p>
                                <div className='hero-links'>
                                     <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1 order-lg-2 '>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Performance Management</p>

                                <Image
                                    src={require("../../assets/images/home/performance.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                    </div>
                    {/* contact card */}
                    <div className=' row features-card hiring-card dark-card'>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Contact Management</p>

                                <Image
                                    src={require("../../assets/images/home/contact.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Contact Management</p>
                                <p className='text-tiny'>
                                    HR maneja helps to store contact details of past and present staff. Chat Service : With HR maneja, team members can communicate effectively in groups and personally with each other.</p>
                                <div className='hero-links'>
                                     <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* holiday */}
                    <div className=' row features-card data-card light-card'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-16 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Event & Holiday</p>
                                <p className='text-tiny'>With HR maneja, you can carefully plan out work calendar including holiday trips, leaves and upcoming community events.</p>
                                <div className='hero-links'>
                                    <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> 
                                </div>
                                <div className="header-action">
                            </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Event & Holiday</p>

                                <Image
                                    src={require("../../assets/images/home/holiday.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                    </div>

                </div>

            </div>
             <Modal
                show={showmodal}
                onHide={() => setShowModal(false)}
                backdrop="static"
                title="Get Started Now"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="lg"
                style={{ width: "100%", borderRadius: "50px" }}
            >
                <Modal.Header title='Setup Demo' closeButton>
                </Modal.Header>
                <Modal.Body>
                <div className='text-center '>
                <h4>Book a demo session with us</h4>
                <PickyDateTime
                        size="m"// 'xs', 's', 'm', 'l'
                        mode={1} //0: calendar only, 1: calendar and clock, 2: clock only; default is 0
                        locale={`eng-us`}// 'en-us' or 'zh-cn'; default is en-us
                        show={true} //default is false
                        onClose={() => setClockState({ showPickyDateTime: false })} 
                        // defaultTime={`${clockState.hour}:${clockState.minute}:${clockState.second} ${clockState.meridiem}`} // OPTIONAL. format: "HH:MM:SS AM"
                        defaultDate={`${clockState.month}/${clockState.date}/${clockState.year}`} // OPTIONAL. format: "MM/DD/YYYY"
                        onYearPicked={res => onYearPicked(res)}
                        onMonthPicked={res => onMonthPicked(res)}
                        onDatePicked={res => onDatePicked(res)}
                        onResetDate={res => onResetDate(res)}
                        onResetDefaultDate={res => onResetDefaultDate(res)}
                        onSecondChange={res => onSecondChange(res)}
                        onMinuteChange={res => onMinuteChange(res)}
                        onHourChange={res => onHourChange(res)}
                        onMeridiemChange={res => onMeridiemChange(res)}
                        onResetTime={res => onResetTime(res)}
                        onResetDefaultTime={res => onResetDefaultTime(res)}
                        onClearTime={res => onClearTime(res)}
                    />
                    <div className="col-lg-10 col-md-10 mx-auto center">
                    <div className="form-group">
                        <label style={{float: 'left', marginTop: '10px'}}>Email: </label>
                        <input
                        style={{color: "black"}}
                        type={'email'}
                        name="email"
                        id="email"
                        value={clockState.email}
                        onChange={updateForm}
                        className="form-control"
                        placeholder=""
                        />
                    </div>
                    <div className="form-group">
                        <label style={{float: 'left', marginTop: '10px'}}>Note: </label>
                        <textarea
                        style={{color: "black"}}
                        name="note"
                        id="note"
                        value={clockState.note}
                        onChange={updateForm}
                        className="form-control"
                        placeholder=""
                        />
                    </div>
                    <button style={{marginTop: "10px"}} className="btn btn-primary" onClick={() => submitForm()}>Submit</button>
                    </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Features