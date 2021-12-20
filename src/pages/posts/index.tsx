import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postsList}>
          <a href=''>
            <time>May 14, 2021</time>
            <strong>This is Sparta</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate consequuntur assumenda magni nesciunt explicabo
              perferendis.
            </p>
          </a>

          <a href=''>
            <time>May 14, 2021</time>
            <strong>This is Sparta</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate consequuntur assumenda magni nesciunt explicabo
              perferendis.
            </p>
          </a>

          <a href=''>
            <time>May 14, 2021</time>
            <strong>This is Sparta</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate consequuntur assumenda magni nesciunt explicabo
              perferendis.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    Prismic.predicates.at("document.type", "publication"),
    {
      fetch: ["title", "content"],
      pageSize: 100,
    }
  );

  console.log(response);

  return {
    props: {},
  };
};
