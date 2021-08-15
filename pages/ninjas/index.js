import React from "react";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

const NinjasPage = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => {
        return (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return {
    props: {
      ninjas: data,
    },
  };
}

export default NinjasPage;
