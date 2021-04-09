import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js using tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Welcome to{" "}
        <a href="https://derealize.com">Derealize - Tailwindcss Studio!</a>
      </h1>
      <main className={styles.main}>
        <p>
          <Link href="/Welcome">
            <a>Welcome</a>
          </Link>
          <Link href="/Play">
            <a>Play</a>
          </Link>
        </p>
        <p className="flex">
          <Link href="/Sizing">
            <a>Sizing</a>
          </Link>
          <Link href="/Color">
            <a>Color</a>
          </Link>
          <Link href="/Typography">
            <a>Typography</a>
          </Link>
          <Link href="/Shadows">
            <a>Shadows</a>
          </Link>
        </p>
        <p className="flex">
          <Link href="/build-anything/Simple">
            <a>Simple</a>
          </Link>
          <Link href="/build-anything/Playful">
            <a>Playful</a>
          </Link>
          <Link href="/build-anything/Elegant">
            <a>Elegant</a>
          </Link>
          <Link href="/build-anything/Brutalist">
            <a>Brutalist</a>
          </Link>
        </p>
        <p>
          <Link href="/Performance">
            <a>Performance</a>
          </Link>
          <Link href="/Responsive">
            <a>Responsive</a>
          </Link>
          <Link href="/States">
            <a>States</a>
          </Link>
        </p>
        <p>
          <Link href="/component/Recipes">
            <a>Component</a>
          </Link>
          <Link href="/ApplyDirective">
            <a>@apply</a>
          </Link>
          <Link href="/Dark">
            <a>Dark</a>
          </Link>
        </p>
        <p>
          <Link href="/Grid">
            <a>Grid</a>
          </Link>
          <Link href="/Transforms">
            <a>Transforms</a>
          </Link>
          <Link href="/Gradients">
            <a>Gradients</a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="float-right hover:float-left "
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
