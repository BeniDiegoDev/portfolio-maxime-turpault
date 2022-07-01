import React, { useState, useEffect } from "react";

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoadingScreen from "./pages/LoadingScreen";
import Accueil from "./pages/Accueil"
import Presentation from "./pages/Presentation"
import Architectures from "./pages/Architectures"
import Paysages from "./pages/Paysages"
import Portraits from "./pages/Portraits"
import Contact from "./pages/Contact"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
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
    </>
  );
}

export default App;


