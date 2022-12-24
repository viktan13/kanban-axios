import axios from "axios";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Column from "./Column";


function App() {
    const [statuses, setStatuses] = useState([]);
    const getStatuses = () => {
        axios.get('https://expressjs-server.up.railway.app/statuses')
            .then(response => {
                setStatuses(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getStatuses();
    }, [])

    return (
        <div>
            <h1>Kanban Board + Axios</h1>
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map(el => (

                            <Column status={el} key={el._id}/>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
