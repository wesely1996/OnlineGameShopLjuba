import React from 'react';
import './GameCard.css';

const GamesCard = ({gameId, imageLink, gameName, price, DeleteGame, EditGame, CreateGame}) => {
	return (
		<div className="w-100 f5 b card shadow-5 ba br4 bw1 pa1 tc ma2 bg-black-50 white">
			<button 
			className="gamecard red"
			onClick={()=>DeleteGame(gameId)}>
				Delete
			</button>
			<input className="gamecard w-20" type="text" name="imagelink" value={imageLink}/>
			<input className="gamecard w-20" type="text" name="name" value={gameName}/>
			<input className="gamecard w-20" type="text" name="price" value={price}/>
			<button 
			className="gamecard"
			onClick={()=>EditGame(gameId)}>
				Edit
			</button>
		</div>
	);
}

export default GamesCard;