import React, { useState, useEffect } from 'react';
import { Card, Header } from '../index';

const SubredditList = () => {
	const [limit] = useState('10');
	const [subType] = useState(null);
	const [data, setData] = useState([{}]);

	const handleGetSubs = async () => {
		const res = await request(
			`&mode=submissions&subreddit=reactjs&hot.json&size=${limit}`
		);
		// const res = await request(`&subreddit=reactjs&size=${limit}`);
		return setData(res.data);
	};

	const getSpendHours = (dateUtc) => {
		const utcDate = new Date(dateUtc);
		const dts = utcDate.getUTCDate();
		return dts;
	};

	useEffect(() => {
		handleGetSubs();
	}, [limit, subType]);
};

export default SubredditList;
