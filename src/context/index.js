import { createContext } from 'react';

const RedditContext = createContext({
	limit: '10',
	terms: {},
});

export default RedditContext;
