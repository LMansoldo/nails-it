import React from 'react';

const SubredditList = React.lazy(() => import('../pages'));

const ContentProviders = () => [
	{
		title: 'ReactJS',
		prefixUrlMatch: 'hot',
		path: '/hot',
		component: () => <SubredditList />,
		anchors: [],
	},
];

export default ContentProviders;
