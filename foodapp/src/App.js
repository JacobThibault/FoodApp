import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Entrees from './components/Food/Entrees/Entrees';
import Combos from './components/Food/Combos/Combos';
import Sides from './components/Food/Sides/Sides';
import Drinks from './components/Food/Drinks/Drinks';
//hello!
//TEST
const App = () => {
  return (
      <Fragment>
        <Header />
          <main>
              <Entrees />
              <Sides />
              <Drinks />
              <Combos />
          </main>
      </Fragment>
  );
}

export default App;