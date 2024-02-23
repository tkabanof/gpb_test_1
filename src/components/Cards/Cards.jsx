import React from 'react';
import styles from "./Cards.module.css"

const Cards = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default Cards;