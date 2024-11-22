import React, { ChangeEvent } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robot } from './lib/types';
import './App.css';
import Scroll from './Scroll';

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
    const filteredRobots = this.state.robots.filter((robots: Robot) =>
      robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox
            searchChange={this.onSearchChange}
            searchfield={this.state.searchfield}
          />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
