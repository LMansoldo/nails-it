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

const getSpendHours = (dateUtc) => {
	const utcDate = new Date(dateUtc);
	const dts = utcDate.getUTCDate();
	return dts;
};

const Card = ({ postTitle, timestamp, author, url, img, domain }) => (
	<CardWrapper>
		<ImgWrapper pic={img} />
		<TextWrapper>
			<PostTitle>
				<a href={url}>{postTitle}</a>
			</PostTitle>
			<TimeStamp>
				{`enviado há ${getSpendHours(timestamp)} horas por `}
				<Author>{author}</Author>
			</TimeStamp>
			<DomainUrl>{domain}</DomainUrl>
		</TextWrapper>
	</CardWrapper>
);

Card.propTypes = {
	postTitle: PropTypes.string,
	timestamp: PropTypes.number,
	author: PropTypes.string,
	url: PropTypes.string,
	img: PropTypes.string,
	domain: PropTypes.string,
};

Card.defaultProps = {
	postTitle: '',
	timestamp: 0,
	author: '',
	url: '',
	img: '',
	domain: '',
};

export default Card;
