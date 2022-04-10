import styles from "./styles.module.scss";
import "bootstrap/dist/css/bootstrap-grid.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.mainFooter}>
          <h2>Get your quotation today</h2>
          <div className={styles.links}>
            <a className={styles.Quote} href="#">
              Quote me
            </a>
            <a className={styles.Contact} href="#">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
