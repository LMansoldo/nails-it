import React from 'react';
import { screen, render } from '../../../tests';
import Card from './index';

/*
		1 - Deve renderizar fechado
		2 - Deve exibir descrição limitada a 140 caracteres
		3 - Deve exibir Descrição completa e naves
	*/

describe('Card', () => {
	it('Should start closed', () => {
		render(
			<Card postTitle="Good" timestamp="6" author="me" url="aaaaaaaa" img="" />
		);

		expect(screen.queryByTestId('description')).not.toBeInTheDocument();
	});
});
