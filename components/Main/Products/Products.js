import styles from "./styles.module.scss";
import "bootstrap/dist/css/bootstrap-grid.css";
import data from "../../../products.json";
import Card from "./Card";
import { useEffect, useState } from "react";
export default function Products() {
  const [productsInScreen, setProductsInScreen] = useState([]);

  const getData = async () => {
    const productList = data.products_list;
    setProductsInScreen(productList);
  };
  useEffect(() => {
    getData();
  }, []);

  const updateProducts = async (category) => {
    const productList = data.products_list.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    setProductsInScreen(productList);
  };

  return (
    <section className={styles.productsSection}>
      <div className="container">
        <h2>Products</h2>
        <div className={styles.category}>
          <p onClick={getData}>All</p>
          <p onClick={() => updateProducts("Lamp")}>Lamp</p>
          <p onClick={() => updateProducts("Chair")}>Chair</p>
          <p onClick={() => updateProducts("Table")}>Table</p>
          <p onClick={() => updateProducts("Sofa")}>Sofa</p>
        </div>
        <div className={styles.products}>
          {productsInScreen.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
