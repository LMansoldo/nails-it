import React from 'react';
import { theme } from '../../styles/theme';

const ContentProviders = () => [
	{
		title: 'Hot',
		prefixUrlMatch: 'hot',
		path: '/launches',
		component: () => <div />,
		anchors: [],
	},
	{
		title: 'News',
		prefixUrlMatch: 'news',
		path: '/rockets',
		component: () => <div />,
		anchors: [],
	},
	{
		title: 'Rising',
		prefixUrlMatch: 'rising',
		path: '/rockets',
		component: () => <div />,
		anchors: [],
	},
];

export default ContentProviders;
