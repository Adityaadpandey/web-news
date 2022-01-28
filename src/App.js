import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import A1 from './html/A1';
import Home from './html/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Apple_unveils_AirTag">
            <A1 />
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
