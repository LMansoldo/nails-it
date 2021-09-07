import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	width: 100%;
	height: 100px;
	background: #5e29ef;
`;

export const Title = styled.div`
	font-size: 48px;
	font-weight: 600;
	color: #fff;
	display: flex;
	align-items: center;

	& span {
		color: #ffb800;
	}
`;
