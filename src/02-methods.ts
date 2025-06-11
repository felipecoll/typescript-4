export class MyDate {
    year : number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    monthArray = [        
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December']
    
    printFormat(): string {
        return `${this.day}-${this.monthArray[this.month]}-${this.year}`;
    }

    add(amount: number, type: 'day' | 'month' | 'year') {
            this[type]+= amount;

            return this.printFormat();
    }
    
}

const date = new MyDate(2013,11, 6);

console.log(date.printFormat()); // 6-December-2013

console.log(date.add(-4, 'month')); // 6-August-2013