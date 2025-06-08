import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Task({ token }) {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const res = await axios.get('https://bootcamp2025.depster.me/task', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setTask(JSON.stringify(res.data, null, 2));
            } catch (err) {
                setError('Could not fetch the task.');
            }
        };
        fetchTask();
    }, [token]);

    return (
        <div>
            <h2>My Task</h2>
            {error ? <p style={{ color: 'red' }}>{error}</p> : <pre>{task}</pre>}
        </div>
    );
}

export default Task;
