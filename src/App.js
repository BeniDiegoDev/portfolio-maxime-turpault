import React, { useState, useEffect } from "react";

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import LoadingScreen from "./pages/LoadingScreen";
import Accueil from "./pages/Accueil"
import Presentation from "./pages/Presentation"
import Architectures from "./pages/Architectures"
import Paysages from "./pages/Paysages"
import Portraits from "./pages/Portraits"
import Contact from "./pages/Contact"

import photos from './reducers/photos';
import presentation from './reducers/presentation';
import profil from './reducers/profil';

const store = createStore(combineReducers({ photos, presentation, profil }));

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (

    <Provider store={store}>
    {!loading ? (
        <Router>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/presentation" component={Presentation} />
            <Route path="/architectures" component={Architectures} />
            <Route path="/paysages" component={Paysages} />
            <Route path="/portraits" component={Portraits} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      ) : (
        <LoadingScreen />
      )}
    </Provider>
  );
}

export default App;


