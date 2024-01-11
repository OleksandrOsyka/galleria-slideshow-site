import { useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ show, setShow, image, name}) {
 
  if(show) {
    return (
      <div className={styles.modal}>
        <button
      className={styles.modalCloseButton}
      onClick={() => setShow(false)}
    >
      Close
    </button>
      
        <img
      className={styles.modalImage}
      src={image}
      alt={name}
    />
          
        </div>
    );
  }
}

