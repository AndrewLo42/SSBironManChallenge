import React from 'react';
import {NavLink} from 'react-router-dom';
import characters from './characters';
import CharacterSelects from './characterSelect';

class MeleeIronman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      characters: characters,
      shuffledRoster: [],
      lineup: null,
      currentChar: 0,
      previousRuns: []
    }
    this.nextChar = this.nextChar.bind(this);
    this.randomize = this.randomize.bind(this);
    this.newGame = this.newGame.bind(this);
    this.orderLineup = this.orderLineup.bind(this);
    this.reverseOrderLineup = this.reverseOrderLineup.bind(this);
  }

  componentDidMount() {
    this.randomize();
    setTimeout(()=>{this.setState({loaded: true})}, 500)
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

  newGame(){
    let score = this.state.currentChar === 25 ? 26 : this.state.currentChar
    let run = {
      characterNumbers: score,
      ended: this.state.lineup[this.state.currentChar]
    }
    let updateRun = this.state.previousRuns;
    updateRun.push(run);
    this.setState({previousRuns: updateRun})
    for(let i = 0; i < this.state.lineup.length; i++) {
      document.getElementById(`${this.state.lineup[i].id}`).classList.remove("grayed");
    }
    this.randomize();
  }

  loadLineUp() {
    let showNext = <div></div>
    if (this.state.currentChar < 25 ) {
       showNext = (<img className={`${showNext} ml-3`} src={this.state.lineup[this.state.currentChar + 1].image}></img>)
    } else {
      showNext = <div></div>
    }
    return(
      <div className="col justify-content-center">
        <div className="row justify-content-center current-character">
          Current Character:
          <img className="ml-3" src={this.state.lineup[this.state.currentChar].image}></img>
        </div>
        <section>
          <div>Remaining: {25- this.state.currentChar}</div>
          <div>
            Next Character:
            {showNext}
          </div>
        </section>

        <div className="row justify-content-sm-between justify-content-center mt-3 game-options">
          <div className="angle-button nav-button">
            <NavLink className="nav-link" to='/'>Go Home</NavLink>
          </div>
          <div className="angle-button nav-button" onClick={this.nextChar}>
            <div className="inner-button">Next</div>
          </div>
          <div className="angle-button nav-button" onClick={this.newGame}>
            <div className="inner-button">Restart</div>
          </div>
        </div>
      </div>
    )

  }

  orderLineup() {
    if(this.state.currentChar === 0) {
      let ordered = this.state.characters;
      ordered.sort((a,b) => {
        return a.id - b.id;
      });
      this.setState({lineup: ordered});
    }
  }
  reverseOrderLineup() {
    if(this.state.currentChar === 0) {
      let ordered = this.state.characters;
      ordered.sort((a, b) => {
        return b.id - a.id;
      });
      this.setState({ lineup: ordered });
    }
  }

  loadOptions() {
    let hiddenClass = "faded"
    if(this.state.currentChar === 0) {
      hiddenClass = "show-options"
    }
      return(<div className={`${hiddenClass} options-row mt-2 row justify-content-center`}>
        <button onClick={this.orderLineup}>Play in Order</button>
        <button onClick={this.reverseOrderLineup}>Play in Reverse</button>
      </div>)

  }

  nextChar() {
    if(this.state.currentChar < 25) {
      document.getElementById(`${this.state.lineup[this.state.currentChar].id}`).classList.add("grayed")
      this.setState({ currentChar: this.state.currentChar + 1 })
    } else {
      this.newGame();
    }
  }

  loadPreviousRuns(){
    const runsList = this.state.previousRuns.map((run, index) =>
      <div key={`${index}`} className="previous-run">
        <div>Score: {run.characterNumbers}</div>
        <div>Ended on:  <img src={run.ended.image} /></div>

      </div>
    )
    return runsList;
  }

  render(){
    if(!this.state.loaded){
      return (
      <div>
        <div>
          <h1>Gathering Fighters...</h1>
          <div className="loading-icon-container">
           <img className="pulse-load" src="./images/smashbros.png"></img>
          </div>
        </div>

      </div>
      )}
    return(
      <div className="container ironman-game">
        <CharacterSelects characters={this.state.shuffledRoster} />
        {this.loadOptions()}
        {this.loadLineUp()}
        <div id="runs" className="runs-container">
          {this.loadPreviousRuns()}
        </div>
      </div>
    )
  }
}

export default MeleeIronman;
