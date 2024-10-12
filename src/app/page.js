import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button
        sx={{
          bgcolor: "red",
          px: 6
        }}
      variant="contained">Contained</Button>
    </div>
  );
}
