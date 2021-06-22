import React from "react";

export const TodoItem = (props) => {

    const {todoItem, setTodoItem, filter} = props;

    const onClickDelete = (targetItem) => {
        const newTodo = [...todoItem];
        let targetIndex = newTodo.indexOf(targetItem);
        newTodo.splice(targetIndex, 1);
        setTodoItem(newTodo);
    }
    
    const onClickStatus = (targetItem) => {
        const newTodo = [...todoItem];
        const item = newTodo.find((item => item.id === targetItem.id));
        if(item.status){
            item.status = false;
        }else{
            item.status = true;
        }
        let targetIndex = newTodo.indexOf(targetItem);
        newTodo[targetIndex] = item;
        setTodoItem(newTodo);
    };

    let displayItems = todoItem.filter( item => {
        if (filter === 'all') return true;
        if (filter === 'working') return !item.status;
        if (filter === 'complete') return item.status;
        return null;
    });

    return(
        displayItems.map((Todo,index) => {
            return (
                <tr key = {Todo.id}>
                    <td>
                        {index}
                    </td>
                    <td>
                        {Todo.task}
                    </td>
                    <td>
                        <input onClick = {() => onClickStatus(Todo)} type="button" value = {Todo.status ? "完了" : "作業中"} id = {Todo.id} />
                    </td>
                    <td>
                        <input onClick = {() => onClickDelete(Todo)}type="button" value="削除" id={Todo.id} />
                    </td>
                </tr>
            );
        })
    );
}