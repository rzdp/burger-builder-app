import React from 'react';
import backdropStyles from './Backdrop.module.css'

const backdrop = (props) => {
    return (
        props.show ? <div onClick={props.clicked}
                          className={backdropStyles.Backdrop}/> : null
    )
}

export default backdrop;