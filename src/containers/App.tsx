import React, { ChangeEvent } from 'react';
import { Robot } from '../lib/types';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchfield: event.target.value,
    });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot: Robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
          searchfield={searchfield}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
