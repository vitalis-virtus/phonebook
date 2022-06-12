import React from "react";
import styles from "./MenuBar.module.scss";

export default function MenuBar({ active, setActive, items }) {
  return (
    <div
      className={active ? styles.menu_active : styles.menu}
      onClick={() => setActive(false)}
    >
      <div className={styles.blur}></div>

      <div className={styles.menu_content} onClick={event=>{event.stopPropagation()}}>
        <div>{items.map((item) => item)}</div>
      </div>
    </div>
  );
}
