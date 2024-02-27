import React, { useEffect } from "react";
import { createDate } from '../../utils/date/createDate';
import { createMonth } from '../../utils/date/createMonth';
import { createYear } from '../../utils/date/createYear';
import { useCalendar } from '../../components/Calendar/hooks/useCalendar';
import { getMonthNames } from "../../utils/date/getMonthNames";
import { getWeekDaysNames } from "../../utils/date/getWeekDaysNames";
import './calendar.css';
import { clickOptions } from "@testing-library/user-event/dist/click";
import { stat } from "fs";
import { checkIsToday } from "../../utils/date/checkIsToday";
import { checkDateIsEqual } from "../../utils/date/checkDateIsEqual";

interface CalendarProps {
    locale?: string;
    selectedDate?: Date;
    selectDate: (date: Date) => void;
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

    const { state,functions } = useCalendar({ firstWeekDay, locale, selectedDate });
    console.log(state);

    const openCalendar:string = isOpen ? 'calendar_opened' : '';
    const openCalendarContent:string = isOpen ? 'calendar__content_opened' : '';
    const openCalendarOverlay:string = isOpen ? 'calendar__overlay_opened' : '';

    function toggleOpenCalendarHandler() {
        toggleOpenCalendar();
    }

    return (
      <div className={`calendar ${openCalendar}`}>
        <div
          className={`calendar__overlay ${openCalendarOverlay}`}
          onClick={toggleOpenCalendarHandler}
        ></div>
        <div className={`calendar__content ${openCalendarContent}`}>
          <h2 className={`calendar__title`}>Календарь</h2>
          <div className="calendar__menu">
            <button className="calendar__menu-button" onClick={() => {functions.onClickArrow('left')}}>{"<"}</button>
            {state.mode === "days" && (
              <button
                className="calendar__menu-button"
                onClick={() => functions.setMode("monthes")}
              >{`${state.selectedMonth.monthName} ${state.selectedYear}`}</button>
            )}
            {state.mode === "monthes" && (
              <button
                className="calendar__menu-button"
                onClick={() => functions.setMode("years")}
              >{`${state.selectedYear}`}</button>
            )}
            {state.mode === "years" && (
              <button
                className="calendar__menu-button"
                onClick={() => functions.setMode("days")}
              >{`${state.selectedYearsInterval[0]} - ${
                state.selectedYearsInterval[
                  state.selectedYearsInterval.length - 1
                ]
              }`}</button>
            )}
            <button className="calendar__menu-button" onClick={() => {functions.onClickArrow('right')}}>{">"}</button>
          </div>
          <ul className="calendar__table list-style">
            {state.mode === "days" &&
              state.weekDaysNames.map((weekDaysName) => (
                <li className="calendar__week-days" key={weekDaysName.dayShort}>
                  {weekDaysName.dayShort}
                </li>
              ))}

            {state.mode === "days" &&
              state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDate.date
                );
                const isAdditionalDay =
                  day.monthIndex !== state.selectedMonth.monthIndex;
                const isWeekend =
                  day.dayShort === "сб" || day.dayShort === "вс";

                return (
                  <li
                    className={`calendar__day 
                ${isToday ? " calendar__today" : ""}
                ${isSelectedDay ? " calendar__today" : ""}
                ${isWeekend ? " calendar__weekend" : ""}
                ${isAdditionalDay ? " calendar__additional-day" : ""}
                `}
                    key={day.timestamp}
                    onClick={() => {
                      functions.setSelectedDate(day);
                    }}
                  >
                    {day.dayNumber}
                  </li>
                );
              })}
          </ul>
          <button className="calendar__choose-button" onClick={() => {
            selectDate(state.selectedDate.date);
            toggleOpenCalendarHandler();
          }}>Выбрать</button>
        </div>
      </div>
    );
  }
