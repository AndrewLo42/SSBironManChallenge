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
      <div className="mt-4 text-center">
        <div className="">
          <h1>What is an Ironman?</h1>
          <p>
            The idea behind an Ironman is to test each player's ability to play a variety of characters.
          </p>
          <p>
            Online, the rules are simply that you must play as every single character in the game without losing once. <br/>
            Whenever you beat a player, you can't play the player a second time unless you happens to run into them again.
          </p>
          <p>
            More lenient rules being that you don't have to restart after a loss.
          </p>
          <p>
            Against another player, each player go through the roster with each victory, and the loser stays on the character they lost with.
          </p>
        </div>
        <h3>
          Why this app?
        </h3>
        <p>
          With the release of Slippi 2.0 and matchmaking, online Melee ironmans are doable in similar fashion to Ultimate's ironman challenge and it's fun!
        </p>
        <div className="row justify-content-center">
          <section className="mr-4">
            <h2>Melee Ironman</h2>
            <button>
              <NavLink to="/melee-ironman">Start Challenge</NavLink>
            </button>
          </section>
          <section className="ml-4">
            <h2>Ultimate Ironman</h2>
          Coming Soon...
          </section>
        </div>


      </div>

    );
  }
}

export default Home;