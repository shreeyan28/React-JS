import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header className={styles.header}>
       <center><h1 className={styles.mainTitle}>Lab - Client-side frameworks</h1></center>
      </header>
      <div className={styles.app}>
        <h2 className={styles.title}>Hello World</h2>
      </div>
    </>
  );
}

export default App;
