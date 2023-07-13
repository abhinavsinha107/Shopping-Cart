import { useState } from "react";

import Navbar from "./components/Navbar";
import Items from "./components/Items";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const[warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let flag = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        flag = true;
      }
    });
    if(flag) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000)
      return;
    }
    setCart((prev) => {
      return [...prev, item];
    });
    // console.log(item);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <Navbar setShowCart={setShowCart} size={cart.length} warning={warning} />
      {showCart ? <Cart cart={cart} setCart={setCart} handleChange={handleChange} /> : <Items handleClick={handleClick} />}
    </>
  );
}

export default App;
