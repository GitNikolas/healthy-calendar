import React from "react";
import { createDate } from "../../../utils/date/createDate";
import { createMonth } from "../../../utils/date/createMonth";
import { getMonthNames } from "../../../utils/date/getMonthNames";

interface useCalendarParams {
    locale?: string;
    selectedDate?: Date;
}

export const useCalendar = ({ locale = 'default', selectedDate: date }: useCalendarParams) => {
    const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days')

    const [selectedDate, setSelectedDate] = React.useState(createDate({ date }))
    const [selectedMonth, setSelectedMonth] = React.useState(createMonth({ date: new Date(selectedDate.year, selectedDate.monthIndex), locale }));

    const [selectedYear, setSelectedYear] = React.useState(selectedDate.year)

    const monthesNames = React.useMemo(() => getMonthNames(locale), [])

    const weekDaysNames = React.useMemo(() => {}, [])

    console.log('fffffff', monthesNames);
    return {}

}