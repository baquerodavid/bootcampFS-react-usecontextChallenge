import { Link, Outlet } from 'react-router-dom';
import ThemeBtn from './Button';
import styles from './Root.module.css';

function Root() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/myjob">My Job</Link>
        </div>
        <ThemeBtn />
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
