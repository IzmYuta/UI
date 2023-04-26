import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Home.module.css";

const API_BASE_URL = process.env.REACT_PUBLIC_API_BASE_URL;
console.log(API_BASE_URL);
interface Data {
  body: string;
  id: number;
}
const instanse = axios.create({
  baseURL: API_BASE_URL,
  // baseURL: "https://0.0.0.0:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

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
  
  const [data, setData] = useState<Data[]>([]);
  const fetchData = async () => {
    try {
      const response = await instanse.get("/home");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)

  const onButtonClick = useCallback(() => {
    navigate("/post");
  }, [navigate]);

  const cardBodies = data.map((item, index) => {
    return (
      <article className={styles[`cardbody${index}`]}>
        <p className={styles.allTheLorem}>
          {item.body}
        </p>
      </article>
    );
  });
  

  return (
    <div className={styles.home} data-animate-on-scroll>
      <header className={styles.header}>
        <button className={styles.logo}>
          <div className={styles.name}>
            <b className={styles.bootstrap}>Guchitter</b>
          </div>
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

