import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Card({ name, image, height, artist, id}) {
   return(
    <Link className={styles.link} href={"slide/" + id}>
            <div className={styles.card}>
                <img className={styles.image} src={image} width={327} height={height} alt={name} />
                <div className={styles.textBlock}>
                    <span className="heading2">{name}</span>
                    <span className="subhead2">{artist}</span>
                </div>
                <div className={styles.overlay}></div>
            </div>
            </Link>
   );
}