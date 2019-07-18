import React from 'react';
import './GameCard.css';

const GameCard = ({imageLink, gameName, price}) => {
	return (
		<div className="f5 b card shadow-5 ba br4 bw1 grow pa1 tc ma2">
			<img alt={`${gameName}`} src={`${imageLink}`}/>
			<p>{gameName}</p>
			<p>{price}</p>
			<button type="button" className="b shadow-1 buyButton">BUY</button>
		</div>
	);
}

export default GameCard;