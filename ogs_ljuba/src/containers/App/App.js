import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import CardHolder from '../CardHolder/CardHolder';
import {Games} from '../../props/Games.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			games: Games,
			searchfield: '',
		}
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}

	render(){
		
		const filteredGames = this.state.games.filter(games =>{
			return games.gameName.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
		    <div className="App">
		      <Navigation/>
		      <Search searchChange={this.onSearchChange}/>
		      <CardHolder Games = {filteredGames}/>
		    </div>
		);
	}
}

export default App;
