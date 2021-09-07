import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useLocation } from 'react-router-dom';
import request from '../services/api';
import { Card, Filter } from '../components';

const SubredditList = () => {
	const location = useLocation();
	const [limit] = useState('10');
	const [subredditData, setSubredditData] = useState([{}]);

	const handleGetSubs = async () => {
		const res = await request(`${location.pathname}.json?sort=new`);
		return setSubredditData(res.data.children);
	};

	useEffect(() => {
		handleGetSubs();
	}, [limit, location]);

	return (
		<>
			<Filter />
			{subredditData.map((item, index) => {
				if (!item.data) return <LinearProgress color="secondary" />;
				const { data } = item;
				return (
					<Card
						key={index}
						postTitle={data.title}
						timestamp={data.created_utc}
						author={data.author}
						url={data.full_link}
						domain={data.domain}
						img={data.thumbnail}
					/>
				);
			})}
		</>
	);
};

export default SubredditList;
