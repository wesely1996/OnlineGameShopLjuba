import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import CardHolder from '../../components/CardHolder/CardHolder';
import Scroll from '../../components/Scroll/Scroll';
import {Games} from '../../props/Games.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			games: [],
			searchfield: '',
		}
	}

	componentDidMount(){
		/*fetch('https://alas.matf.bg.ac.rs/~mi15200/Games')
		.then(response => { return response.json();})
		.then(Games =>{ this.setState({games: Games});});*/
		this.setState({games: Games});
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	render(){
		const {games, searchfield} = this.state;

		const filteredGames = games.filter(game =>{
			return game.gameName.toLowerCase().includes(searchfield.toLowerCase());
		})

		if(!games.length){
			return (
			    <div className="App">
			      <Navigation/>
			      <Search searchChange={this.onSearchChange}/>
			      <h1 className="f1 b ma5 pa5 tc navy grow" style={{textShadow: 'gray 2px 0 10px'}}>
			      	LOADING
			      </h1>
			    </div>
			);
		}
		else{
			return (
			    <div className="App">
			      <Navigation/>
			      <Search searchChange={this.onSearchChange}/>
			      <Scroll>
			      	<CardHolder Games = {filteredGames}/>
			      </Scroll>
			    </div>
			);
		}
	}
}

export default App;
