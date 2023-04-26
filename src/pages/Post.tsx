import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import styles from "./Post.module.css";


interface IPostData {
  body: string;
}

const instanse = axios.create({
  baseURL: "https://guchitter-production.up.railway.app/api",
  // baseURL: "https://0.0.0.0:8000/api",
  headers: {
    "Content-Type": "application/json",
    "Referrer-policy": "unsafe-url",
  },
});

const Post: FunctionComponent = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState("");

  const handleTextareaChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setBody(event.target.value);
    },
    []
  );

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSubmit = useCallback(() => {
    const postData: IPostData = {
      body,
    };

    instanse.post("/post", postData)
    .then((response) => {
      console.log(response.data);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
  }, [body,navigate]);

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <button className={styles.logo} onClick={onLogoClick}>
          <div className={styles.name}>
            <b className={styles.bootstrap}>Guchitter</b>
          </div>
        </button>
        <b className={styles.designSystem}></b>
      </div>
      <div className={styles.textarea}>
        <div className={styles.label}>Label</div>
        <textarea
          className={styles.content}
          placeholder="愚痴を書け！！"
          onChange={handleTextareaChange}
        />
        <div className={styles.helpText}>Help Text</div>
      </div>
      <button className={styles.button} onClick={handleSubmit}>
        <div className={styles.button1}>投稿する！！</div>
      </button>
    </div>
  );
};
export default Post;
