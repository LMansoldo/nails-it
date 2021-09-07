import styled from 'styled-components';

const handleSize = (size) => {
	switch (size) {
		case 'small':
			return `height: 30px;
    min-width: 80px;`;
		case 'medium':
			return `height: 40px;
    min-width: 100px;`;
		case 'large':
			return `height: 56px;
    min-width: 120px;`;
		case 'extra-large':
			return `height: 60px;
    min-width: 140px;`;
		default:
			return `height: 40px;
    min-width: 100px;`;
	}
};

const handleColor = (color) => {
	switch (color) {
		case 'success':
			return `
			    background: rgb(61 232 74);			
						&:hover {
							background: rgba(61, 232, 74, 0.8);
						}`;
		case 'warning':
			return `background: rgb(252 120 65);
					color: #fff;

						&:hover {
							background: rgba(252, 120, 65, 0.8);
						}`;
		case 'error':
			return `background: rgb(252 137 65);
					color: #fff;
					
						&:hover {
							background: rgba(252, 137, 65, 0.8);
						}`;
		case 'info':
			return `background: #725CAD;
					color: #fff;
					
						&:hover {
							background: #8E7DBE;
						}`;
		default:
			return `background: rgb(239 239 239);
					color: rgb(47 47 47);
										
						&:hover {
							background: rgba(239, 239, 239, 0.3);
						}`;
	}
};

export const ButtonWrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0px solid transparent;
	border-radius: 10px;
	${(props) => handleColor(props.color)}
	-webkit-box-shadow: -1px 1px 7px 0px #c7c7c7;
	box-shadow: -1px 1px 7px 0px #c7c7c7;
	cursor: pointer;
	text-transform: lowercase;
	font-size: 14px;
	padding: 0 15px;
	margin: 0;
	${(props) => handleSize(props.size)}
`;
