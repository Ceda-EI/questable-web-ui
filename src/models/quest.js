const getQuests = (config, axios, type) => (token) => {
	const endpoint = type === "quest" ? "get_quests" : "get_side_quests";
	const url = `${config.apiUrl}/${endpoint}?token=${encodeURIComponent(token)}`;
	return axios.get(url)
		.then((res) => {
			if (res.status !== 200)
				return false;
			else
				return res.data;
		});
};

const getQuest = (config, axios, type) => (token, id) => {
	const endpoint = type === "quest" ? "get_quest" : "get_side_quest";
	const url = `${config.apiUrl}/${endpoint}?token=${encodeURIComponent(token)}&id=${encodeURIComponent(id)}`;
	return axios.get(url)
		.then((res) => {
			if (res.status !== 200)
				return false;
			else
				return res.data;
		});
};

export default (config, axios, type) => {
	const quest = {};
	const keys = {
		"quest": ["getQuests", "getQuest", ],
		"sideQuest": ["getSideQuests", "getSideQuest"]
	}[type];
	quest[keys[0]] = getQuests(config, axios, type);
	quest[keys[1]] = getQuest(config, axios, type);
	return quest;
};
