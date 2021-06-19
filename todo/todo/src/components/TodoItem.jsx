import React from "react";

export const TodoItem = (props) => {

    const {todoItem, setTodoItem, filter} = props;

    const onClickDelete = (index) => {
        const newTodo = [...todoItem];
        newTodo.splice(index, 1);
        setTodoItem(newTodo);
    }
    
    const onClickStatus = (index) =>{
        const newTodo = [...todoItem];
        if (newTodo[index].status){
            newTodo[index].status = false;
            setTodoItem(newTodo);
        }else{
            newTodo[index].status = true;
            setTodoItem(newTodo);
        }
    }

    const displayItems = todoItem.filter(item => {
        if (filter === 'all') return true;
        if (filter === 'working') return !item.status;
        if (filter === 'complete') return item.status;
    });

    return(
        displayItems.map((Todo,index) => {
            return (
                <tbody key = {Todo.id}>
                    <tr>
                        <td>
                            {index}
                        </td>
                        <td>
                            {Todo.task}
                        </td>
                        <td>
                            <input onClick = {() => onClickStatus(index)} type="button" value = {Todo.status ? "完了" : "作業中"} id = {Todo.id} />
                        </td>
                        <td>
                            <input onClick = {() => onClickDelete(index)}type="button" value="削除" id={Todo.id} />
                        </td>
                    </tr>
                </tbody>
            );
        })
    );
}