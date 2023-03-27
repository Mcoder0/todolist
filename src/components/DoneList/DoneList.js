import React from 'react'
import TodoItem from '../TodoList/TodoItem/TodoItem'
import classes from './DoneList.module.css'

const DoneList = (props) => {
    return (
        <div>
            <h2>已完成</h2>
            <div className={classes.List}>
                {
                    props.dataDone.map((item) => {

                        // console.log('itemID', item.id);
                        return <TodoItem key={item.id} item={item} {...props} />


                    })
                }
            </div>

        </div >
    )
}

export default DoneList
