/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { formatMoney, getUser } from "../../config/common";
import { toast } from "material-react-toastify";
import { createBilling } from "../../services/billing";
import { createActivity } from "../../services/activities";
import { sendEmail } from "../../services/mail/sendMail";
import { emailCase } from "../../enums/emailCase";

class Subscribe extends React.Component {
  state = {
    user: [],
    amount: 0,
    priceInputValue: "1",
    priceInput: {
      0: "10",
      1: "20",
      2: "30",
      3: "40",
      4: "50",
      5: "60",
      6: "70",
      7: "80",
      8: "90",
      9: "100+"
    },
    priceOutput: {
      plan1: {
        0: ["$", "10", ""],
        1: ["$", "20", "/m"],
        2: ["$", "30", "/m"],
        3: ["$", "40", "/m"],
        4: ["$", "50", "/m"],
        5: ["$", "60", "/m"],
        6: ["$", "70", "/m"],
        7: ["$", "80", "/m"],
        8: ["$", "90", "/m"],
        9: ["", "Contact Us", ""]
      },
      plan2: {
        0: ["$", "30", "/m"],
        1: ["$", "60", "/m"],
        2: ["$", "90", "/m"],
        3: ["$", "120", "/m"],
        4: ["$", "150", "/m"],
        5: ["$", "180", "/m"],
        6: ["$", "210", "/m"],
        7: ["$", "240", "/m"],
        8: ["$", "270", "/m"],
        9: ["", "Contact Us", ""]
      },
      plan3: {
        0: ["$", "50", "/m"],
        1: ["$", "100", "/m"],
        2: ["$", "150", "/m"],
        3: ["$", "200", "/m"],
        4: ["$", "250", "/m"],
        5: ["$", "300", "/m"],
        6: ["$", "350", "/m"],
        7: ["$", "400", "/m"],
        8: ["$", "450", "/m"],
        9: ["", "Contact Us", ""]
      }
    },
  };


  features = [
    [
      "Employee Management",
      "Time Tracking",
      "Leave Entitlement",
      "Basic onboarding",
      "Event Calendar",
      "Self Service ",
    ],
    [
      "Employee Management",
      "Time Tracking",
      "Leave Entitlement",
      "Basic onboarding",
      "Event Calendar",
      "Self Service",
      "Activity Log",
      "Payroll Management",
      "Requisition Management",
      "Expense Management",

    ],
    [
      "Employee Management",
      "Time Tracking",
      "Leave Entitlement",
      "Basic onboarding",
      "Event Calendar",
      "Self Service",
      "Activity Log",
      "Payroll Management",
      "Requisition Management",
      "Expense Tracking",
      "Account Management",
      "Reports and Analytics",
      "Inventory Management",
      "Document Management"
    ]
  ];


  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
    this.thumbSize = parseInt(
      window
        .getComputedStyle(this.sliderValue.current)
        .getPropertyValue("--thumb-size"),
      10
    );
    this.handleSliderValuePosition(this.slider.current);
  }

  getUser = async function () {
    const user = getUser();
    if (user) {
      this.setState({
        user: user,
      });
    }
  }

  handlePricingSlide = e => {
    this.setState({ priceInputValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = input => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left =
      input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  };

  subscribe = (amount) => {
    this.setState({ amount: amount });
    // console.log(amount);
  };



  render() {

    if (this.state.user.length === 0) {
      this.getUser();
    }
    const user = this.state.user;
    const config = {
      public_key: 'FLWPUBK_TEST-89880cda230ec7985180ef3b677c8fd0-X',
      tx_ref: Date.now(),
      // amount: this.state.amount,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: user.emailAddress,
        phonenumber: user.phone,
        name: user.name,
      },
      customizations: {
        title: 'Hr Maneja Billing',
        description: 'Payment for subscription',
        logo: 'https://irunauto.com/static/media/logo-dark.80bc83d8.png',
      },
    };

    const fwConfig = {
      ...config,
      text: 'Subscribe',
      callback: async (response) => {
        if (response.status === 'successful') {
          const body = {
            amount: response.amount,
            paidBy: user.id,
            company_id: user.company_id,
            plan: 'Company Starter',
            expiryDate: new Date().setMonth(new Date().getMonth() + 1),
            status: 'active',
          }
          if (body.amount === '') {
            toast.error('Please select a plan');
            return;
          }
          const billing = await createBilling(body, user.employee_id);

          if (billing.data.id) {
            const logBilling = await createActivity(
              {
                // eslint-disable-next-line no-useless-concat
                name: 'Paid for subscription' + 'with amount' + response.amount,
                employee_id: user.employee_id,
                activity: `${user.name} Paid for subscription`,
                activity_name: 'Paid for subscription',
                user: user.name,
                company_id: user.company_id,
              }
            )

            if (logBilling.id) {
              sendEmail(user.emailAddress, user.name, emailCase.createDepartment);
              toast.success("Payment Successful");
              setTimeout(() => {
                window.location.reload();
              }, 2000);
              closePaymentModal()
            }

          }
          // this.props.history.push('/dashboard');
        }
        closePaymentModal() // this will close the modal programmatically
      },
      onClose: () => { },
    };

    return (
      <><div className="pricing" style={{ margin: '100px' }}>
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>How many users do you have?</span>
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.priceInputValue}
              onChange={this.handlePricingSlide}
              style={{ "--thumb-size": "30px", backgroundColor: "#f5f5f5" }} />
          </label>
          <div ref={this.sliderValue} className="pricing-slider-value">
            {this.getPricingData(this.state.priceInput)}
          </div>
        </div>

        <div className="pricing-items">
          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">Company Starter</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan1, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan1, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan1, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    {this.features[0].map((feature, index) => (
                      <li key={index} className="is-checked">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div onClick={() => this.subscribe(this.getPricingData(this.state.priceOutput.plan1, 1))} className="pricing-item-cta">
                <button className="button button-primary button-block" data-toggle="modal" data-target="#paymentModal"> Subscribe </button>

                {/* <FlutterWaveButton  className="button button-primary button-block btn btn-primary" {...fwConfig} amount={this.getPricingData(this.state.priceOutput.plan1, 1)}  /> */}
              </div>
            </div>
          </div>

          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">Company Plus</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan2, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan2, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan2, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    {this.features[1].map((feature, index) => (
                      <li key={index} className="is-checked"> {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div onClick={() => this.subscribe(this.getPricingData(this.state.priceOutput.plan2, 1))} className="pricing-item-cta">
                <button className="button button-primary button-block" data-toggle="modal" data-target="#paymentModal"> Subscribe </button>

                {/* <FlutterWaveButton className="btn btn-primary" {...fwConfig} amount={this.getPricingData(this.state.priceOutput.plan2, 1)} /> */}
              </div>
            </div>
          </div>
          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">Company Premium</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan3, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan3, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan3, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    {this.features[2].map((feature, index) => (
                      <li key={index} className="is-checked">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div onClick={() => this.subscribe(this.getPricingData(this.state.priceOutput.plan3, 1))} className="pricing-item-cta">
                <button className="button button-primary button-block" data-toggle="modal" data-target="#paymentModal"> Subscribe </button>
                {/* <FlutterWaveButton className="btn btn-primary" {...fwConfig} amount={this.getPricingData(this.state.priceOutput.plan3, 1)} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="modal fade" id="paymentModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Make Payment</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Make payment to the account below;</p>
                    <p>Account Name: <strong>Irun Technology LTD</strong></p>
                    <p>Account Number: <strong>0123555629</strong></p>
                    <p>Bank: <strong>Wema Bank</strong></p>
                    <p>Amount: <strong>{formatMoney(this.state.amount * 900)}</strong></p>
                    <p>After payment, create a support ticket with payment details.</p>
                    <p>Click <a href="/support">here</a> to create a support ticket.</p>
                    <p>Thank you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></>
    );
  }
}

export default Subscribe;
