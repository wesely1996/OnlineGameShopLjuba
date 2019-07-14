import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import CardHolder from '../CardHolder/CardHolder';
import Scroll from '../Scroll/Scroll';
import {Games} from '../../props/Games.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			games: [],
			searchfield: '',
		}
		this.elements = {
			heightOfScroll : '450px',
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

		const filteredGames = this.state.games.filter(games =>{
			return games.gameName.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
		    <div className="App">
		      <Navigation/>
		      <Search searchChange={this.onSearchChange}/>
		      <Scroll height = {this.elements}>
		      	<CardHolder Games = {filteredGames}/>
		      </Scroll>
		    </div>
		);
	}
}

export default App;
