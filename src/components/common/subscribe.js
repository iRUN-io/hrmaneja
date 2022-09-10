/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { getUser } from "../../config/common";
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
        0: ["", "Free", ""],
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
        0: ["$", "25", "/m"],
        1: ["$", "35", "/m"],
        2: ["$", "45", "/m"],
        3: ["$", "55", "/m"],
        4: ["$", "65", "/m"],
        5: ["$", "75", "/m"],
        6: ["$", "85", "/m"],
        7: ["$", "95", "/m"],
        8: ["$", "105", "/m"],
        9: ["", "Contact Us", ""]
      },
      plan3: {
        0: ["$", "50", "/m"],
        1: ["$", "60", "/m"],
        2: ["$", "70", "/m"],
        3: ["$", "80", "/m"],
        4: ["$", "90", "/m"],
        5: ["$", "100", "/m"],
        6: ["$", "110", "/m"],
        7: ["$", "120", "/m"],
        8: ["$", "130", "/m"],
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
    console.log(amount);
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
        logo: 'data:image/png;base64,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',
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
              plan: 'plan1',
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
      onClose: () => {},
    };

    return (
      <div className="pricing" style={{margin: '100px'}}>
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>How many users do you have?</span>
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.priceInputValue}
              onChange={this.handlePricingSlide}
              style={{ "--thumb-size": "30px", backgroundColor: "#f5f5f5" }}
            />
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
              <div onClick={()=> this.subscribe(this.getPricingData(this.state.priceOutput.plan1, 1))} className="pricing-item-cta">
              <FlutterWaveButton  className="btn btn-primary" {...fwConfig} amount={this.getPricingData(this.state.priceOutput.plan1, 1)}  />
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
              <div onClick={()=> this.subscribe(this.getPricingData(this.state.priceOutput.plan2, 1))} className="pricing-item-cta">
              <FlutterWaveButton  className="btn btn-primary" {...fwConfig} amount={this.getPricingData(this.state.priceOutput.plan2, 1)}  />
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
              <div onClick={()=> this.subscribe(this.getPricingData(this.state.priceOutput.plan3, 1))} className="pricing-item-cta">
              <FlutterWaveButton  className="btn btn-primary" {...fwConfig} amount={this.getPricingData(this.state.priceOutput.plan3, 1)}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
