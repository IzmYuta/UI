import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Post.module.css";

const Post: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <button className={styles.logo} onClick={onLogoClick}>
          <div className={styles.name}>
            <b className={styles.bootstrap}>Guchitter</b>
          </div>
          {/* <div className={styles.ui}>
            <div className={styles.ui1}></div>
          </div> */}
        </button>
        <b className={styles.designSystem}></b>
      </div>
      <div className={styles.textarea}>
        <div className={styles.label}>Label</div>
        <textarea className={styles.content} placeholder="愚痴を書け！！" />
        <div className={styles.helpText}>Help Text</div>
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>投稿する！！</div>
      </button>
    </div>
  );
};

export default Post;
