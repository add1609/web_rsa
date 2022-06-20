import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <Link href="/keygen"><a>webRSA!</a></Link>
				</h1>

				<p className={styles.description}>
					Generiere deinen Schlüsselring unter{" "}
					<code className={styles.code}>Schlüssel erzeugen</code>
				</p>

				<div className={styles.grid}>
					<Link href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)">
						<a className={styles.card}>
							<h2>Anleitung &rarr;</h2>
							<p>Lerne das RSA-Verfahren besser kennen.</p>
						</a>
					</Link>

					<Link href="/keygen">
						<a className={styles.card}>
							<h2>Schlüssel erzeugen &rarr;</h2>
							<p>Erzeuge interaktiv deinen einzigartigen Schlüsselring.</p>
						</a>
					</Link>

					<Link href="https://documenter.getpostman.com/view/19042122/UzBmMSyV">
						<a className={styles.card}>
							<h2>Ver-/Entschlüsseln &rarr;</h2>
							<p>Ver und -/Entschlüssel deine Nachrichten.</p>
						</a>
					</Link>

					<Link href="https://github.com/add1609">
						<a className={styles.card}>
							<h2>Github &rarr;</h2>
							<p>Schaue dir den Quellcode auf Github an.</p>
						</a>
					</Link>
				</div>
			</main>
		</div>
	);
}
