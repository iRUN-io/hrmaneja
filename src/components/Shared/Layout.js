import React, { Component } from 'react';
import Menu from './Menu';
import { getUser } from "../../config/common";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Layout extends Component {
	render() {
		if (!getUser()) {
			  this.props.history.push("/login");
		}
		return (
			<div id="main_content">
			<ToastContainer />
				<Menu {...this.props} />
			</div>
		);
	}
}
