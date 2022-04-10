/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
export default function Card({ title, price, image }) {
  return (
    <article className={styles.Card}>
      <h3>{title}</h3>
      <p>${price}</p>
      <img src={image} alt={title} />
    </article>
  );
}
