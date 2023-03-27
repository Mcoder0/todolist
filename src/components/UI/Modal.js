import React from 'react'
import Backdrop from './Backdrop'
import classes from './Modal.module.css'

const Modal = (props) => {



    return (
        <Backdrop>
            <div className={classes.Modal}>
                <span>确认删除此事项吗？</span>
                <div>
                    <button onClick={props.confirmDelHandler}>确认</button>
                    <button onClick={props.cancelDelHandler}>取消</button>
                </div>
            </div>
        </Backdrop>
    )
}

export default Modal
