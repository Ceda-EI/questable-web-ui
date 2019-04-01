import player from "./player";
import quest from "./quest";

export default (config, axios) => { return {
	player: player(config, axios),
	quest: quest(config, axios, "quest"),
	sideQuest: quest(config, axios, "sideQuest")
};};
