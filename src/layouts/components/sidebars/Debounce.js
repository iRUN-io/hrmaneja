import React from "react";
import { debounce } from "throttle-debounce";

class DebounceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { e: null };
    this.autocompleteSearchDebounced = debounce(
      this.props.debounceTime,
      this.autocompleteSearch
    );
  }

  changeQuery = event => {
    const { ...all } = event;
    this.setState({ e: { ...all } }, () => {
      this.autocompleteSearchDebounced(this.state.e);
    });
  };

  autocompleteSearch = e => {
    const { onChange } = this.props;
    onChange(e);
  };

  render() {
    const { debounceTime, onChange, ...rest } = this.props;
    return <input onChange={this.changeQuery} {...rest} />;
  }
}
const defaultProps = {
  debounceTime: 300
};
DebounceInput.defaultProps = defaultProps;
export default DebounceInput;
