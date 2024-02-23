import React from "react";
import { createDate } from '../../utils/date/createDate';
import { createMonth } from '../../utils/date/createMonth';
import { createYear } from '../../utils/date/createYear';
import { useCalendar } from '../../components/Calendar/hooks/useCalendar';
import { getMonthNames } from "../../utils/date/getMonthNames";
import { getWeekDaysNames } from "../../utils/date/getWeekDaysNames";
import './calendar.css';

interface CalendarProps {
    locale?: string;
    selectedDate?: Date;
    selectDate?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ locale = 'default', selectDate, selectedDate }) =>  {

    const {} = useCalendar({ locale, selectedDate })

    // function test() {
    //     console.log(getWeekDaysNames());
    // }

    return (
        <div className="calendar calendar_opened">
            <div className="calendar__overlay">
            <h2>Календарь</h2>
              {/* <button onClick={test}>Тест</button> */}
            </div>
        </div>
    );
  }
  