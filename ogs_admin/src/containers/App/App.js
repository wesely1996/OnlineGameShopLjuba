import React, { Component } from 'react';
import Main from '../Main/Main';
import './App.css';
import Games from '../../components/Games/Games';
import Search from '../../components/Search/Search';
import Scroll from '../../components/Scroll/Scroll';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			route: 'games',
			searchfield: '',
			games: [],
			users: [],
			orders: [],
		};
	}

	//get all games and place them in an array
	getGames = () => {
		fetch('http://localhost:3000/games', {
			method: 'get',
			headers: {'Content-type':'application/json'},
		})
		.then(response => response.json())
		.then(Games => {
			this.setState({games: Games});
		})
	}

	componentDidMount(){
		this.getGames();
	}

	//route manager
	onRouteChange = (route) => {
		this.setState({route: route});
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	render(){
		const {route, games, searchfield, users, orders} = this.state;

		const filteredGames = games.filter(game =>{
			return game.gameName.toLowerCase().includes(searchfield.toLowerCase());
		})

		return (
			<div className="App" style={{width: null, height: null}}>
				<Main onRouteChange={this.onRouteChange}/>
		    	{
					route === "orders" ? 
						<div className="f1 white">orders</div>
					:
					route === "games" ? 
					<div>
						<Search searchChange={this.onSearchChange}/>
						<Scroll>
							<Games FilteredGames={filteredGames}/>
						</Scroll>
					</div>
					:
					route === "chat" ? 
						<div className="f1 white">chat</div>
					:
						<div></div>
				}
				<div className="ma1 pa1" style={{fontSize:'10px', height: "20px", display: 'flex', justifyContent: 'center', bottom: '0'}}>
				  <div className = "bg-black" style={{display: 'flex', flexDirectino: 'row'}}>
				  	<img src="/images/copyright.png" alt="c" style={{height: '7px'}}/> 
		      		<div className="white">Copyright 2019 <span className="red b"> N&T</span></div>
				  </div>
	      	  	</div>
		    </div>
		);
	}
}

export default App;
