import React, { Component } from 'react';
import Main from '../Main/Main';
import './App.css';
import Games from '../../components/Games/Games';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			route: 'main',
			games: [],
			users: [],
			orders: [],
		};
	}

	//route manager
	onRouteChange = (route) => {
		this.setState({route: route});
	}

	render(){
		const {route} = this.state;

		return (
			<div className="App" style={{width: null, height: null}}>
				<Main onRouteChange={this.onRouteChange}/>
		    	{
					route == "orders" ? 
						<div className="f1 white">orders</div>
					:
					route == "games" ? 
						<Games/>
					:
					route == "chat" ? 
						<div className="f1 white">chat</div>
					:
						<div className="f1 white">Main</div>
				}
		    </div>
		);
	}
}

export default App;
