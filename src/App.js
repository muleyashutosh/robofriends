import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        // console.log(event.target.value)
        this.setState({ searchfield: event.target.value })
        // console.log(filteredRobots)
    }

    render() {
        const filteredRobots = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield);
        })
        return (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox onChange={this.onSearchChange}/> 
                <CardList robots = {filteredRobots} />
            </div>
        );
    }
}

export default App;

