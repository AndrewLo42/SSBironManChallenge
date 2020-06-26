import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './homePage';
import MeleeIronman from './ironmanMelee';
import Header from './header';
class App extends React.Component {

  render(){
    return(
      <div>
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/melee-ironman" component={MeleeIronman}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}
//<Route path="/" render={(props) => <Home {...props} />} />
export default App;
