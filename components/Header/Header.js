/* eslint-disable @next/next/no-img-element */
import styles from "./style.module.scss";
import "bootstrap/dist/css/bootstrap-grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faBars,
  faXmarkLarge,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const showMenu = () => {
    document.getElementById("mobileMenu").classList.add("showMenu");
    document.getElementById("mobileMenu").classList.remove("hideMenu");
  };
  const hideMenu = () => {
    document.getElementById("mobileMenu").classList.remove("showMenu");
    document.getElementById("mobileMenu").classList.add("hideMenu");
  };
  return (
    <header className={styles.header}>
      <nav>
        <div className="container">
          <div className={styles.navItems}>
            <h1>SHPX</h1>
            <ul className={styles.links}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className={styles.socialIcons}>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
            </ul>
            <div className={styles.menuIcon} onClick={showMenu}>
              <FontAwesomeIcon icon={faBars} color="#000" />
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.infoImage}>
        <div className="container">
          <div className={styles.info}>
            <h2>Modern Interior for your Dream House</h2>
            <p>We custom make design to suits your needs.</p>
          </div>
          <div className={styles.image}>
            <img alt="header image" src="/assets/images/image_1.png" />
          </div>
        </div>
      </div>
      <div className={styles.mobileMenu} id="mobileMenu">
        <div className={styles.buttons} onClick={hideMenu}>
          X
        </div>
        <ul>
          <li>
            <a onClick={hideMenu} href="#">
              Home
            </a>
          </li>
          <li>
            <a onClick={hideMenu} href="#">
              About
            </a>
          </li>
          <li>
            <a onClick={hideMenu} href="#">
              Products
            </a>
          </li>
          <li>
            <a onClick={hideMenu} href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
