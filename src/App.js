import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
