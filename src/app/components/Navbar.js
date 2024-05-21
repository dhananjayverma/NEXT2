import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/posts/1">Post 1</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/posts/2">Post 2</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/posts/3">Post 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
