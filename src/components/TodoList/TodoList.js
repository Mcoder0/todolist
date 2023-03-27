import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem/TodoItem'
import classes from './TodoList.module.css'

const TodoList = (props) => {
    // console.log('1', props.data);

    return (
        <div className={classes.List}>
            <h2>待完成</h2>
            {
                props.data.map((item) => {

                    // console.log('itemID', item.id);
                    return <TodoItem key={item.id} item={item} {...props} />


                })
            }


        </div>
    )
}

export default TodoList
