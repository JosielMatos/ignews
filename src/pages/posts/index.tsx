import Head from "next/head";
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
