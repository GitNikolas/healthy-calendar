import { createDate } from "./createDate";
import { createMonth } from "./createMonth";

interface createYearParams {
    locale?: string;
    year?: number;
    monthNumber?: number;
}

export function createYear(params?: createYearParams) {
    const locale = params?.locale ?? 'default';
    const monthCount = 12;
    const today = createDate();
    const year = params?.year ?? today.year;
    const monthNumber = params?.monthNumber ?? today.monthNumber;
    const month = createMonth({ date: new Date(year, monthNumber - 1), locale });
    
    function getMonthDays(monthIndex:number){
        return createMonth({date: new Date(year, monthIndex), locale}).createMonthDays();
    }

    function createYearMonthes() {
        const monthes = [];
        for (let i = 0; i < monthCount; i++) {
            monthes[i] = getMonthDays(i)
        }

        return monthes;
    }

    return {
        createYearMonthes,
        month,
        year,
    }
}