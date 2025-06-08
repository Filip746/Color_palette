import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin, defaultEmail, defaultPassword }) {
    const [email, setEmail] = useState(defaultEmail || '');
    const [password, setPassword] = useState(defaultPassword || '');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://bootcamp2025.depster.me/login', {
                email,
                password
            });
            onLogin(res.data.token);
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.log(err.response?.data || err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button type="submit">Log in</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default Login;
