/* eslint-disable jsx-a11y/anchor-is-valid */
import { toast } from 'material-react-toastify';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { sendEmail } from '../../services/mail/sendMail';
import { createSession } from '../../services/support';
import Image from "../elements/Image";
import PickyDateTime from 'react-picky-date-time';

const NewHero = () => {
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
    <div className='container-fluid hero-container'>
      <div className='section container hero '>
        <div className='align-items-center row px-10'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <p className='text-large'>The intelligent <br /> way to manage <br /> employees.</p>
            <p className='text-small'>Get access to effectively manage your business, resources and staff at your comfort . Less stress, More productivity.</p>
            <div className='hero-links'>
                <a onClick={() => setShowModal(true)} className="btn btn-lg btn-hero-1 btn-outline">
                  Start Free Trial
                </a>
                <a onClick={() => setShowModal(true)} className="btn btn-lg btn-outline btn-hero-2">
                  Learn More
                </a>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="section-title">
              <Image
                src={require("../../assets/images/home/hero.png")}
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

export default NewHero