import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import A1 from './html/A1';
import Home from './html/Home';
import A2 from './html/A2';
import A3 from './html/A3';
import A4 from './html/A4';
import A5 from './html/A5';
import A6 from './html/A6';
import A7 from './html/A7';
import A8 from './html/A8';
import A9 from './html/A9';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/1">
            <A1 />
          </Route>
          <Route exact path="/2">
            <A2/>
          </Route>
          <Route exact path="/3">
            <A3/>
          </Route>
          <Route exact path="/4">
            <A4/>
          </Route>
          <Route exact path="/5">
            <A5/>
          </Route>
          <Route exact path="/6">
            <A6/>
          </Route>
          <Route exact path="/7">
            <A7/>
          </Route>
          <Route exact path="/8">
            <A8/>
          </Route><Route exact path="/9">
            <A9/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
