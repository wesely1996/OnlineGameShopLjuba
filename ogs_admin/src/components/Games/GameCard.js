import React from 'react';

const GamesCard = ({gameId, imageLink, gameName, price}) => {
	return (
		<div >
			{gameId} {imageLink} {gameName} {price}
		</div>
	);
}

export default GamesCard;