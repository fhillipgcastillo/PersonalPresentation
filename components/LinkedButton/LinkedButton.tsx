
import Link from 'next/link';
import React from 'react'
import styles from './LinkedButton.module.css';

const LinkedButton = (props) => {
  return (
    <Link {...props} className={styles.linkedButton} />
  )
};

export default LinkedButton;