export default (config, axios) => {return {
	auth: (token) => {
		return axios.get(`${config.apiUrl}/auth?token=${encodeURIComponent(token)}`)
			.then((res) => res.data.success);
	},
};};
