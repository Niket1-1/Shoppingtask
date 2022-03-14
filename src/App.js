import './App.css';
import Header from './components/Header';

import Home from './components/Home'


import { Redirect, Route, Switch } from 'react-router-dom';

import Cart from './components/Cart';


function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/cart" component={Cart} />


        <Redirect to="/" />
      </Switch>

    </>
  );
}

export default App;
