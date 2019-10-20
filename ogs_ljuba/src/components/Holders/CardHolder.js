import React from 'react';
import GameCard from '../Cards/GameCard';
import GameCardCart from '../Cards/GameCardCart';

const CardHolder = ({Games, OrderAction, route}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				Games.map((game, id) => {
					return (
						route === 'main' ?
						<GameCard 
						key={id} 
						gameId={game.id}
						imageLink={game.imageLink} 
						gameName = {game.gameName} 
						price = {game.price}
						OrderAction = {OrderAction}
						/>:
						<GameCardCart 
						key={id} 
						gameId={game.id}
						imageLink={game.imageLink} 
						gameName = {game.gameName} 
						price = {game.price}
						OrderAction = {OrderAction}
						/>
					);
				})
			}
		</div>
	);
}

export default CardHolder;