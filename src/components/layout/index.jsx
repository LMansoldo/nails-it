import React, { useState, useEffect } from 'react';
import request from '../../services/api';

const Layout = () => {
	const [limit] = useState('10');
	const [subType] = useState(null);
	const [setData] = useState(null);

	const handleGetSubs = async () => {
		const res = await request(`&after=7d&aggs=subreddit&size=${limit}`);
		return setData(res);
	};

	useEffect(() => {
		handleGetSubs();
	}, [limit, subType]);

	return <div>a</div>;
};

export default Layout;
