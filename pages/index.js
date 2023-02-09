import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>HomePage</h1>
      <li>
        <Link href={"/portfolio"}>portfolio</Link>
      </li>
      <li>
        <Link href={"/clients"}>portfolio</Link>
      </li>
    </div>
  );
}
