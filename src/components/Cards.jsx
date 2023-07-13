import styles from "./Cards.module.css";

const Cards = (props) => {
  const { title, price, image, category } = props.item;

  const addToCart = () => {
    props.handleClick(props.item);
  };

  return (
    // <div className={styles.cards}>
    //   <div className={styles.image__box}>
    //     <img src={img} alt="item" />
    //   </div>
    //   <div className={styles.details}>
    //     <p>{title}</p>
    //     <p>{author}</p>
    //     <p>Price = {price}Rs</p>
    //     <button type="button" onClick={addToCart}>Add to Cart</button>
    //   </div>
    // </div>

    <div className={styles.cards}>
      <div className={styles.image__box}>
        <img src={image} alt="#" />
      </div>
      <div className={styles.details}>
        <p>{title}</p>
        <p>{`Category: ${category}`}</p>
        <p>{`Price: $ ${price}`}</p>
        <button type="button" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
