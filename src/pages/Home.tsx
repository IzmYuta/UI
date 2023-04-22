import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/post");
  }, [navigate]);

  const cardBodies = [];
  for (let i = 0; i < 4; i++) {
    cardBodies.push(
      <article className={styles[`cardbody${i}`]}>
        <p className={styles.allTheLorem}>
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </p>
      </article>
    );
  }

  return (
    <div className={styles.home} data-animate-on-scroll>
      <header className={styles.header}>
        <button className={styles.logo}>
          <div className={styles.name}>
            <b className={styles.bootstrap}>Guchitter</b>
          </div>
          {/* <div className={styles.ui}>
            <div className={styles.ui1}>UI</div>
          </div> */}
        </button>
        <b className={styles.designSystem}></b>
      </header>
      {cardBodies}
      <button className={styles.button} autoFocus onClick={onButtonClick}>
        <div className={styles.button1}>愚痴る！！</div>
      </button>
      <img className={styles.pencilFillIcon} alt="" src="/pencilfill.svg" />
    </div>
  );
};

export default Home;
