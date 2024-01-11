import styles from "./progressBar.module.css";

export default function ProgressBar({ slide }) {
    let width = (100 / 15) * slide;
    return (<div id={styles.progressBar}>
        <div id={styles.bar} style={{ width: `${width}%`}}></div>
    </div>);
}