import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import { config } from "./config";
import axios from "axios";

function auth(token) {
	return axios.get(`${config.apiUrl}/auth?token=${encodeURIComponent(token)}`)
		.then((res) => res.data.success);
}

function Login(props) {
	const [input, setInput] = useState("");
	return (
		<div className="login">
			<input type="text" placeholder="Token ID" value={input}
				onChange={evt => setInput(evt.target.value)} />
			<button onClick={() => auth(input).then(x => props.setLoggedIn(x))}>Submit</button>
		</div>
	);
}

Login.propTypes = {
	setLoggedIn: PropTypes.func,
};

function MainApp() {
	return (
		<div className="main">
		</div>
	);
}

function App(){
	const [loggedIn, setLoggedIn] = useState(false);
	if (loggedIn){
		return (
			<MainApp />
		);
	}
	else {
		return (
			<Login setLoggedIn={setLoggedIn} />
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
