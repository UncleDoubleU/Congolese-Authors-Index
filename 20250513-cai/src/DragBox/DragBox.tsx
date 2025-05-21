import { useState, useEffect, useRef } from "react";
import styles from "./DragBox.module.sass";

function DragBox() {
  const [boxX, setBoxX] = useState(0);
  const [boxY, setBoxY] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const contRef = useRef<HTMLDivElement>(null);

  const [boxPos, setBoxPos] = useState({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!contRef.current || !boxRef.current) return;

    const cont = contRef.current;
    const box = boxRef.current;

    box.addEventListener("mousedown")
  });

  function handleMouseDown(e) {
    setIsDragged(true);
    console.log(isDragged);
  }

  return (
    <main className={styles.main}>
      <div
        onMouseDown={handleMouseDown}
        ref={contRef}
        className={styles.container}
      >
        <div ref={boxRef} className={styles.box}></div>
      </div>
    </main>
  );
}

export default DragBox;
