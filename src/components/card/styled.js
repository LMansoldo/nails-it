import styled, { keyframes } from 'styled-components';

const showUp = keyframes`
  from {
		height: 0px;
		opacity: 0;

		> div {
			margin: -5px 0;
		}
  }

  to {
		height: 40px;
		opacity: 1;

		> div {
			margin: 15px 0;
		}
  }
`;

const hideIn = keyframes`
  from {
		height: 40px;
		opacity: 1;

		> div {
			margin: 15px 0;
		}
  }

  to {
		height: 0px;
		opacity: 0;

		> div {
			margin: -5px 0;
		}
  }
`;

export const CardWrapper = styled.div`
	display: flex;
	border-top: 2px solid #e3e3e3;
	padding: 20px;
	background: #fff;
	margin: 40px 0;
`;

export const PostTitle = styled.div`
	margin: 15px 0;
	max-width: 400px;
	font-weight: 300;
	color: #5f5f5f;
`;

export const TimeStamp = styled.span`
	margin-right: 10px;
	font-weight: 600;
	color: #5f5f5f;
`;

export const Author = styled.span`
	margin-right: 10px;
	font-weight: 600;
	color: #5f5f5f;
`;

export const DomainUrl = styled.div``;

export const TextWrapper = styled.div`
	display: flex;
`;

export const ImgWrapper = styled.div`
	display: flex;
`;

export const TransitionKeyframe = styled.div`
	animation: ${(props) => (props.open ? showUp : hideIn)} 0.1s linear 1;
`;

export const TextContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;
