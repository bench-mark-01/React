import React, { useState } from 'react';

import { InputTodo } from './components/InputTodo';
import { DisplayTodos } from './components/DisplayTodo';
import { RadioButtonForm } from './components/RadioButtonForm';

export const Todo = () => {

    const [radioButtonForm, setRadioButtonForm] = useState('all');
    const [todoItems, setTodoItems] = useState([]);
    const [inputTodo, setInputTodo] = useState([]);
    
    return (
        <>
        <header>
            <h1>
                ToDoリスト
            </h1>
        </header>
        <table>
            <thead>  
                <tr>
                    <th>ID</th>
                    <th>コメント</th>
                    <th>状態</th>
                </tr>
            </thead>
        </table>

        <RadioButtonForm radioButtonForm={radioButtonForm} setRadioButtonForm={setRadioButtonForm}/>
        <table>
            <thead>
                <DisplayTodos key={todoItems.id} todoItems={todoItems} setTodoItems={setTodoItems} radioButtonForm={radioButtonForm}/>
            </thead>
        </table>

        <InputTodo todoItems={todoItems} setTodoItems={setTodoItems} inputTodo={inputTodo} setInputTodo={setInputTodo}/>
        </>
    );
}