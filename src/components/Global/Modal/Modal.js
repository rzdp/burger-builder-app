import React, {Fragment} from 'react';
import modalStyles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
    return (
        <Fragment>
            <Backdrop show={props.showedModal}
                      clicked={props.closedModal}/>
            <div className={modalStyles.Modal}
                 style={
                     {
                         transform: props.showedModal ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: props.showedModal ? '1' : '0'
                     }
                 }>
                {props.children}
            </div>
        </Fragment>
    )
}

export default modal;