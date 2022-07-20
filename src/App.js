import React, { useState, useEffect } from "react";

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import LoadingScreen from "./pages/LoadingScreen";
import Accueil from "./pages/Accueil"
import Presentation from "./pages/Presentation"
import Galerie from "./pages/Galerie"
import Contact from "./pages/Contact"

import photos from './reducers/photos';
import presentation from './reducers/presentation';
import profil from './reducers/profil';
import categorie from "./reducers/categorie";
import selection from "./reducers/selection";

const store = createStore(combineReducers({ photos, presentation, profil, categorie, selection }));

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
            <Route path="/galerie" component={Galerie} />
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


