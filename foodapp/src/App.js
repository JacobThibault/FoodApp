import React, {useState, Fragment} from 'react';
import './App.css'
import Header from './components/Layout/Header';
import Combos from "./components/Food/Combos/Combos";
//TEST
const App = () => {
  return (
      <Fragment>
        <Header />
          <main>
            <Combos />
          </main>
      </Fragment>
  );
}

export default App;