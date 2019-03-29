import React from "react";
import PropTypes from "prop-types";

export default () => {
	function MainApp(props) {
		return (
			<div className="main">
				<header>
					<p>Questable</p>
					<button
						onClick={() => {
							props.setLoggedIn(false);
							localStorage.removeItem("token");
						}}>Logout</button>
				</header>
			</div>
		);
	}
	MainApp.propTypes = {
		setLoggedIn: PropTypes.func,
	};
	return MainApp;
};
