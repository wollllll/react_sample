import {useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
    const url = 'https://script.google.com/macros/s/AKfycbw1e8lIZsyPUVIXhxsw5q6gu3BZazXANPR2eypuChTx7xi79PVdjnim85SiYKwJqOnG/exec?route=users'
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await axios.get(url)

        setUsers(response.data.users)
    }

    return (
        <>
            <button onClick={getUsers}>get</button>
            <table>
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">created_at</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.created_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default App
