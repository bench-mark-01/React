import React from 'react';

export const DisplayTodos = (props) => {

    const {todoItems, setTodoItems, radioButtonForm} = props;

    const deleteTodo = (targetItem) => {
        const newTodos = [...todoItems];
        const targetIndex = newTodos.indexOf(targetItem);
        newTodos.splice(targetIndex, 1);
        setTodoItems(newTodos);
    }
    
    const changeStatus = (targetItem) => {
        try {
            const newTodos = [...todoItems];
            const todoItem = newTodos.find((todoItem => todoItem.id === targetItem.id));
            if(todoItem.status){
                todoItem.status = false;
            }else{
                todoItem.status = true;
            }
            const targetIndex = newTodos.indexOf(targetItem);
            newTodos[targetIndex] = todoItem;
            setTodoItems(newTodos);
        } catch (error) {
            console.error(error.message);
            console.log('存在しないIDです');
        }
    };

    const displayTodos = todoItems.filter( todoItem => {
        if (radioButtonForm === 'all') return true;
        if (radioButtonForm === 'working') return !todoItem.status;
        if (radioButtonForm === 'complete') return todoItem.status;
        return null;
    });

    return(
        displayTodos.map((displayTodo, index) => {
            return (
                <tr key = {displayTodo.id}>
                    <td>
                        {index}
                    </td>
                    <td>
                        {displayTodo.task}
                    </td>
                    <td>
                        <input onClick={() => changeStatus(displayTodo)} type='button' value={displayTodo.status ? "完了" : "作業中"} id={displayTodo.id} />
                    </td>
                    <td>
                        <input onClick={() => deleteTodo(displayTodo)} type='button' value='削除' id={displayTodo.id} />
                    </td>
                </tr>
            );
        })
    );
}