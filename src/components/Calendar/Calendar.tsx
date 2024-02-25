import React, { useEffect } from "react";
import { createDate } from '../../utils/date/createDate';
import { createMonth } from '../../utils/date/createMonth';
import { createYear } from '../../utils/date/createYear';
import { useCalendar } from '../../components/Calendar/hooks/useCalendar';
import { getMonthNames } from "../../utils/date/getMonthNames";
import { getWeekDaysNames } from "../../utils/date/getWeekDaysNames";
import './calendar.css';
import { clickOptions } from "@testing-library/user-event/dist/click";

interface CalendarProps {
    locale?: string;
    selectedDate?: Date;
    selectDate?: (date: Date) => void;
    firstWeekDay?: number;
    isOpen?: boolean;
    toggleOpenCalendar: Function;
}

export const Calendar: React.FC<CalendarProps> = ({
    locale = 'default',
    firstWeekDay = 2,
    selectDate,
    selectedDate,
    isOpen,
    toggleOpenCalendar
    }) =>  {

    const {} = useCalendar({ firstWeekDay, locale, selectedDate });

    const openCalendarContent:string = isOpen ? 'calendar__content_open' : '';
    const openCalendarOverlay:string = isOpen ? 'calendar__overlay_opened' : '';

    function toggleOpenCalendarHandler() {
        toggleOpenCalendar();
    }

    return (
        <div className='calendar'>
            <div className={`calendar__overlay ${openCalendarOverlay}`} onClick={toggleOpenCalendarHandler}></div>
            <div className={`calendar__content ${openCalendarContent}`}>
            <h2>Календарь</h2>
              {/* <button onClick={test}>Тест</button> */}
            </div>
        </div>
    );
  }
  