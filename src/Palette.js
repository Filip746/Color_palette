import React from 'react';

function Palette({ palette, onRemoveColor }) {
    return (
        <div>
            <h3>My palette</h3>
            <div className="color-grid">
                {palette.map(color => (
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
                            onClick={() => onRemoveColor(color)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Palette;
