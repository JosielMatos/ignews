import Image from "next/image";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src='/images/logo.svg' width={110} height={31} alt='ig.news' />
        <nav>
          <a className={styles.active} href='#'>Home</a>
          <a href='#'>Posts</a>
        </nav>
      </div>
    </header>
  );
}
