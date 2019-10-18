import React from 'react';
import GameCard from '../GameCard/GameCardCart';

const CardHolder = ({Games, OrderAction}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				Games.map((game, id) => {
					return (<GameCard 
						key={id} 
						gameId={game.id}
						imageLink={game.imageLink} 
						gameName = {game.gameName} 
						price = {game.price}
						OrderAction = {OrderAction}
					/>);
				})
			}
		</div>
	);
}

export default CardHolder;