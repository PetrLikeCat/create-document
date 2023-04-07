import React from 'react'

export const InputPopup = ({ title, }) => {
    const [input, setInput] = React.useState("")
    return (
        <div className="input-popup">
            <p className="input-popup__title">{title}</p>
            <input className="input-popup__input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}
