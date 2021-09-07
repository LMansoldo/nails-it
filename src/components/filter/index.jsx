import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ContentProviders from '../../services/routes';
import Button from '../button';

import { Wrapper } from './styles';

const Filter = () => {
	const AVAILABLE_ROUTES = ContentProviders();
	const history = useHistory();
	const location = useLocation();

	const handleClick = (path) => {
		history.push(path);
	};

	const handleActiveLocation = (path) => {
		if (location.pathname === path) return 'info';
		return null;
	};

	return (
		<Wrapper>
			{AVAILABLE_ROUTES.map(({ path, prefixUrlMatch }, index) => (
				<Button
					key={index}
					onClick={() => handleClick(path)}
					size="medium"
					color={handleActiveLocation(path)}
				>
					{prefixUrlMatch}
				</Button>
			))}
		</Wrapper>
	);
};

export default Filter;
