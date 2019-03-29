import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Stats from "./stats";

export default (player) => {
	function MainApp(props) {
		const [ playerStats, setPlayerStats ] = useState(null);
		// Possible values of display
		// main: The main display with stats, buttons for list/add
		const [ display ] = useState("main");
		const token = localStorage.getItem("token");
		if (playerStats === null)
			player.player(token).then((res) => setPlayerStats(res));

		let body;
		if (display === "main")
			body = (<>
				<Stats playerStats={playerStats} />
				<div className="stats lists nes-container with-title is-dark">
					<p className="title">Quests</p>
					<button className="nes-btn is-primary">Add Quests</button>
					<button className="nes-btn is-primary">List Quests</button>
				</div>
				<div className="stats lists nes-container with-title is-dark">
					<p className="title">Side Quests</p>
					<button className="nes-btn is-primary">Add Side Quests</button>
					<button className="nes-btn is-primary">List Side Quests</button>
				</div>
			</>);
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
					{body}
				</div>
			</div>
		);
	}
	MainApp.propTypes = {
		setLoggedIn: PropTypes.func,
	};
	return MainApp;
};
