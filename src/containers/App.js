import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        // console.log('constructor')
    }

    componentDidMount() {
        // console.log('componentDidMount')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({robots: users})
            })
        
    }

    onSearchChange = (event) => {
        // console.log(event.target.value)
        this.setState({ searchfield: event.target.value })
        // console.log(filteredRobots)
    }

    render() {
        const { robots, searchfield} = this.state
        const filteredRobots = robots.filter(robo => {
            return robo.name.toLowerCase().includes(searchfield);
        })
        // console.log('render')
        return (!robots.length ? 
            (<h1 className ='tc f1'>Loading</h1> ): 
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox onChange={this.onSearchChange}/> 
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        );
    }
}

export default App;

