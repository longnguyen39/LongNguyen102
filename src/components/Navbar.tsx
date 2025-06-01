"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, MailSolid, Github, User } from 'iconoir-react';
import { FaLinkedinIn, FaHome, FaApple } from 'react-icons/fa';
import EmailCopyLink from './EmailCopyLink';
import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  
  // Close menu function
  const closeMenu = () => {
    setMenuOpen(false);
  };

  
  // Close menu when clicking outside or when ESC key is pressed
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.homeIcon}>
          <FaHome size={24} />
        </Link>
        <div className={styles.slogan}>
          "Building an innovative product is like a journey into the unknown" — <em>A passionate developer</em>
        </div>
        <div className={styles.menuIconContainer} ref={menuRef}>
          <button 
            className={menuOpen ? `${styles.menuIcon} ${styles.open}` : styles.menuIcon}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </nav>
      
      {/* Dropdown menu that works with both navbar and floating button */}
      <div 
        className={menuOpen ? `${styles.dropdownMenu} ${styles.dropdownMenuOpen}` : styles.dropdownMenu}
        ref={dropdownRef}
        id="navbar-dropdown-menu"
      >
        <div className={styles.menuSection}>
          <Link href="/" className={pathname === '/' ? `${styles.menuItem} ${styles.active}` : styles.menuItem} onClick={closeMenu}>
            <FaHome /> Home
          </Link>
          <Link href="/about" className={pathname === '/about' ? `${styles.menuItem} ${styles.active}` : styles.menuItem} onClick={closeMenu}>
            <User /> About
          </Link>
          <Link href="/my-apps" className={pathname === '/my-apps' ? `${styles.menuItem} ${styles.active}` : styles.menuItem} onClick={closeMenu}>
            <FaApple /> My Apps
          </Link>
        </div>
        <div className={styles.menuSection}>
          <EmailCopyLink email="longnguyen39ios@gmail.com" className={styles.menuItem} />
          <a href="https://github.com/longnguyen39" className={styles.menuItem} target="_blank" rel="noopener noreferrer">
            <Github style={{ color: '#27ae60' }} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/long-nguyen-309092205" className={styles.menuItem} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn style={{ color: '#0077b5' }} /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
