import React from 'react';

const GamesCard = ({gameId, imageLink, gameName, price}) => {
	return (
		<div className="w-100 f5 b card shadow-5 ba br4 bw1 pa1 tc ma2 bg-black-50 white">
			{gameId} | {imageLink} | {gameName} | {price} 
		</div>
	);
}

export default GamesCard;