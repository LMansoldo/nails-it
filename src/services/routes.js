import React from 'react';

const SubredditList = React.lazy(() => import('../pages'));

const ContentProviders = () => [
	{
		title: 'ReactJS',
		prefixUrlMatch: 'hot',
		path: '/',
		component: () => <SubredditList />,
		anchors: [],
	},
	{
		title: 'ReactJS',
		prefixUrlMatch: 'new',
		path: '/new',
		component: () => <SubredditList />,
		anchors: [],
	},
	{
		title: 'ReactJS',
		prefixUrlMatch: 'rising',
		path: '/rising',
		component: () => <SubredditList />,
		anchors: [],
	},
];

export default ContentProviders;
