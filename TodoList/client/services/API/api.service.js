import axiosBase from 'axios';

const apiUrl = '/';

export const axios = axiosBase.create({
	// This is development host
	baseURL: process.env.VUE_APP_BASE_URL,
});

axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};

const ApiService = {
	query(resource, params) {
		return axios.get(`${apiUrl}/${resource}`, params).catch((err) => {
			throw new Error(`ApiService: ${err}`);
		});
	},

	get(resource, slug = '') {
		return axios.get(`${apiUrl}/${resource}/${slug}`).catch((err) => {
			throw new Error(`ApiService: ${err}`);
		});
	},

	post(resource, body, config) {
		return axios.post(`${apiUrl}/${resource}`, body, config).catch((err) => {
			throw new Error(`ApiService: ${err}`);
		});
	},

	put(resource, body) {
		return axios.put(`${apiUrl}/${resource}`, body).catch((err) => {
			throw new Error(`ApiService: ${err}`);
		});
	},
	delete(resource) {
		return axios.delete(`${apiUrl}/${resource}`).catch((err) => {
			throw new Error(`ApiService: ${err}`);
		});
	},
	deleteBulk(resource, body) {
		return axios.delete(`${apiUrl}/${resource}`, { data: body }).catch((err) => {
			throw new Error(`ApiService: ${err}`);
		});
	},
};

export default ApiService;
