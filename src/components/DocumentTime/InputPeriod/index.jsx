import React from 'react'

export const InputPeriod = ({ title, startDate, handleStartDateChange, endDate, handleEndDateChange }) => {
    return (
        <div className="period-item">
            <p className="period-item__title">{title}</p>
            <form>
                <input type="number" name="start-date" placeholder="от" value={startDate} onChange={handleStartDateChange} />
                <span className="period-item__minus">-</span>
                <input type="number" name="end-date" placeholder="до" value={endDate} onChange={handleEndDateChange} />
            </form>
        </div>
    )
}
