import Navbar from './Navbar';
import styles from '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
