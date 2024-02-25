import React, {useState, useMemo} from "react";
import { createDate } from "../../../utils/date/createDate";
import { createMonth } from "../../../utils/date/createMonth";
import { getMonthNames } from "../../../utils/date/getMonthNames";
import { getWeekDaysNames } from "../../../utils/date/getWeekDaysNames";

interface useCalendarParams {
    locale?: string;
    selectedDate?: Date;
    firstWeekDay: number;
}

export const useCalendar = ({
    locale = 'default',
    selectedDate: date,
    firstWeekDay = 2
    }: useCalendarParams,
    ) => {
    const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days')

    const [selectedDate, setSelectedDate] = useState(createDate({ date }))
    const [selectedMonth, setSelectedMonth] = useState(createMonth({ date: new Date(selectedDate.year, selectedDate.monthIndex), locale }));

    const [selectedYear, setSelectedYear] = useState(selectedDate.year)

    const monthesNames = useMemo(() => getMonthNames(locale), [])
    const weekDaysNames = useMemo(() => getWeekDaysNames(firstWeekDay, locale), []);

    const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth, selectedYear])
    // console.log('fffffff', monthesNames);
    console.log(days);

    return {}

}