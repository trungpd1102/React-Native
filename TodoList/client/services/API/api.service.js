import axiosBase from 'axios';

const apiUrl = '/api';

export const axios = axiosBase.create({
	// This is development host
	baseURL: 'http://192.168.1.9:5000',
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
	patch(resource, body) {
		return axios.patch(`${apiUrl}/${resource}`, body).catch((err) => {
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
