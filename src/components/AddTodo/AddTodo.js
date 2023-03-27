import React, { useState } from 'react'
import './AddTodo.module.css'
import classes from './AddTodo.module.css'

const AddTodo = (props) => {
    const initialId = localStorage.getItem('id')

    const [inputDate, setInputDate] = useState('')
    const [inputTodo, setInputTodo] = useState('')
    const [inputPerson, setInputPerson] = useState('')
    const [id, setId] = useState(initialId ? +initialId + 1 : 1) //在localStorage里面设置单独的一个参数key来作为最新key的参考
    // console.log('1', key, initialKey);
    const [isEmpty, setIsEmpty] = useState(false)
    const [isPast, setIsPast] = useState(false)

    const dateChangeHandler = (e) => {
        setInputDate(e.target.value)
        setIsPast(false)
    }
    const todoChangeHandler = (e) => {
        setInputTodo(e.target.value)
    }
    const personChangeHandler = (e) => {
        setInputPerson(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()

        const timeComparision = () => {
            const currentTime = new Date(Date.now())
            console.log(currentTime);
            const currentYear = currentTime.getFullYear()
            const currentMonth = currentTime.getMonth()
            const currentDate = currentTime.getDate()

            console.log(currentYear, currentMonth, currentDate)

            const inputTime = new Date(inputDate)
            console.log(inputTime);
            const inputYear = inputTime.getFullYear()
            const inputMonth = inputTime.getMonth()
            const inputDate1 = inputTime.getDate()

            console.log(inputYear, inputMonth, inputDate1);

            if (inputYear > currentYear) {
                return 1
            } else if (inputYear == currentYear) {
                if (inputMonth > currentMonth) {
                    return 1
                } else if (inputMonth == currentMonth) {
                    if (inputDate1 >= currentDate) {
                        return 1
                    } else { return -1 }
                } else { return -1 }
            } else { return -1 }


        }

        if (timeComparision() == -1) {
            setIsPast(true)
            return
        }
        console.log(timeComparision())

        if (inputDate && inputTodo.trim() && inputPerson.trim()) {
            localStorage.setItem(id, JSON.stringify({
                date: inputDate,
                todo: inputTodo,
                person: inputPerson,
                isDone: false
            }))
            setId(prevState => prevState + 1)

            //在localStorage储存key
            localStorage.setItem('id', id)

            // console.log(key)

            setInputDate('')
            setInputTodo('')
            setInputPerson('')

            props.setData(props.arrData()[0])

            setIsEmpty(false)
            setIsPast(false)
        } else {
            setIsEmpty(true)
        }
    }

    return (
        <div>
            <h2>添加待办事项</h2>
            <form onSubmit={formSubmitHandler}>
                <div className={classes.Date}>
                    <span>Date:</span>
                    <input type="date" value={inputDate} onChange={dateChangeHandler} />
                </div>
                <div className={classes.Todo}>
                    <span>To-do:</span>
                    <input type="text" value={inputTodo} onChange={todoChangeHandler} />
                </div>
                <div className={classes.Person}>
                    <span>Person:</span>
                    <input type="text" value={inputPerson} onChange={personChangeHandler} />
                </div>
                <button>submit</button>

                {isEmpty && <span className={classes.prompt}>不能有空值！请重新输入</span>}
                {isPast && <span className={classes.prompt}>时间不符合规范, 请重新输入</span>}


            </form>

        </div>
    )
}

export default AddTodo
