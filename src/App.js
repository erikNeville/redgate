import React, {useLayoutEffect} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import ContactScreen from './screens/ContactScreen';
import EventsScreen from './screens/EventsScreen';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/navigation/Navbar';
import NewsScreen from './screens/NewsScreen';
import WinesScreen from './screens/WinesScreen';

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
          <Route path='/contact' component={ContactScreen} />
          <Route path='/events' component={EventsScreen} />
          <Route path='/news' component={NewsScreen} />
          <Route path='/wines' component={WinesScreen} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
