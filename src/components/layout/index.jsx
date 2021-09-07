import React, { useState, useEffect } from 'react';
import { Card, Header } from '../index';
import request from '../../services/api';

import { Container } from './styles';

const Layout = () => {
	const [limit] = useState('10');
	const [subType] = useState(null);
	const [data, setData] = useState([{}]);

	const handleGetSubs = async () => {
		const res = await request(
			`&mode=submissions&subreddit=reactjs&size=${limit}`
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

	return (
		<>
			<Header />
			<Container>
				{data.map((item, index) => (
					<Card
						key={index}
						postTitle={item.title}
						timestamp={getSpendHours(item.created_utc)}
						author={item.author}
						url={item.full_link}
						domain={item.domain}
						img={item.thumbnail}
					/>
				))}
			</Container>
		</>
	);
};

export default Layout;
