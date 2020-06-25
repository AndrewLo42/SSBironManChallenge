import React from 'react';
import {NavLink} from 'react-router-dom';
import characters from './characters';
import CharacterSelects from './characterSelect';

class MeleeIronman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters,
      shuffledRoster: [],
      lineup: null,
      currentChar: 0
    }
    this.nextChar = this.nextChar.bind(this);
    this.randomize = this.randomize.bind(this);
  }

  componentDidMount() {
    this.randomize();
  }

  randomize(){
    let shuffled = this.state.characters;
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.setState({
      shuffledRoster: shuffled,
      lineup: shuffled,
      currentChar: 0
    });
  }

  loadLineUp() {

    return(
      <div className="col justify-content-center">
        <div className="row justify-content-center current-character">
          Current Character:
          <img className="ml-3" src={this.state.lineup[this.state.currentChar].image}></img>
        </div>
        <div className="row justify-content-between mt-5 game-options">
          <button className="">
            <NavLink to='/'>Go Home</NavLink>
          </button>
          <button onClick={this.nextChar}>Next</button>
          <button onClick={this.randomize}>Restart</button>
        </div>
      </div>
    )

  }

  nextChar() {
    if(this.state.currentChar < 25) {
      this.setState({ currentChar: this.state.currentChar + 1 })
    }

  }

  render(){
    if(!this.state.lineup){
      return (<div>loading...</div>)
    }
    return(
      <div className="container">
        <CharacterSelects characters={this.state.shuffledRoster} />
        {this.loadLineUp()}

      </div>
    )
  }
}

export default MeleeIronman;
