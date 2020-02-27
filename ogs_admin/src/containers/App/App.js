import React, { Component } from 'react';
import Main from '../Main/Main';
import './App.css';
import Games from '../../components/Games/Games';
import Search from '../../components/Search/Search';
import Scroll from '../../components/Scroll/Scroll';
import Orders from '../../components/Orders/Orders';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			route: 'orders',
			searchfield: '',
			games: [],
			//TODO-povezi sa funkcijom koja ce da ucitava users
			users: [],
			//TODO-povezi sa funkcijom koja ce da ucitava orders
			orders: [
				{"_id":"5dc32b19c70608121d30b67f",
				"UserId":"5dc32b19c70608121d30b67e",
				"Orders":[{"order":[{"orderId":"5da32eb68908133a20bff162","num":{"$numberInt":"1"}}],"stat":"pending"},
					{"order":[{"orderId":"5da32c558908133a20bff159","num":{"$numberInt":"1"}},
					{"orderId":"5da32c8f8908133a20bff15a","num":{"$numberInt":"1"}}],"stat":"pending"},
					{"order":[{"orderId":"5da32c098908133a20bff158","num":{"$numberInt":"1"}},
					{"orderId":"5da32c558908133a20bff159","num":{"$numberInt":"1"}},
					{"orderId":"5da32c8f8908133a20bff15a","num":{"$numberInt":"1"}}],"stat":"pending"},
					{"order":[{"orderId":"5da32c8f8908133a20bff15a","num":{"$numberInt":"2"}}],"stat":"pending"},
					{"order":[{"orderId":"5da32c8f8908133a20bff15a","num":{"$numberInt":"1"}},
					{"orderId":"5da32c558908133a20bff159","num":{"$numberInt":"1"}},
					{"orderId":"5da32c098908133a20bff158","num":{"$numberInt":"2"}}],"stat":"pending"}
				]},
			],
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

	deleteGame = (id) => {
		console.log("delete " + id);
	}

	editGame = (id) => {
		console.log("edit " + id);
	}

	createGame = () =>{
		console.log("new game");
	}

	render(){
		const {route, games, searchfield, users, orders} = this.state;

		const filteredGames = games.filter(game =>{
			return game.gameName.toLowerCase().includes(searchfield.toLowerCase());
		})

		const filterOrders = orders.filter(order => {
			return order.UserId.toLowerCase().includes(searchfield.toLowerCase());
		})

		return (
			<div className="App" style={{width: null, height: null}}>
				<Main onRouteChange={this.onRouteChange}/>
		    	{
					route === "orders" ? 
					<div>
						<Search searchChange={this.onSearchChange}/>
						<Scroll>
							<Orders FilteredOrders={filterOrders}/>
						</Scroll>
					</div>
					:
					route === "games" ? 
					<div>
						<Search searchChange={this.onSearchChange}/>
						<Scroll>
							<Games FilteredGames={filteredGames} DeleteGame={this.deleteGame}
							EditGame={this.editGame} CreateGame={this.createGame}/>
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
