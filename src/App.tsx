import React from 'react';
import Card from './Card';
import { robots } from './robots';

class App extends React.Component {
  render() {
    return (
      <>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      </>
    );
  }
}

export default App;