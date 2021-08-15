import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <meta name="keywords" content="ninjas" />
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          cupiditate animi voluptate, temporibus consectetur excepturi libero
          adipisci deleniti sapiente voluptatem perferendis earum ea autem?
          Distinctio at autem delectus ipsum sapiente!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          cupiditate animi voluptate, temporibus consectetur excepturi libero
          adipisci deleniti sapiente voluptatem perferendis earum ea autem?
          Distinctio at autem delectus ipsum sapiente!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </Fragment>
  );
};

export default HomePage;
