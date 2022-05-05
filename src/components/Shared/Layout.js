import React, { Component } from 'react';
import Menu from './Menu';
import { getUser } from "../../config/common";

export default class Layout extends Component {
	render() {
		if (!getUser()) {
			  this.props.history.push("/login");
		}
		return (
			<div id="main_content">
				<Menu {...this.props} />
			</div>
		);
	}
}
