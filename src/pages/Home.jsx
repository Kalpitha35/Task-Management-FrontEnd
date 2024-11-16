import React, { useEffect, useState } from 'react';
import AddTaskModal from './AddTaskModal';
import { getAllTaskAPI ,deleteTaskAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()
    const [tasks, setTasks] = useState([]);
    const [username, setUsername] = useState("")
    const [alltask, setAlltask] = useState("")
    useEffect(() => {
        getAllTask()
        if (sessionStorage.getItem("user")) {
            setUsername(JSON.parse(sessionStorage.getItem("user")).username)

        } else {
            setUsername("")
        }
    }, [])

    const getAllTask = async () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`,
            };
            try {
                const result = await getAllTaskAPI(reqHeader);
                console.log("Fetched tasks:", result.data); // Add this line for debugging
    
                if (result.status === 200) {
                    setTasks(result.data);
                } else {
                    console.error("Unexpected response status:", result.status);
                }
            } catch (err) {
                console.error("Error during API call:", err);
            }
        } else {
            console.warn("No token found in session storage");
        }
    };
    
    console.log(tasks);

    const handleEditTask = (task) => {
        navigate('/taskform', { state: { task } }); // Navigate with task data
    };



    // Function to handle saving a new task
    const handleSaveTask = (task) => {
        setTasks([...tasks, task]); // Add the new task to the existing task list
    };

    const deleteTask = async (id) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            //api call
            const reqHeader = {
                "Authorization": `Bearer ${token}`,
            };
            try {
                await deleteTaskAPI(id,reqHeader)
                getAllTask()
            } catch (err) {
                console.log(err);

            }
        }
    }

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
                                        {/* <button className='btn btn-outline-primary me-2'>
                                            DELETE
                                        </button> */}
                                        <button  onClick={() => handleEditTask(task)} className='btn btn-outline-success me-2'>
                                            UPDATE
                                        </button>
                                        <button onClick={() => deleteTask(task?._id)} className='btn btn-outline-danger'>
                                           DELETE
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
