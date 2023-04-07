import React, { useRef } from "react";

export const InputTime = ({ title, startDate, handleStartDateChange, endDate, handleEndDateChange }) => {
    const ref = useRef();
    return (
        <div className="input-time">
            <p className="period-item__title">{title}</p>
            <form>
                <input type="text" id="start-date" name="start-date" value={startDate} onChange={handleStartDateChange} placeholder='от' onFocus={(e) => (e.target.type = "date")} />
                <span className="input-time__minus">-</span>
                <input type="text" id="end-date" name="end-date" value={endDate} onChange={handleEndDateChange} placeholder='до' onFocus={(e) => (e.target.type = "date")} />
            </form>
        </div>
    )
}
