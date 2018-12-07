import React, { Component } from 'react';
import Home from './views/Home';
import Inspiration from './views/Inspiration';
import Prototype from './views/Prototype';
import FinalProduct from './views/FinalProduct';
import Impact from './views/Impact';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
        		<div>
          			<Route exact={true} path='/' render={() => (
            			<div className="App">
              				<Home />
            			</div>
          			)}/>
          			<Route exact={true} path='/inspiration' render={() => (
            			<div className="App">
              				<Inspiration />
            			</div>
          			)}/>
          			<Route exact={true} path='/prototype' render={() => (
            			<div className="App">
              				<Prototype />
            			</div>
          			)}/>
          			<Route exact={true} path='/finalproduct' render={() => (
            			<div className="App">
              				<FinalProduct />
            			</div>
          			)}/>
          			<Route exact={true} path='/impact' render={() => (
            			<div className="App">
              				<Impact />
            			</div>
          			)}/>
          			<Route exact={true} path='/signin' render={() => (
            			<div className="App">
              				<SignIn />
            			</div>
          			)}/>
          			<Route exact={true} path='/signup' render={() => (
            			<div className="App">
              				<SignUp />
            			</div>
          			)}/>
        		</div>
      		</BrowserRouter>
        );
    }
}

export default App;