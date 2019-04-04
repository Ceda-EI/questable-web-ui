import React from "react";
import PropTypes from "prop-types";

function QuestTile(props) {
	return (<div className="quest_tile nes-container is-dark">
		<h3>{props.quest.name}</h3>
		<p>Difficulty: {["Low", "Medium", "High"][props.quest.difficulty - 1]}</p>
		<p>Priority: {["Low", "Medium", "High"][props.quest.priority - 1]}</p>
		<p>State: {props.quest.state ? "Complete": "Incomplete"}</p>
		<button
			className="nes-btn is-primary"
			onClick={() => props.setDisplay({
				"type": props.type,
				"id": props.quest.id
			})}
		>Modify</button>
	</div>
	);
}

QuestTile.propTypes = {
	quest: PropTypes.object,
	setDisplay: PropTypes.func,
	type: PropTypes.string,
};

function Quests(props) {
	const name = {
		quests: "Quests",
		sideQuests: "Side Quests"
	}[props.display.type];
	return (
		<div className="quests">
			<div className="quests_head">
				<h2>{name}</h2>
				<button
					className="back"
					onClick={() => props.setDisplay({type: "main"})
					}>&lt;</button>
			</div>
			{props.quests.map((cur) => <QuestTile
				key={cur.id}
				quest={cur}
				type={ props.display.type === "quests" ? "quest" : "sideQuest"}
				setDisplay={props.setDisplay}/>)}
		</div>
	);
}

Quests.propTypes = {
	quests: PropTypes.array,
	display: PropTypes.object,
	setDisplay: PropTypes.func,
};

export default Quests;
