import React from 'react';
import styles from './Button.module.scss';

type Prop = {
    title: string;
    theme?: 'primary' | 'secondary';
};

export function Button({ title, theme }: Prop) {
    return <button className={[styles.Button, theme && styles[theme]].join(' ')}>{title}</button>;
}
