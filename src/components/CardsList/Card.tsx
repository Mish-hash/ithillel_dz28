import styles from './Card.module.scss';
import React from 'react';

interface CardI {
    text: string;
    number: number;
}

function Card ({text, number}: CardI) : JSX.Element {
    const jsxP = [];
    for(let i = 0; i < number; i++) {
        jsxP.push(text);
    }

    return(
        <div className={styles.container}>
            {jsxP.map((el, index) => <p key={`card_${index}`}>{el}</p>)}
        </div>
    );
}

export default Card;
