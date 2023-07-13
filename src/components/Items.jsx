import styles from "./Items.module.css";

import list from "../data";
import Cards from "./Cards";

import axios from "axios";
import { useEffect, useState } from "react";

const Items = ({ handleClick }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        res.data.forEach((item) => {
          item.amount = 1;
          item.price = Math.floor(item.price);
        })
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className={styles.section}>
      {loading && (
        <div style={{textAlign: "center", marginTop: "3rem"}}>
          <h1>Loading...</h1>
        </div>
      )}

      {data.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );

  // return (
  //   <section className={styles.section}>
  //     {list.map((item) => {
  //       return <Cards item={item} key={item.id} handleClick={handleClick} />;
  //     })}
  //   </section>
  // );
};
export default Items;
