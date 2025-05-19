import { useState, useEffect } from "react";
import styles from "./DragBox.module.sass";

function DragBox() {
  const [boxPosition, setBoxPosition] = useState("");

  // function dragMousDown(e) {
  //   e
  // }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box}></div>
      </div>
    </main>
  );
}

export default DragBox;
