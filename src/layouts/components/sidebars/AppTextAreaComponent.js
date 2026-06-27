import React, { Component } from "react";
import DebounceInput from "./Debounce";

class AppTextAreaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValue: false
    };
    this.inputClassChange = this.inputClassChange.bind(this);
  }

  inputClassChange(e) {
    const { value } = e.target;
    this.setState({
      hasValue: value ? true : false
    });
  }
  componentDidMount() {
    //    this.inputClassChange();
  }

  render() {
    const {
      divClass,
      inputType,
      inputClass,
      labelClass,
      labelText,
      spanClass,
      className,
      onFocus,
      onBlur,
      withDebounce,
      debounceTime,
      inputAddon,
      ...rest
    } = this.props;
    const { hasValue } = this.state;
    const InputAddon = inputAddon;

    let addLabelClass = false;
    if (hasValue || this.props.value) {
      addLabelClass = true;
    } else if (hasValue && !this.props.value) {
      addLabelClass = false;
    }

    return (
      <div className={divClass}>
        {withDebounce ? (
          <DebounceInput
            onFocus={this.inputClassChange}
            onBlur={this.inputClassChange}
            onKeyPress={this.inputClassChange}
            className={inputClass + (addLabelClass ? " has-content" : "")}
            debounceTime={debounceTime}
            {...rest}
          />
        ) : (
          <textarea
            onFocus={this.inputClassChange}
            onBlur={this.inputClassChange}
            onKeyPress={this.inputClassChange}
            className={inputClass + (addLabelClass ? " has-content" : "")}
            {...rest}
          />
        )}

        <label className={labelClass}>{labelText}</label>
        <InputAddon />
        <span className={spanClass + (addLabelClass ? " w-100" : "")} />
      </div>
    );
  }
}

const defaultProps = {
  type: "text",
  divClass: "input-group-wrapper",
  inputClass: "form-control effect-16",
  labelClass: "fs-12 justify-content-start",
  labelText: "Label",
  spanClass: "focus-border",
  withDebounce: false,
  debounceTime: 300,
  inputAddon: () => <>{""}</>
};
AppTextAreaComponent.defaultProps = defaultProps;
export default AppTextAreaComponent;
