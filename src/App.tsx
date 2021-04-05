import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Commitment from './pages/Commitment';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Home from './pages/Home';
import Registry from './pages/Registry';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/commitment" exact component={Commitment} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/guide" exact component={Guide} />
        <Route path="/registry" exact component={Registry} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
