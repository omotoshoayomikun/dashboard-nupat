import React from 'react';
import styles from '../../styles/Forms/Button.module.css'

export const Button = (props) => {

    return (
        <>
            <button className={styles.btn} style={props.cusStyle} >
                {
                    props.icon && (
                        <img src={props.icon} alt="" />
                    )
                }
                <span className={styles.mll}>{props.text}</span>
            </button>
        </>
    )
}

export const BtnBlack = (props) => {
    return (
        <button className={styles.btn_black} style={props.cusStyle} >
            <span>{props.text}</span>
        </button>
    )
}

export const BtnAdd = (props) => {
    return (
        <button className={styles.btn_add} style={props.cusStyle} >
            {
                props.icon && (
                    <img src={props.icon} alt="" />
                )
            }
            <span>{props.text}</span>
        </button>
    )
}

