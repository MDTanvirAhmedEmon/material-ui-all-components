import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button variant="contained">Contained</Button>
    </div>
  );
}
