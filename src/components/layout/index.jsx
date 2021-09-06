import React, { useState, useEffect } from 'react';
import { Card } from '../index';
import request from '../../services/api';

const Layout = () => {
	const [limit] = useState('10');
	const [subType] = useState(null);
	const [data, setData] = useState([{}]);

	const handleGetSubs = async () => {
		const res = await request(`&subreddit=reactjs&size=${limit}`);
		return setData(res.data);
	};

	useEffect(() => {
		handleGetSubs();
	}, [limit, subType]);

	return data.map((item, index) => (
		<Card
			key={index}
			postTitle={item.title}
			timestamp="6"
			author={item.author}
			url={item.full_link}
			domain={item.domain}
			img=""
		/>
	));
};

export default Layout;
