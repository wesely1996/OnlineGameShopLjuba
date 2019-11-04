import React from 'react';
import './GameCard.css';

class GameCard extends React.Component{
	render (){
		const {number, gameId, imageLink, gameName, price, OrderAction} = this.props;

		return(
			<div className="f5 b card shadow-5 ba br4 bw1 pa1 tc ma2 bg-black-50 white">
				<div style={{display: 'flex', justifyContent: 'flex-end'}}>
					<div className="white f4 br-100"
					style={{paddingLeft: '5px', paddingRight: '5px', paddingBottom: '2px', backgroundColor: 'rgba(176, 18, 7, .5)'}}>
						{number}
					</div>
				</div>
				<img alt={`${gameName}`} src={`${imageLink}`}/>
				<p>{gameName}</p>
				<p>{price} din</p>
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