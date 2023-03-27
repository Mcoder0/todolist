import React from 'react'
import classes from './TodoItemMain.module.css'

const TodoItemMain = (props) => {

    // console.log('2', props.item.date);

    const time = props.item.date ? new Date(props.item.date) : null
    const year = time ? time.getFullYear() : null
    const month = time ? new Intl.DateTimeFormat("en-US", { month: 'short' }).format(time) : null
    const day = time ? time.getDay() : null

    return (
        <div className={classes.ItemMain}>
            <input type="checkbox"></input>
            <div className={classes.Date}>
                <span>{day}</span>
                <span>{month}</span>
                <span>{year}</span>
            </div>
            <div className={classes.Desc}>{props.item.todo}</div>
            <div className={classes.Person}>{props.item.person}</div>
        </div>
    )
}

export default TodoItemMain
