/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: Weekday): boolean {
  switch (day) {
    case Weekday.Saturday:
    case Weekday.Sunday:
      return true; 
    default:
      return false; 
  }
}

const today: Weekday = Weekday.Saturday;
const isTodayWeekend: boolean = isWeekend(today);
console.log(`Сьогодні вихідні? ${isTodayWeekend}`);