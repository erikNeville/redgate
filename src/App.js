import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import ContactScreen from './screens/ContactScreen';
import CreateEvent from './screens/Events/CreateEvent';
import EventsScreen from './screens/Events/EventsScreen';
import MenuScreen from './screens/menu/MenuScreen';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/navigation/Navbar';
import ForSaleScreen from './screens//retailers/ForSaleScreen';
import WinesScreen from './screens/wines/WinesScreen';

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children || null;
});

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/events' component={EventsScreen} />
          <Route path='/menu' component={MenuScreen} />
          <Route path='/retailers' component={ForSaleScreen} />
          <Route path='/wines' component={WinesScreen} />
          <Route path='/admin' component={CreateEvent} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
