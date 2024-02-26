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

    const {state} = useCalendar({ firstWeekDay, locale, selectedDate });
    console.log(state);

    const openCalendar:string = isOpen ? 'calendar_opened' : '';
    const openCalendarContent:string = isOpen ? 'calendar__content_opened' : '';
    const openCalendarOverlay:string = isOpen ? 'calendar__overlay_opened' : '';
    const weekDays = ['Пн', 'Вт', 'Ср','Чт','Пт','Сб','Вс'];
    const weekNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    function toggleOpenCalendarHandler() {
        toggleOpenCalendar();
    }

    return (
        <div className={`calendar ${openCalendar}`}>
            <div className={`calendar__overlay ${openCalendarOverlay}`} onClick={toggleOpenCalendarHandler}></div>
            <div className={`calendar__content ${openCalendarContent}`}>
                <h2>Календарь</h2>
                <div className='calendar__menu'>
                    <button className='calendar__menu-button'>{'<'}</button>
                    <button className='calendar__menu-button'>Март</button>
                    <button className='calendar__menu-button'>{'>'}</button>
                </div>
                <ul className='calendar__table list-style'>
                    {weekDays.map(item => <li className='calendar__week-days' key={item}>{item}</li>)}
                    {weekNumbers.map(item => <li className='calendar__table-item' key={item}>{item}</li>)}
                </ul>
                <button className='calendar__choose-button'>Выбрать</button>
            </div>
        </div>
    );
  }
  