import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{" "}
                <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
            </a>
        </footer>
    );
}