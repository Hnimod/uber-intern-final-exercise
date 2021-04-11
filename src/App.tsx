import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Commitment from './pages/Commitment';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Home from './pages/Home';
import SuggestLocation from './pages/SuggestLocation';
import Registry from './pages/Registry';
import FindLocation from './pages/FindLocation';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/commitment" exact component={Commitment} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/guide" exact component={Guide} />
        <Route path="/suggest-location" exact component={SuggestLocation} />
        <Route path="/registry" exact component={Registry} />
        <Route path="/find-location" exact component={FindLocation} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
