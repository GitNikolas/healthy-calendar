import React from "react";
import { createDate } from '../../utils/date/createDate';
import { useCalendar } from '../../components/Calendar/hooks/useCalendar';
import './calendar.css';
import { checkIsToday } from "../../utils/date/checkIsToday";
import { checkDateIsEqual } from "../../utils/date/checkDateIsEqual";
import MenuButton from "../UI/Menu-button/MenuButton";
import SetDateButton from "../UI/Menu-button/SetDateButton/SetDateButton";
import { formateDate } from "../../utils/date/formateDate";

interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDay?: number;
    isOpen?: boolean;
    toggleOpenCalendar: Function;
    yellowLine: number[];
    greenLine: number[];
}

export const Calendar: React.FC<CalendarProps> = ({
    locale = 'default',
    firstWeekDay = 2,
    selectDate,
    selectedDate: date,
    isOpen,
    toggleOpenCalendar,
    yellowLine,
    greenLine
    }) =>  {
    const { state,functions } = useCalendar({ firstWeekDay, locale, selectedDate: date });

    const openCalendarContent:string = isOpen ? 'calendar__content_opened' : '';
    const openCalendarOverlay:string = isOpen ? 'calendar__overlay_opened' : '';

    function toggleOpenCalendarHandler() {
        toggleOpenCalendar();
    }

    return (
      <div className='calendar'>
            <div className="calendar__header">
          <div className="calendar__header-menu">
            <MenuButton onClick={() => {
              let selectDateTimestamp = state.selectedDate.timestamp;
              let nextDate = selectDateTimestamp - (24*60*60*1000);
              let date = new Date(nextDate);
              functions.setSelectedDate(createDate({date}));
              selectDate(date);
            }}>{'<'}</MenuButton>
            <SetDateButton onClick={toggleOpenCalendarHandler}>{formateDate(date,'DD.MM.YYYY')}</SetDateButton>

{ !checkIsToday(state.selectedDate.date)  && <MenuButton onClick={() => {
              let selectDateTimestamp = state.selectedDate.timestamp;
              let nextDate = selectDateTimestamp + (24*60*60*1000);
              let date = new Date(nextDate);
              functions.setSelectedDate(createDate({date}));
              selectDate(date);
            }}>{'>'}</MenuButton>}


          </div>
        </div>
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

            {state.mode === "days" && (
              <ul className="calendar__table list-style">

            {state.mode === "days" &&
              state.weekDaysNames.map((weekDaysName) => (
                <li className="calendar__week-days" key={weekDaysName.dayShort}>
                  {weekDaysName.dayShort}
                </li>
              ))}


              { state.calendarDays.map((day) => {
                 const isToday = checkIsToday(day.date);
                 const isSelectedDay = checkDateIsEqual(
                   day.date,
                   state.selectedDate.date
                 );
                 const isAdditionalDay =
                   day.monthIndex !== state.selectedMonth.monthIndex;
                 const isWeekend =
                   day.dayShort === "сб" || day.dayShort === "вс";
                 const underlining = day.timestamp <=  Date.now() ? 'calendar__day_underlining' : '';
                 const underliningGreen = greenLine.includes(day.timestamp);
                 const underliningYellow = yellowLine.includes(day.timestamp);
                 return (
                   <li
                     className={`calendar__day 
                 ${isToday ? " calendar__today" : ""}
                 ${isSelectedDay ? " calendar__selected-day" : ""}
                 ${isWeekend ? " calendar__weekend" : ""}
                 ${isAdditionalDay ? " calendar__additional-day" : ""}
                 ${underlining ? " calendar__day_underlining" : ""}
                 ${underliningGreen  ? ' calendar__day_underlining_green' : ''}
                 ${underliningYellow ? ' calendar__day_underlining_yellow' : ''}
                 `}
                     key={day.timestamp}
                     onClick={() => {
                       if(day.timestamp <= Date.now()) {
                         functions.setSelectedDate(day);
                       }
                     }}
                   >
                     {day.dayNumber}
                   </li>
                 );
               })}
             </ul>
 
            )}

          {state.mode === 'monthes' && (
            <ul className="list-style calendar__pick__items__container">
              {state.monthesNames.map(monthesName => {
                const isCurrentMonth =
                  new Date().getMonth() === monthesName.monthIndex && 
                  new Date().getFullYear() === state.selectedYear;
                const isSelectedMonth = monthesName.monthIndex === state.selectedMonth.monthIndex

                return <li key={monthesName.month} className={["calendar__month",
                  isCurrentMonth ? 'calendar__today' : '',
                  isSelectedMonth ? 'calendar__selected-day' : ''
                ].join(' ')}
                onClick={() => {
                  functions.setMode('days');
                  functions.setSelectedMonthByIndex(monthesName.monthIndex);
                }}
                >{monthesName.monthShort}</li>
              })}
            </ul>
          )}

        {state.mode === 'years' && (
          <div className='calendar__pick__items__container'>
            <div className='calendar__unchoosable__year'>{state.selectedYearsInterval[0] - 1}</div>
            {state.selectedYearsInterval.map((year) => {
              console.log(year)
              const isCurrentYear = new Date().getFullYear() === year;
              const isSelectedYear = year === state.selectedYear;

              return (
                <div
                  key={year}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedYear(year);
                    functions.setMode('monthes');
                  }}
                  className={[
                    'calendar__pick__item',
                    isCurrentYear ? 'calendar__today' : '',
                    isSelectedYear ? 'calendar__selected-day' : ''
                  ].join(' ')}
                >
                  {year}
                </div>
              );
            })}
            <div className='calendar__unchoosable__year'>
              {state.selectedYearsInterval[state.selectedYearsInterval.length - 1] + 1}
            </div>
          </div>
        )}



          <button className="calendar__choose-button" onClick={() => {
            selectDate(state.selectedDate.date);
            toggleOpenCalendarHandler();
          }}>Выбрать</button>

        </div>
      </div>
    );
  }
