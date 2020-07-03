import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import BmiCalculator from './components/BmiCalculator/BmiCalculator';
import CatAgeConversion from './components/CatAgeConversion/CatAgeConversion';
import TextTransform from './components/TextTransform/TextTransform';
import Header from './pages/Header/Header';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="app">
       <Router>
        <Header />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
            <Route exact path="/BmiCalculator">
                <BmiCalculator />
            </Route>
            <Route exact path="/CatAgeConversion">
                <CatAgeConversion />
            </Route>
            <Route exact path="/TextTransform">
                <TextTransform />
            </Route>
        </Switch>
    </Router>
</div>
  );
}

export default App;
