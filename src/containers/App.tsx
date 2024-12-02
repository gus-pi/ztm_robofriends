import { ChangeEvent, useEffect, useState } from 'react';
import { Robot } from '../lib/types';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchfield, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  {
    const filteredRobots = robots.filter((robot: Robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} searchfield={searchfield} />
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
