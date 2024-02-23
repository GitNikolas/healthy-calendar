import React from "react";
import { createDate } from '../../utils/date/createDate';
import { createMonth } from '../../utils/date/createMonth';
import { createYear } from '../../utils/date/createYear';
import { useCalendar } from '../../components/Calendar/hooks/useCalendar';
import { getMonthNames } from "../../utils/date/getMonthNames";
import { getWeekDaysNames } from "../../utils/date/getWeekDaysNames";

interface CalendarProps {
    locale?: string;
    selectedDate?: Date;
    selectDate?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ locale = 'default', selectDate, selectedDate }) =>  {

    const {} = useCalendar({ locale, selectedDate })

    function test() {
        // createPost(string)
        console.log(getWeekDaysNames());
    }

    return (
        <div>
            <h2>Calendar</h2>
            <button onClick={test}>Тест</button>
        </div>
    );
  }
  