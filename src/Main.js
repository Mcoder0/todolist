import React, { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import DoneList from './components/DoneList/DoneList'
import TodoList from './components/TodoList/TodoList'
import Modal from './components/UI/Modal'
import classes from './Main.module.css'

const Main = () => {

    const [data, setData] = useState([])
    const [dataDone, setDataDone] = useState([])


    const arrData = () => {
        let arr = []
        let arrDone = []
        let keys = Object.keys(localStorage)
        for (let key of keys) {
            let id = key
            let value = JSON.parse(localStorage.getItem(id))
            if (id != 'id' && value.isDone == false) {
                arr.push({ id, ...value })
            }
            if (id != 'id' && value.isDone == true) {
                arrDone.push({ id, ...value })
            }
        }
        return [arr, arrDone]
        // return arr
    }

    useEffect(() => {
        setData(arrData()[0])
        setDataDone(arrData()[1])
        // setData(arrData())
    }, [])



    return (
        <div className={classes.Main}>
            <AddTodo arrData={arrData} setData={setData} />
            <hr />
            <TodoList data={data} arrData={arrData} setData={setData} setDataDone={setDataDone} />
            <hr />
            <DoneList dataDone={dataDone} arrData={arrData} setData={setData} setDataDone={setDataDone} />

        </div>
    )
}

export default Main
