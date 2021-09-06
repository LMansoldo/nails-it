import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	height: 100%;
	overflow-x: hidden;
	outline: none;

	@media (max-width: 1921px) {
		max-width: 1420px;
	}

	@media (max-width: 1368px) {
		max-width: 1200px;
	}

	@media (max-width: 768px) {
		max-width: 720px;
	}

	@media (max-width: 576px) {
		max-width: 540px;
	}

	@media (max-width: 415px) {
		max-width: 350px;
	}

	@media (max-width: 325px) {
		max-width: 320px;
	}
`;
