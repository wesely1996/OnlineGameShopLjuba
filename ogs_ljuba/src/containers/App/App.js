import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import CardHolder from '../../components/CardHolder/CardHolder';
import Scroll from '../../components/Scroll/Scroll';
import SignIn from '../../components/SignIn/SignIn';
import Registration from '../../components/Registration/Registration';
import {Games} from '../../props/Games.js';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			games: [],
			searchfield: '',
			height: 450,
			route: 'main',
			isSignedIn: false,
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount(){
		/*fetch('https://alas.matf.bg.ac.rs/~mi15200/Games')
		.then(response => { return response.json();})
		.then(Games =>{ this.setState({games: Games});});*/
		this.setState({games: Games});
		this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
	}

	componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({height: window.innerHeight });
    }

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	onRouteChange = (route) => {
		if(route === 'singout'){
			this.setState({route: 'main', isSignedIn: false});
		}
		else{
			this.setState({route: route});
			if(route === 'main' && !this.state.isSignedIn){
				this.setState({isSignedIn: true});
			}
		}
	}

	render(){
		const {games, searchfield, height, route, isSignedIn} = this.state;

		const filteredGames = games.filter(game =>{
			return game.gameName.toLowerCase().includes(searchfield.toLowerCase());
		})

		return (
			<div className="App">
		      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
		      {
			    route === 'register' ?
			    <Registration onRouteChange = {this.onRouteChange}/> :
			    route === 'signin' ?
			    <SignIn onRouteChange = {this.onRouteChange}/> :
			    route === 'main' ?
			    <div>
			    	<Search searchChange={this.onSearchChange}/>
			    	{
			    		!games.length ?
			    		<h1 className="f1 b ma5 pa5 tc navy grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
					    </h1> :
					    <Scroll height={height}>
					      	<CardHolder Games = {filteredGames}/>
					    </Scroll>
			    	}
			    </div> : 
			    <h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
			    	!UNKNOWN ROUTE!
			    </h1>
		      }
		      <div className="ma1 pa1" style={{fontSize:'10px', height: "15px", display: 'flex', flexDirectino: 'row', justifyContent: 'center'}}>
		      	<img src="/images/copyright.png" alt="c" style={{height: '7px'}}/> 
		      	<div className="tc">Copyright 2019 <span className="red b"> N&T</span></div>
	      	  </div>
		    </div>
		);
	}
}

export default App;
