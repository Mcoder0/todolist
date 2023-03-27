import React, { useState } from 'react'
import DelIcon from '../../UI/DelIcon';
import classes from './TodoItem.module.css'

const TodoItem = (props) => {
    const item = JSON.parse(localStorage.getItem(`${props.item.id}`))
    const [isChecked, setIsChecked] = useState(item.isDone)

    const time = props.item.date ? new Date(props.item.date) : null
    const year = time ? time.getFullYear() : null
    const month = time ? new Intl.DateTimeFormat("en-US", { month: 'short' }).format(time) : null
    const day = time ? time.getDay() : null

    const moveToDoneHandler = () => {

        localStorage.removeItem(`${props.item.id}`)
        localStorage.setItem(`${props.item.id}`, JSON.stringify({ ...item, isDone: !item.isDone }))
        props.setData(props.arrData()[0])
        props.setDataDone(props.arrData()[1])
        setIsChecked(prev => !prev)
    }

    return (
        <div className={classes.Item}>
            <div className={classes.ItemMain}>
                <input type="checkbox" onChange={moveToDoneHandler} checked={isChecked}></input>
                <div className={classes.Date}>
                    <span>{day}</span>
                    <span>{month}</span>
                    <span>{year}</span>
                </div>
                <div className={classes.Desc}>{props.item.todo}</div>
                <div className={classes.Person}>{props.item.person}</div>
            </div>
            <DelIcon {...props} />

        </div>
    )
}

export default TodoItem
