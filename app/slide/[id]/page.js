'use client'


import { getAllIds, getSlideById } from "@/data/data";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import ProgressBar from "@/app/components/progressBar";
import Modal from "@/app/components/Modal";
import NextPrevButtons from "@/app/components/NextPrevButtons";
import iconViewImage from "../../../public/assets/shared/icon-view-image.svg";

export async function generateStaticParams() {
    const ids = getAllIds();

    return ids.map((id) => {
        return { id };
    });
}

export default function Page({params}) {
    const [show, setShow] = useState(false);
    const slide = getSlideById(params.id);
    const { name, artist, year, images, description, source } = slide;
    const slideNumber = parseInt(params.id);

    useEffect(() => {
        if (show) {
          document.body.style.overflow = "hidden";
        }
        if (!show) {
          document.body.style.overflow = "unset";
        }
      }, [show]);

    
    return (
        <div className={styles.mainContainer}>

<motion.main initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5, type: "tween" } }} exit={{ opacity: 0, transition: { duration: 0.5 } }} className={styles.main}>
        <div className={styles.imageContainer}>

            <div className={styles.imageHeroContainer}>
            <picture>
                <source media="(min-width: 768px)" width={475} height={560} srcSet={images.hero.large} />
                <img className={styles.imageHero} src={images.hero.small} width={654} height={560} alt={name} />
            </picture>
            <button className={styles.viewImageButton} onClick={() => setShow(true)}>
        <Image
          className={styles.iconViewImage}
          src={iconViewImage}
          width={12}
          height={12}
          alt="view image icon"
        />
        view image
      </button>
            </div>

            
            <div className={styles.name}>
            <h1 className="heading1">{name}</h1>
            </div>
            <div className={styles.artistName}>
            <h2 className="subhead1">{artist.name}</h2>
            </div>

            <Image className={styles.artistImage} src={artist.image} width={128} height={128} alt={artist.name}/>

        </div>

        

        <div className={styles.textContainer}>
            <div className={styles.year}>{year}</div>
            <p className={styles.description}>{description}</p>
            <a className="link2" href={source}>Go to source</a>
        </div>

        <ProgressBar slide={slideNumber} />

        <div className={styles.bottomPanel}>
        
            <div className={styles.container}>
                <span className="heading3">{name}</span>
                <span className="subhead2 black">{artist.name}</span>
            </div>

            <NextPrevButtons slide={slideNumber} />
        </div>
        
    </motion.main>

    <Modal show={show} setShow={setShow} image={images.gallery} name={name}/>
 


            
        </div>
    );
}