import axios from "axios";
import {useEffect, useState} from "react";

function App() {

    const [cards, setCards] = useState([]);
    const getStatuses = () => {
        axios.get('http://localhost:5000/statuses')
            .then(response => {
                console.log(response);
                setCards(response.data)
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
