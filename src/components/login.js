import React, { useState } from "react";
import PropTypes from "prop-types";

export default (player, swal) => {
	function Login(props) {
		const [input, setInput] = useState(localStorage.getItem("token") ? localStorage.getItem("token"): "" );
		return (
			<div className="login">
				<div className="wrapper">
					<input type="text" placeholder="Token ID" value={input} className="nes-input is-dark"
						onChange={evt => setInput(evt.target.value)} />
					<button className="nes-btn is-primary"
						onClick={
							() => player.auth(input)
								.then(x => {
									if (x === true) {
										localStorage.setItem("token", input);
									} else {
										swal("Invalid Token");
									}
									props.setLoggedIn(x);
								})
						}>Submit</button>
				</div>
			</div>
		);
	}

	Login.propTypes = {
		setLoggedIn: PropTypes.func,
	};
	return Login;
};
