import React, {Component} from 'react';
import CardList from '../components/CardList';
import SeachBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
  constructor() {
    super()
      this.state = {
        robots: [],
        searchfield: ''
      }
  }

  componentDidMount() {
    fetch(`https:jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
      .then(users => this.setState({ robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.username.toLowerCase().includes(searchfield.toLowerCase());
    });


    // optional ternary
    // return !robots.length ? <h1>loading</h1> : ( <CardList robots={filteredRobots}/>)

    if(robots.length === 0) { // optional !robots.length
      return <h1 className="tc">Loading - Please Wait</h1>
    } else {
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <p>Coming soon - a feature to add and favorite robots!</p>
          <SeachBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>

      )
    }
  }
}

export default App;