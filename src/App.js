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
import A10 from './html/A10';
import A11 from './html/A11';
import A12 from './html/A12';
import A13 from './html/A13';
import A14 from './html/A14';
import A15 from './html/A15';
import A16 from './html/A16';
import A17 from './html/A17';
import A18 from './html/A18';
import A19 from './html/A19';
import A20 from './html/A20';
import A21 from './html/A21';
import A22 from './html/A22';
import A23 from './html/A23';
import A24 from './html/A24';
import A25 from './html/A25';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/1">
            <A1 />
          </Route>
          <Route exact path="/2">
            <A2 />
          </Route>
          <Route exact path="/3">
            <A3 />
          </Route>
          <Route exact path="/4">
            <A4 />
          </Route>
          <Route exact path="/5">
            <A5 />
          </Route>
          <Route exact path="/6">
            <A6 />
          </Route>
          <Route exact path="/7">
            <A7 />
          </Route>
          <Route exact path="/8">
            <A8 />
          </Route>
          <Route exact path="/9">
            <A9 />
          </Route>

          <Route exact path="/10">
            <A10 />
          </Route>

          <Route exact path="/11">
            <A11 />
          </Route>
          <Route exact path="/12">
            <A12 />
          </Route>
          <Route exact path="/13">
            <A13 />
          </Route>
          <Route exact path="/14">
            <A14 />
          </Route>
          <Route exact path="/15">
            <A15 />
          </Route>
          <Route exact path="/16">
            <A16 />
          </Route>
          <Route exact path="/17">
            <A17 />
          </Route>
          <Route exact path="/18">
            <A18 />
          </Route>
          <Route exact path="/19">
            <A19 />
          </Route>
          <Route exact path="/20">
            <A20 />
          </Route>
          <Route exact path="/21">
            <A21 />
          </Route>
          <Route exact path="/22">
            <A22 />
          </Route>
          <Route exact path="/23">
            <A23 />
          </Route>
          <Route exact path="/24">
            <A24 />
          </Route>
          <Route exact path="/25">
            <A25 />
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
