import React, { useState } from 'react';
import { InputPeriod } from './InputPeriod';
import { InputTime } from './InputTime';

export const DocumentTime = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  return (
    <>
      <div className="period">
        <InputPeriod
          title="По сроку мес."
          startDate={startDate}
          handleStartDateChange={handleStartDateChange}
          endDate={endDate}
          handleEndDateChange={handleEndDateChange} />
        <InputPeriod
          title="По сумме руб"
          startDate={startDate}
          handleStartDateChange={handleStartDateChange}
          endDate={endDate}
          handleEndDateChange={handleEndDateChange} />
        <InputTime
          title="Период взыскания"
          startDate={startDate}
          handleStartDateChange={handleStartDateChange}
          endDate={endDate}
          handleEndDateChange={handleEndDateChange} />
      </div>
      <div className='time'>

      </div>
    </>
  )
}
