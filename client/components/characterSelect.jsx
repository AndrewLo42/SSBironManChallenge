import React from 'react';

class CharacterSelects extends React.Component {
  constructor(props) {
    super(props);
  }
  renderRows() {
    const rowOne = [];
    const rowTwo = [];
    const rowThree = [];
    for(let i = 0; i < this.props.characters.length; i++) {
      let character = this.props.characters[i];
      if(i < 9) {
        rowOne.push(
        <div className={` ${character.name}`} key={character.id}>
          <img src={character.css}></img>
        </div>);
      } else if (i < 18){
        rowTwo.push(
          <div className={` ${character.name}`} key={character.id}>
            <img src={character.css}></img>
          </div>);
      } else {
        rowThree.push(
          <div className={` ${character.name}`} key={character.id}>
            <img src={character.css}></img>
          </div>);
      }
    }
    return (
      <div className=" character-select container justify-content-center">
        <div className="row justify-content-center">
          {rowOne}
        </div>
        <div className="row justify-content-center">
          {rowTwo}
        </div>
        <div className="row justify-content-center">
          {rowThree}
        </div>

      </div>
    );
  }

  render() {
    return (
      <div className="">
        {this.renderRows()}
      </div>
    );
  }


}

export default CharacterSelects;
