import React, {useState} from 'react';
import './App.css'
import Header from './components/Layout/Header';
import Combos from "./components/Food/Combos/Combos";
import Drinks from "./components/Food/Drinks/Drinks";
import Entrees from "./components/Food/Entrees/Entrees";
import Sides from "./components/Food/Sides/Sides";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
      setCartIsShown(true);
  };

  const hideCartHandler = () => {
      setCartIsShown(false);
  };

  return (
      <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler}/>}
          <Header onShowCart={showCartHandler}/>
          <main>
              <Combos />
          </main>
      </CartProvider>
  );
}

export default App;