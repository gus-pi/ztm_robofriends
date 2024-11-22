import React, { ChangeEvent } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robot } from './lib/types';
import './App.css';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      robots: robots,
      searchfield: '',
    };
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
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
          searchfield={this.state.searchfield}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
