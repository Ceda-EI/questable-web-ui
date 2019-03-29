import React from "react";

export default function Stats(props) {
	if (props.playerStats === null) {
		return <img src="./loader.svg"></img>;
	} else {
		const { xp, quests_completed, total_quests, side_quests_completed, total_side_quests } = props.playerStats;
		return (
			<div className="stats lists">
				<ul className="nes-list is-circle">
					<li> XP: {xp} </li>
					<li> Quests: {quests_completed}/{total_quests} </li>
					<li> Side Quests: {side_quests_completed}/{total_side_quests} </li>
				</ul>
			</div>
		);
	}
}
