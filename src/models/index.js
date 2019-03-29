import player from "./player";

export default (config, axios) => { return {
	player: player(config, axios),
};};
