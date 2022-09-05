import React from "react";

class Subscribe extends React.Component {
  state = {
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

  render() {
    return (
      <div className="pricing">
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
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li>Excepteur sint occaecat</li>
                    <li>Excepteur sint occaecat</li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a className="button" href="http://cruip.com/">
                  Buy Now
                </a>
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
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a className="button" href="http://cruip.com/">
                  Buy Now
                </a>
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
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a className="button" href="http://cruip.com/">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
