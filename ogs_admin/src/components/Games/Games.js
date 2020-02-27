import React from 'react';
import GameCard from './GameCard';

const Games = ({FilteredGames, DeleteGame, EditGame, CreateGame}) => {
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
						DeleteGame={DeleteGame}
						EditGame = {EditGame}
						CreateGame = {CreateGame}
						/>
					);
				})
			}
		</div>
	);
}

export default Games;