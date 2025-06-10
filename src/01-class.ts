const date = new Date();

date.getHours(); // $ExpectType number`
date.getTime(); // $ExpectType number
date.toISOString();

const date2 = new Date(1993, 1, 12);

date2.getHours(); // $ExpectType number
date2.getTime(); // $ExpectType number
date2.toISOString(); // $ExpectType string

console.log(date)
console.log(date2)

let myVar

class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const myDate = new MyDate(1993, 1, 12);
console.log(myDate);