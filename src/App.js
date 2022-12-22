import axios from "axios";
import {useEffect} from "react";

function App() {

    const getStatuses = () => {
        axios.get('http://localhost:5000/cards')
            .then(response => {
                console.log(response);
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

        </div>
    );
}

export default App;
