import React, { useState } from "react";
import PropTypes from "prop-types";

function Input(props) {
	return (
		<label>
			<input
				checked={props.const === props.value}
				type="radio"
				name={props.name}
				value={props.value}
				className="nes-radio is-dark"
				onClick={() => props.change(props.value)}
			/>
			<span>{["Low", "Medium", "High"][props.value - 1]}</span>
		</label>
	);
}

Input.propTypes = {
	const: PropTypes.number,
	value: PropTypes.number,
	name: PropTypes.string,
	change: PropTypes.func,
};

export default (quest, sideQuest) => {
	function Quest(props) {
		const [ currQuest, setCurrQuest ] = useState(null);
		const [ name, setName ] = useState("");
		const [ difficulty, setDifficulty ] = useState(0);
		const [ priority, setPriority ] = useState(0);

		const type = {
			quest: "Quest",
			sideQuest: "Side Quest"
		}[props.display.type];
		const token = localStorage.getItem("token");

		if (currQuest === null) {
			if (props.display.type === "quest")
				quest.getQuest(token, props.display.id)
					.then((res) => {
						setCurrQuest(res);
						setName(res.name);
						setDifficulty(res.difficulty);
						setPriority(res.priority);
					});
			else
				sideQuest.getSideQuest(token, props.display.id)
					.then((res) => {
						setCurrQuest(res);
						setName(res.name);
						setDifficulty(res.difficulty);
						setPriority(res.priority);
					});

		}
		if (currQuest === null) {
			return (
				<div className="loader">
					<img alt="loader" src="./loader.svg"></img>
				</div>
			);
		}
		else {
			return (
				<div className="quest nes-container with-title is-dark">
					<p className="title">{type}</p>
					<div className="quest_element">
						<label>Name</label>
						<input
							type="text"
							className="nes-input is-dark"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="quest_element">
						<label>Priority</label>
						<div className="radios">
							{[1, 2, 3].map((cur) =>
								<Input
									name="priority"
									value={cur}
									const={priority}
									key={cur}
									change={setPriority}
								/>)}
						</div>
					</div>
					<div className="quest_element">
						<label>Difficulty</label>
						<div className="radios">
							{[1, 2, 3].map((cur) =>
								<Input
									name="difficulty"
									value={cur}
									const={difficulty}
									key={cur}
									change={setDifficulty}
								/>)}
						</div>
					</div>
				</div>
			);
		}
	}

	Quest.propTypes = {
		display: PropTypes.object,
		setDisplay: PropTypes.func,
	};

	return Quest;
};
