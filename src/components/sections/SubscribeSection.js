import React, { useState } from "react";
import { subscribe } from "../../services/support";

const Subscribtion = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const subscribeAction = async () => {
    try {
      if (email === '') {
        setError('Please fill all the fields');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('Please enter valid email');
        return;
      }
      const response = await subscribe({ email: email });

      if (response.data.id) {
        setSuccess("You have successfully subscribed");
      }

      setEmail('');
    } catch (err) {
      setError("Error occured / User already subscribed !");
      setEmail(email)
    }
  };

  setTimeout(() => {
    setError('');
    setSuccess('');
  }, 10000);

  const updateEmail = (e) => {
    const { value } = e.target;
      setEmail(value.toLowerCase());
    };

  return (
    <section
      className=" overflow-hidden"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="text-center col-md-12  footer">
          <h3 className="heading mb-3">Subscribe to our Newsletter</h3>
          <h5 className="mx-auto" style={{ fontWeight: "200", width: "50%", fontSize:'1rem' }}>
          Subscribe to our email list and receive premium tips, amazing discounts and offers.
          </h5>
        </div>
        {error && <div className="alert alert-warning" role="alert">{error}</div>}
        {success && <div className="alert alert-success" role="alert">{success}</div>}
        <div style={{ }} className= "row height-100 d-flex justify-content-center align-items-center ">
          <div className="col-md-5">
            <div className="search position-relative">
              <input onChange={updateEmail} name="email" value={email} className="form-control" placeholder="Enter your email address"></input>
                <button onClick={() => subscribeAction()} style={{ borderRadius: "7px" }} className="btn btn-hrmaneja position-absolute">
                Subscribe
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribtion;
