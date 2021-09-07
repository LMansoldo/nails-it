import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './styled';

const Button = ({ children, style, type, color, size, onClick }) => (
	<ButtonWrapper
		style={style}
		color={color}
		size={size}
		type={type}
		onClick={onClick}
	>
		{children}
	</ButtonWrapper>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.string,
	style: PropTypes.object,
};

Button.defaultProps = {
	type: 'button',
	color: 'default',
	size: 'medium',
	style: {},
};

export default Button;
