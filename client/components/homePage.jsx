import React from 'react';
import {NavLink} from 'react-router-dom'
import Pool from './charPool';
import CharacterSelects from './characterSelect'
import io from "socket.io-client";
import characters from './characters';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters
    }
  };

  render() {
    return (
      <div>
        <div className="">
          <CharacterSelects characters={this.state.characters}></CharacterSelects>
        </div>
        <button>
          <NavLink to="/melee-ironman">Start Game</NavLink>
        </button>
      </div>

    );
  }
}

export default Home;
