import React from 'react';
import { screen, render } from '../../tests';
import Card from './index';

// 1 - Card deverá renderizar todas as props corretamente;

describe('Card', () => {
	it('Should load data', () => {
		render(
			<Card
				postTitle="title"
				timestamp={19}
				author="author"
				url="http://link.com"
				domain="link.com"
				img="default"
			/>
		);

		expect(screen.queryByText('title')).toBeInTheDocument();
		expect(screen.queryByText('author')).toBeInTheDocument();
		expect(screen.queryByText('link.com')).toBeInTheDocument();
	});
});
