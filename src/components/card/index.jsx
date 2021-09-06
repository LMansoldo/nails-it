import React from 'react';
import PropTypes from 'prop-types';

import {
	CardWrapper,
	PostTitle,
	TextWrapper,
	TimeStamp,
	Author,
	DomainUrl,
	ImgWrapper,
} from './styled';

const Card = ({ postTitle, timestamp, author, url, img, domain }) => (
	<CardWrapper>
		<ImgWrapper pic={img} />
		<TextWrapper>
			<PostTitle>
				<a href={url}>{postTitle}</a>
			</PostTitle>
			<TimeStamp>
				{`enviado há ${timestamp} horas por `}
				<Author>{author}</Author>
			</TimeStamp>
			<DomainUrl>{domain}</DomainUrl>
		</TextWrapper>
	</CardWrapper>
);

Card.propTypes = {
	postTitle: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	domain: PropTypes.string.isRequired,
};

export default Card;
