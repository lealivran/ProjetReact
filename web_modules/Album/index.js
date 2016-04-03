import React, { Component } from 'react';

import styles from "./index.css"
let selectedIndex = 0;
let limit = 1;
const Album = ({name ="", images=[]}) =>

(<div className={styles.itemDetails}>
  <img src={images[1].url} className={styles.image} />
  <h2 className={styles.title}>{name}</h2>
</div>)

export default Album
