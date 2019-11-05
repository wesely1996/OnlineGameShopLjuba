import React from 'react';
import './GameCard.css';

class GameCard extends React.Component{
	render (){
		const {gameId, imageLink, gameName, price, OrderAction} = this.props;
		return(
			<div className="f5 b card shadow-5 ba br4 bw1 pa1 tc ma2 bg-black-50 white">
				<img alt={`${gameName}`} src={`${imageLink}`}  style={{width: '8.5em'}}/>
				<p>{gameName}</p>
				<p>{price} din</p>
				<button 
				onClick={() => OrderAction(gameId)}
				type="button" 
				className="b shadow-1 white buyButton">
				BUY
				</button>
			</div>
		);
	}
}

export default GameCard;
