// TodoList.js
import React, { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from '../helpers/pubsub';
import './styles.css'

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const handleNewTask = (task) => {
        setTasks((prev) => [...prev, task])
    };

    const handleDeleleTask = (task) => {
        setTasks(tasks?.filter((item) => item !== task))
    }
    useEffect(() => {
        subscribe('new-task', handleNewTask);

        return () => {
            unsubscribe('new-task', handleNewTask);
        };
    }, []);

    return (
        <div>
            <h2 className='title'>Todo List</h2>
            <ul className='list-container'>
                {tasks.map((task, index) => (
                    <li key={index} className='list-item' >
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
