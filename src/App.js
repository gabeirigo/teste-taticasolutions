import React from 'react';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from "./pages/Home";
import Instance from './pages/Instance';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/instance" component={Instance}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
