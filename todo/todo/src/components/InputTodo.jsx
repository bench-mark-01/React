import React from "react";

export const InputTodo = (props) => {
    const {todoItem, setTodoItem, inputTodo, setInputTodo} = props;
    const createKey = () => Math.random().toString(32).substring(2);
    
    function todoObject (task){
        this.id = createKey();
        this.task = task;
        this.status = false;
    }

    const onChangeInputTodo = (e) => setInputTodo(e.target.value);

    const onClickAdd = () => {
        const instance = new todoObject(inputTodo);
        const newTodo = [...todoItem, instance];
        setTodoItem(newTodo);
        setInputTodo('');
    }

    return (
        <>
        <h2>
            新規タスクの追加
        </h2>
        <input type="text" id="task" value= {inputTodo} onChange = {onChangeInputTodo}/>
        <input type="submit" value="追加" id="submit" onClick = {onClickAdd} />   
        </>
    );
}




