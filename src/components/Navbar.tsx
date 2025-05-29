import React from 'react';
import { Menu } from 'iconoir-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon}>
        <Menu width="28px" height="28px" />
      </div>
      {/* You can add other navbar items here later, like a logo or links */}
    </nav>
  );
};

export default Navbar;
