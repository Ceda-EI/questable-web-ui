import React, { useState } from "react";
import PropTypes from "prop-types";

export default (player) => {
	function Login(props) {
		const [input, setInput] = useState("");
		return (
			<div className="login">
				<input type="text" placeholder="Token ID" value={input}
					onChange={evt => setInput(evt.target.value)} />
				<button onClick={() => player.auth(input).then(x => props.setLoggedIn(x))}>Submit</button>
			</div>
		);
	}

	Login.propTypes = {
		setLoggedIn: PropTypes.func,
	};
	return Login;
};
