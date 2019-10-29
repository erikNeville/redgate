import React, {useLayoutEffect} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import EventsScreen from './screens/EventsScreen';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/navigation/Navbar';

const ScrollToTop = withRouter(({children, location: {pathname}}) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return children || null;
})

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/events' component={EventsScreen} />
      </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
