import React from 'react'

export const Button = ({ title, setActive }) => {
    return (
        <div>

            <button onClick={() => setActive(true)}>{title}</button>

        </div>
    )
}
