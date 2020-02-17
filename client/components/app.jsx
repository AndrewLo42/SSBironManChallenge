import React from 'react';
import {'Pool'} from './charPool';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state({
      characters: [];
    });
  }

  render(){
    return(
      <Pool></Pool>
    );
  }
}
