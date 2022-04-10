import Products from "./Products/Products";
import styles from "./styles.module.scss";
import Ads from "./Ads/Ads";
export default function Main() {
  return (
    <main className={styles.main}>
      <Products />
      <Ads />
    </main>
  );
}
