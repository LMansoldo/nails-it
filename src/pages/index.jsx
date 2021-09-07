import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useLocation } from 'react-router-dom';
import request from '../services/api';
import { Card, Filter, Button } from '../components';

const SubredditList = () => {
	const location = useLocation();
	const [limit, setLimit] = useState(5);
	const [subredditData, setSubredditData] = useState([{}]);

	const handleGetSubs = async () => {
		const res = await request(`${location.pathname}.json?sort=new`);
		return setSubredditData(res.data.children.splice(0, limit));
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
			<Button
				style={{ width: '90%', margin: '15px auto' }}
				onClick={() => setLimit(limit + 5)}
				size="medium"
				color="info"
			>
				{' '}
				+ ver mais
			</Button>
		</>
	);
};

export default SubredditList;
