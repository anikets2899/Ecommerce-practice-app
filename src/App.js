import { useEffect } from 'react';
import './App.css';
import Ecommerce from './Ecommerce';
import Header from './Header';
import Checkout from './checkout';

function App() {
  return (
    <div className="App">
      <Header/>
      <Checkout/>
      <Ecommerce/>
    </div>
  );
}

export default App;
