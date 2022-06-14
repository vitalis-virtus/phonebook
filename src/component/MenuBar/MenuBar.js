import React from "react";
import styles from "./MenuBar.module.scss";

export default function MenuBar({ active, setActive, items }) {
  return (
    <div
      className={active ? styles.menu_active : styles.menu}
      onClick={() => setActive(false)}
    >
      <div className={styles.blur}></div>

      <ul className={styles.menu_content} onClick={event=>{event.stopPropagation()}}>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}
  