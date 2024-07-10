import React, { useState } from 'react';

const EmpTask = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Meeting at 9:30', completed: false },
        { id: 2, task: 'Project Work', completed: false },
    ]);

    const addToDo = (task) => {
        setTodos([...todos, { id: todos.length + 1, task, completed: false }]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.elements.task.value.trim();
        if (task) {
            addToDo(task);
            e.target.elements.task.value = '';
        }
    };

    return (
        <div className='bg-white p-5 w-[400px] rounded-xl h-[320px] hover:shadow-lg'>
            <h1 className='text-center font-bold'>ToDo List</h1>

            <form onSubmit={handleSubmit} className='mb-6'>
                <input
                    type="text"
                    name="task"
                    placeholder="New Task"
                    className=' border border-blue-500 rounded-lg mr-4 p-2 px-7'
                />
                <button type="submit" className='bg-[#3354F4] text-white p-1 px-7 rounded-xl'>Add</button>
            </form>

            <div>
                <table>
                    <thead>
                        <tr className='border-b'>
                            <th className='w-[24px]'>ID</th>
                            <th className='w-[150px]'>Task</th>
                            <th className='w-[84px]'>Completed</th>
                            <th className='w-[95px]'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id} className=' border-b p-2 '>
                                <td className='p-2'>{todo.id}</td>
                                <td className='p-2'>{todo.task}</td>
                                <td className='p-2 text-center'>{todo.completed ? 'Yes' : 'No'}</td>
                                <td className='text-center'>
                                    <button onClick={() => toggleComplete(todo.id)} className={todo.completed ? 'border bg-blue-400 text-white p-1 px-2 text-center rounded-lg' : 'border bg-green-400 text-white p-1 px-2 text-center rounded-lg'}>
                                        {todo.completed ? 'Undo' : 'Complete'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmpTask;
