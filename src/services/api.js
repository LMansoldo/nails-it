import axios from 'axios';

const getUrl = (terms) =>
	`https://api.pushshift.io/reddit/search/submission/?q=reactjs${terms}`;

const request = async (terms) => {
	const config = {
		method: 'get',
		baseURL: getUrl(terms || '10'),
		data: null,
		params: null,
		headers: null,
		timeout: 10000,
	};

	try {
		const response = await axios(config);
		// eslint-disable-next-line no-console
		console.log(response);
		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(`Failed to get Reddit data. ${error}`);
	}
};

export default request;
