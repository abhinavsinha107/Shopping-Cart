import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';

const Cart = ({cart, setCart, handleChange}) => {
  const [price, setprice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += (item.amount * item.price);
    })
    setprice(ans);
  }

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart);
  }

  useEffect(() => {
    handlePrice();
  })

  if(cart.length === 0) {
    return(
      <div className={styles.empty}>
        <h1>No Items in Cart</h1>
      </div>
    )
  }

  return (
      <article>
        {cart.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className={styles.cart_box}>
                <div className={styles.cart_desc}>
                  <img src={item.image} alt="Product" />
                  <div>{item.title}</div>
                </div>
                <div className={styles.btn}>
                  <button onClick={() => handleChange(item, -1)} disabled={item.amount === 1}> - </button>
                  <div>{item.amount}</div>
                  <button onClick={() => handleChange(item, +1)}> + </button>
                </div>
                <div className={styles.price}>
                  <div>$ {item.price}</div>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
              <hr />
            </React.Fragment>
          );
        })}
        <div className={styles.total}>
          <span className={styles.priceTag}>Total Price of your Cart</span>
          <span className={styles.subTotal}>$ {price}</span>
        </div>
      </article>
  )
}
export default Cart