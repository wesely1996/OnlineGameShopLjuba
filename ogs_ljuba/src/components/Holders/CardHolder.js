import React from 'react';
import GameCard from '../Cards/GameCard';
import GameCardCart from '../Cards/GameCardCart';


const CardHolder = ({Games, AllGamesInCart, OrderAction, route, from, to}) => {

	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				route === 'main' ?
				Games.slice(from, to).map((game, id) => {
					return (
						<GameCard 
						key={id} 
						gameId={game._id}
						imageLink={game.imageLink} 
						gameName = {game.gameName} 
						price = {game.price}
						OrderAction = {OrderAction}
						/>
					);
				})
				:
				Games.slice(0, Games.length).map((game, id) => {
					return (
						<GameCardCart 
						aGiC = {AllGamesInCart}
						key={id} 
						gameId={game._id}
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