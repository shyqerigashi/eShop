import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

//Pages
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

//Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
