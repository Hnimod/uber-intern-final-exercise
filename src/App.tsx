import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import PrivateRoute from './shared/PrivateRoute';
import Booking from './pages/Booking';
import Commitment from './pages/Commitment';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Home from './pages/Home';
import Registry from './pages/Registry';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/booking" exact component={Booking} /> */}
        <PrivateRoute path="/booking" exact component={Booking} />
        <Route path="/commitment" exact component={Commitment} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/guide" exact component={Guide} />
        <Route path="/registry" exact component={Registry} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
