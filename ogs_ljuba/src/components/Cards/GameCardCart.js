import React from 'react';
import './GameCard.css';

class GameCard extends React.Component{
	render (){
		const {aGiC, gameId, imageLink, gameName, price, OrderAction} = this.props;

		const iterations = () => {
			let i = 0;
			aGiC.forEach(game=>{
				if(game === gameId){
					i++;
				}
			})
			return i;
		}

		return(
			<div className="f5 b card shadow-5 ba br4 bw1 grow pa1 tc ma2 bg-black-50 white">
				<p>{iterations()}</p>
				<img alt={`${gameName}`} src={`${imageLink}`}/>
				<p>{gameName}</p>
				<p>{price}</p>
				<button 
				onClick={() => OrderAction(gameId)}
				type="button" 
				className="b red buyButton">
				CANCEL ORDER
				</button>
			</div>
		);
	}
}

export default GameCard;