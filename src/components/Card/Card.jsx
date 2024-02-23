import React from 'react';
import styles from "./Card.module.css"

const Card = ({ header, options, text }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>{header}</h1>
            <ul>
                {options.map((option, idx) => {
                    return <li key={idx}>{option}</li>
                })}
            </ul>
            <article>{text}</article>
        </div>
    );
};

export default Card;