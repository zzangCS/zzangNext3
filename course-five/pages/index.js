import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

export default function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((el) => (
        <li key={el.id}>
          <Link href={`/products/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  if (!data) {
    return {
      redirect: {
        destinaion: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
