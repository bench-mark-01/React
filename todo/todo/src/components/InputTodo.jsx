import React from 'react';

export const InputTodo = (props) => {
    const {todoItems, setTodoItems, inputTodo, setInputTodo} = props;
    const createKey = () => Math.random().toString(32).substring(2);

    const receiveInputTodo = (e) => setInputTodo(e.target.value);

    const addTodo = () => {
        const todo = {
            id: createKey(),
            task: inputTodo,
            status: false,
        };

        const newTodos = [...todoItems, todo];
        setTodoItems(newTodos);
        setInputTodo('');
    }

    return (
        <>
            <h2>
                新規タスクの追加
            </h2>
            <input type='text' id='task' value={inputTodo} onChange={receiveInputTodo}/>
            <input type='submit' value='追加' id='submit' onClick={addTodo} />   
        </>
    );
}




