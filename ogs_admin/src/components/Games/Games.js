import React from 'react';
import GameCard from './GameCard';

const Games = ({FilteredGames}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				FilteredGames.map((game, id) => {
					return (
						<GameCard 
						key={id} 
						gameId={game._id}
						imageLink={game.imageLink} 
						gameName = {game.gameName} 
						price = {game.price}
						/>
					);
				})
			}
		</div>
	);
}

export default Games;