import { createDate } from "./createDate";
import { getMonthNumberOfDays } from "./getMonthNumberOfDays"; 
interface createMonthParams {
    locale?: string;
    date?: Date;
}

export function createMonth(params?:createMonthParams){
    const locale = params?.locale ?? 'default';
    const date = params?.date ?? new Date();

    const d = createDate({date, locale});
    const { month: monthName, year, monthNumber, monthIndex} = d;

    function getDay(dayNumber: number){
        return createDate({ date: new Date(year, monthIndex, dayNumber), locale });
    }

    function createMonthDays(){
        const days = [];
        for(let i = 0; i < getMonthNumberOfDays(monthIndex, year); i++) {
            days[i] = getDay(i + 1)
        }

        return days;
    }

    return {
        getDay,
        monthName,
        monthIndex,
        monthNumber,
        year,
        createMonthDays
    }
}