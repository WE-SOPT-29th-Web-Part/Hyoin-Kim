import React from 'react';

const DateInput = ({ year, month, date, setYear, setMonth, setDate }) => {

    const todayDate = () => {
        const now = new Date();
        setYear(now.getFullYear());
        setMonth(now.getMonth() + 1);
        setDate(now.getDate());
    }

    const handleChange = (e, setState) => {
        setState(e.target.value);
      };

    return (
        <div className="dateInput">
            <button className="todey__button" onClick={todayDate}>오늘</button>
            <div className="date-input__form">
                <input type="text" className="date-input date-input__year" value={year || ""} onChange={(e)=>handleChange(e,setYear)}></input>년
                <input type="text" className="date-input" value={month || ""} onChange={(e)=>handleChange(e,setMonth)}></input>월
                <input type="text" className="date-input" value={date || ""} onChange={(e)=>handleChange(e,setDate)}></input>일을 기준으로
            </div>
        </div>
    );
};

export default DateInput;