import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Stats from "./stats";
import Quests from "./quests";
import Quest from "./quest";
import AddQuest from "./addquest";

export default (player, quest, sideQuest) => {
	function MainApp(props) {
		const [ playerStats, setPlayerStats ] = useState(null);
		const [ quests, setQuests ] = useState(null);
		const [ sideQuests, setSideQuests ] = useState(null);

		// Possible values of display.type
		// main: The main display with stats, buttons for list/add
		// quests: Shows all quests
		// sideQuests: Shows all side quests
		// quest: Shows a specific quest
		// sideQuest: Shows a specific side quest
		// addQuest: Add quest screen
		// addSideQuest: Add side quest screen
		const [ display, setDisplay ] = useState({ type: "main"});

		const token = localStorage.getItem("token");
		if (playerStats === null)
			player.player(token).then((res) => setPlayerStats(res));

		if (quests === null)
			quest.getQuests(token).then((res) => setQuests(res));

		if (sideQuests === null)
			sideQuest.getSideQuests(token).then((res) => setSideQuests(res));

		let body;
		switch(display.type) {
		case "main":
			body = (<>
				<Stats playerStats={playerStats} />
				<div className="stats lists nes-container with-title is-dark">
					<p className="title">Quests</p>
					<button
						onClick={() => setDisplay({ type: "addQuest"})}
						className="nes-btn is-primary"
					>Add Quests</button>
					<button
						onClick={() => setDisplay({type: "quests"})}
						className="nes-btn is-primary"
					>List Quests</button>
				</div>
				<div className="stats lists nes-container with-title is-dark">
					<p className="title">Side Quests</p>
					<button
						onClick={() => setDisplay({type: "addSideQuest"})}
						className="nes-btn is-primary"
					>Add Side Quests</button>
					<button
						onClick={() => setDisplay({type: "sideQuests"})}
						className="nes-btn is-primary"
					>List Side Quests</button>
				</div>
				</>);
			break;
		case "quests":
			body = <Quests display={display} quests={quests} setDisplay={setDisplay} />;
			break;
		case "sideQuests":
			body = <Quests display={display} quests={sideQuests} setDisplay={setDisplay} />;
			break;
		case "quest":
		case "sideQuest":
			body = <Quest display={display} setDisplay={setDisplay} />;
			break;
		case "addQuest":
		case "addSideQuest":
			body = <AddQuest display={display} setDisplay={setDisplay} />;
		}
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
