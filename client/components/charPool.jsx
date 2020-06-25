import React from 'react';
import io from 'socket.io-client';

class Pool extends React.Component {
  // const socket =  io('ws://localhost')
  constructor(props) {
    super(props);
  }
  renderCharacters(){
    const roster = this.props.characters.map( character =>
    <div className="character" key={character.id}>
      <img src={character.css}></img>
      {character.name}
    </div>);
    return roster;
  }

  render(){
    return (
      <div>
        {this.renderCharacters()}
      </div>
    );
  }


}

export default Pool;
