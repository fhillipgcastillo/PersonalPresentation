
import Link from 'next/link';
import React from 'react'
import styles from './LinkedButton.module.css';

const LinkedButton = (props) => {
  return (
    <Link {...props} className={styles.linkedButton} style={{backgroundColor: "#0070f3", color: "white", padding: "10px 20px",}} />
  )
};

export default LinkedButton;