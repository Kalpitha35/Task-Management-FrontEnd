import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    // Function to handle saving a new task
    const handleSaveTask = (task) => {
        setTasks([...tasks, task]); // Add the new task to the existing task list
    };

    return (
        <>
            <div className='container mt-5'>
                <header className='d-flex justify-content-between align-items-center mb-4'>
                    <h1 className='display-6'>Task Management App</h1>
                    <AddTaskModal onAddTask={handleSaveTask}  />
                </header>

                <section className='task-list'>
                    {tasks.length === 0 ? (
                        <p className='text-center'>No tasks available. Add a new task to get started.</p>
                    ) : (
                        tasks.map((task, index) => (
                            <div key={index} className='card mb-3 shadow-sm'>
                                <div className='card-body d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h5 className='card-title'>{task.title}</h5>
                                        <p className='card-text'>{task.description}</p>
                                        <p className='text-muted'>Start Date: <strong>{task.startDate}</strong> | End Date: <strong>{task.endDate}</strong></p>
                                        <p className='text-muted'>Progress: <strong>{task.progress}%</strong></p>
                                    </div>
                                    <div className='task-actions'>
                                        <button className='btn btn-outline-primary me-2'>
                                            <i className='fas fa-eye'></i>
                                        </button>
                                        <button className='btn btn-outline-success me-2'>
                                            <i className='fas fa-pen'></i>
                                        </button>
                                        <button className='btn btn-outline-danger'>
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </div>
        </>
    );
};

export default Home;
