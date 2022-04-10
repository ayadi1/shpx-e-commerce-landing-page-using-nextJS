/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Ads() {
  return (
    <section className={styles.Ads}>
      <div className="container">
        <div className={styles.imageData}>
          <div className={styles.image}>
            <img src="/assets/images/image_2.png" alt="img" />
          </div>
          <div className={styles.data}>
            <h2>Showcase</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
              eleifend viverra nam libero tellus. Luctus ornare ac, dolor tempor
              pellentesque nec.{" "}
            </p>
            <div className={styles.arrows}>
              <div className={styles.arrow_1}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className={styles.arrow_2}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
