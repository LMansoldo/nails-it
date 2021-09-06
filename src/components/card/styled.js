import styled, { keyframes } from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

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
	padding: 10px 20px;
	background: #fff;
	margin: 10px 0;
`;

export const PostTitle = styled.div`
	margin: 0;
	max-width: 400px;
	font-weight: 300;
	color: #5f5f5f;

	& a {
		text-decoration: none;
		font-weight: 500;
		color: #2f2f2f;
	}

	& a:hover {
		text-decoration: none;
		font-weight: 500;
		color: #5f5f5f;
	}

	& a:visited {
		text-decoration: none;
		font-weight: 500;
		color: #2f2f2f;
	}
`;

export const TimeStamp = styled.span`
	margin-right: 10px;
	font-weight: 300;
	color: #5f5f5f;
`;

export const Author = styled.span`
	margin-right: 10px;
	font-weight: 300;
	color: #5e29ef;
`;

export const DomainUrl = styled.div`
	margin-right: 10px;
	font-weight: 600;
	color: #5f5f5f;
	margin: 15px 0 0;
	word-break: break-word;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 80px;
	margin: 15px 0;
`;

const handleBackgroundImg = (pic) => {
	if (pic && pic !== 'self' && pic !== 'default')
		return `background: url('${pic}') no-repeat;`;
	return `background: #e3e3e3;`;
};

export const ImgWrapper = styled.div`
	display: none;
	${(props) => handleBackgroundImg(props.pic)}
	width: 80px;
	height: 80px;
	margin: 15px;
	background-size: cover;
	border: 1px solid transparent;
	border-radius: 10px;

	${mediaQuery.s`
		display: flex;
	`};
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
