import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../index';
import Head from './Head';

import { Container } from './styles';

const Layout = ({ children }) => (
	<>
		<Head
			title="Nail it"
			description="Lista fofoqueirinha manicure sobre reactjs - reddit"
		/>
		<Header />
		<Container>{children}</Container>
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
