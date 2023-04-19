import { FunctionComponent } from "react";
import styles from "./Post.module.css";

const Post: FunctionComponent = () => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.name}>
            <b className={styles.bootstrap}>Bootstrap</b>
          </div>
          <div className={styles.ui}>
            <div className={styles.ui1}>UI</div>
          </div>
        </div>
        <b className={styles.designSystem}>Design System</b>
      </div>
      <div className={styles.textarea}>
        <div className={styles.label}>Label</div>
        <textarea className={styles.content} placeholder="愚痴を書け！！" />
        <div className={styles.helpText}>Help Text</div>
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>Button</div>
      </button>
    </div>
  );
};

export default Post;
