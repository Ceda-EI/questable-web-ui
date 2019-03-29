import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Stats from "./stats";

export default (player) => {
	function MainApp(props) {
		const [ playerStats, setPlayerStats ] = useState(null);
		const token = localStorage.getItem("token");
		if (playerStats === null)
			player.player(token).then((res) => setPlayerStats(res));
		return (
			<div className="main">
				<header>
					<h1 className="nes-text is-primary">Questable</h1>
					<button className="nes-btn is-error"
						onClick={() => {
							props.setLoggedIn(false);
							localStorage.removeItem("token");
						}}>Logout</button>
				</header>
				<div className="body">
					<Stats playerStats={playerStats} />
				</div>
			</div>
		);
	}
	MainApp.propTypes = {
		setLoggedIn: PropTypes.func,
	};
	return MainApp;
};
