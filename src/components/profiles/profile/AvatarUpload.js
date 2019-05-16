import React from 'react';

import styles from './AvatarUpload.module.css';


const AvatarUpload = (props) => {
        return (
            <>
                <form className={styles.Field} onSubmit={props.onFormSubmit}>
                    <button className={styles.CloseBtn} onClick={props.CloseModal}>
                        <i className={styles.Icon + ' fas fa-times'}/>
                    </button>
                    <h1 className={styles.Title}>Загрузить аватар</h1>
                    <input className={styles.Input} type="file" name="avatar" onChange= {props.onChange} />
                    <button className={styles.Btn} type="submit">Загрузить</button>
                    <img className={styles.Preview} 
                        src={(props.previewUrl === null) ? 
                        'https://dver.com/xml/images/F0000002599.jpeg' : 
                        props.previewUrl} 
                        alt="avatar" />
                </form>
            </>
        );
};


export default AvatarUpload;
