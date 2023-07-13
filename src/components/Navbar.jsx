import styles from "./Navbar.module.css";

const Navbar = ({ setShowCart, size, warning }) => {
  return (
    <nav className={styles.nav}>
      <h1 onClick={() => setShowCart(false)}>Shopping Website</h1>
      <div className={styles.cart} onClick={() => setShowCart(true)}>
        <span>
          <i className="fas fa-cart-plus"></i>
        </span>
        <span>{size}</span>
      </div>
      {warning && (
        <div className={styles.warning}>Item already added to cart</div>
      )}
    </nav>
  );
};
export default Navbar;
