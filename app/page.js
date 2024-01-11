'use client'

import { getThumbnails } from "../data/data";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Masonry from "./components/Masonry";

export default function Page() {
  const thumbnails = getThumbnails();
  const [ columnCount, setColumnCount ] = useState(1);
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth >= 768 && window.innerWidth < 1200) {
        setColumnCount(2);
      }
  
      if(window.innerWidth >= 1200) {
        setColumnCount(4);
      }
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => removeEventListener("resize", handleResize);
    
  }, []);
  

  return (
    <motion.main initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5, type: "tween" } }} exit={{ opacity: 0, transition: { duration: 0.5 } }} className={styles.main}>
     <Masonry cards={thumbnails} columnCount={columnCount}/>
      </motion.main>
  );
}