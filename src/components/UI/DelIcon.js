import React, { useState } from 'react'
import Backdrop from './Backdrop'
import classes from './DelIcon.module.css'
import Modal from './Modal'

const DelIcon = (props) => {
    const [isConfirm, setIsConfirm] = useState(false)

    const deleteItemHandler = () => {
        setIsConfirm(true)
    }

    const confirmDelHandler = () => {
        const item = JSON.parse(localStorage.getItem(`${props.item.id}`))
        localStorage.removeItem(`${props.item.id}`)
        props.setData(props.arrData()[0])
        props.setDataDone(props.arrData()[1])
    }
    const cancelDelHandler = () => {
        setIsConfirm(false)
    }
    return (

        <div>
            <div className={classes.Del} onClick={deleteItemHandler}>X</div>
            {isConfirm && <Modal confirmDelHandler={confirmDelHandler} cancelDelHandler={cancelDelHandler} />}
        </div>
    )
}

export default DelIcon
