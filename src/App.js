import axios from "axios";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Column from "./Column";
import CreateTaskModal from "./CreateTaskModal";


function App() {
    const [statuses, setStatuses] = useState([]);
    const [tasks, setTasks] = useState([])
    const [priorities, ] = useState(Array.from({length: 10}, (_, i) => i + 1))
    const getStatuses = () => {
        axios.get('https://expressjs-server.up.railway.app/statuses')
            .then(response => {
                setStatuses(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getTasks = () => {
        axios.get('https://expressjs-server.up.railway.app/tasks')
            .then(res => {
                setTasks(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getStatuses();
        getTasks();
    }, [])

    const createTask = (task) => {
        axios.post('https://expressjs-server.up.railway.app/tasks', task)
            .then(res => {
                getTasks();
            })
            .catch(err => {
                console.log(err);
            });
    }

    const updateTask = (task) => {
        axios.patch(`https://expressjs-server.up.railway.app/tasks/${task._id}`, task)
            .then(res => {
                getTasks();
            })
            .catch(err => console.log(err));
    }

    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.up.railway.app/tasks/${id}`)
            .then(res => {
                getTasks();
                alert(res.data);
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <h1 className="text-center">Kanban Board + Axios</h1>
            <CreateTaskModal
                createTask={createTask}
                statuses={statuses}
                priorities={priorities}
            />
            <div className="container text-center" >
                <div className="row align-items-start" >
                    {statuses.map(el => (
                        <Column
                            status={el}
                            key={el._id}
                            tasks={tasks}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                            statuses={statuses}
                            priorities={priorities}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
