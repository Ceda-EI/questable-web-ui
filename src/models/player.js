export default (config, axios) => {return {
	auth: (token) => {
		return axios.get(`${config.apiUrl}/auth?token=${encodeURIComponent(token)}`)
			.then((res) => res.data.success);
	},
	player: (token) => {
		return axios.get(`${config.apiUrl}/player?token=${encodeURIComponent(token)}`)
			.then((res) => {
				if (res.status !== 200) {
					return false;
				} else {
					return res.data;
				}
			});
	},
};};
