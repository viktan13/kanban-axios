import axios from "axios";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Column from "./Column";


function App() {
    const [statuses, setStatuses] = useState([]);
    const [tasks, setTasks] = useState([])
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



    return (
        <div>
            <h1>Kanban Board + Axios</h1>
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map(el => (
                        <Column status={el} key={el._id} tasks={tasks}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
