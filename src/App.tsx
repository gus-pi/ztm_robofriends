import React from 'react';
import { robots } from './robots';
import CardList from './CardList';

class App extends React.Component {
  render() {
    return (
      <>
        <CardList robots={robots} />
      </>
    );
  }
}

export default App;
