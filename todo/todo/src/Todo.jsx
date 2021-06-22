import React, { useState } from "react";

import { InputTodo } from "./components/InputTodo";
import { TodoItem } from "./components/TodoItem";
import { Filter } from "./components/Filter";

export const Todo = () => {

    const [filter, setFilter] = useState('all');
    const [todoItem, setTodoItem] = useState([]);
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

            <Filter filter = {filter} setFilter = {setFilter}/>
            <table>
                <thead>
                    <TodoItem key = {todoItem.index} todoItem = {todoItem} setTodoItem = {setTodoItem} filter = {filter}/>
                </thead>
            </table>

            <InputTodo todoItem = {todoItem} setTodoItem = {setTodoItem} inputTodo = {inputTodo} setInputTodo = {setInputTodo}/>
        </>
    );
}