import React, { useState } from 'react';
import axios from 'axios';

function Colors({ token, onSaveColor }) {
    const [colors, setColors] = useState([]);
    const [error, setError] = useState('');

    const fetchColors = async () => {
        try {
            const res = await axios.get('https://bootcamp2025.depster.me/api/colors?limit=10', {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(res.data);
            setColors(res.data.data);
            setError('');
        } catch (err) {
            setError('Could not fetch colors.');
        }
    };

    return (
        <div>
            <button onClick={fetchColors} style={{ marginBottom: 20 }}>Fetch colors</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="color-grid">
                {colors.map(color => (
                    <div
                        key={color}
                        className="color-square"
                        style={{
                            background: color,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <span
                            style={{
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                color: '#fff',
                                textShadow: '0 1px 6px rgba(0,0,0,0.18)',
                                marginBottom: '8px',
                                letterSpacing: '1px',
                                wordBreak: 'break-all'
                            }}
                        >
                            {color}
                        </span>
                        <button
                            style={{
                                background: 'rgba(255,255,255,0.85)',
                                color: '#22223b',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '4px 12px',
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                                margin: 0,
                                width: 'auto',
                                alignSelf: 'center',
                                transition: 'background 0.18s'
                            }}
                            onClick={() => onSaveColor(color)}
                        >
                            Save
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Colors;
