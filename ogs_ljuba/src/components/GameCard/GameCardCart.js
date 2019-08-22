import React from 'react';
import './GameCard.css';

class GameCard extends React.Component{
	render (){
		const {gameId, imageLink, gameName, price, OrderAction} = this.props;
		return(
			<div className="f5 b card shadow-5 ba br4 bw1 grow pa1 tc ma2">
				<img alt={`${gameName}`} src={`${imageLink}`}/>
				<p>{gameName}</p>
				<p>{price}</p>
				<button 
				onClick={() => OrderAction(gameId)}
				type="button" 
				className="b red cancelButton">
				CANCEL ORDER
				</button>
			</div>
		);
	}
}

export default GameCard;