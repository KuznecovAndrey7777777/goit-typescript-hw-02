// У TypeScript тип unknown дозволяє нам зберігати будь-які значення,
// але ми можемо привласнити unknown змінну безпосередньо інший змінної,
// якщо ми впевнені у її типі.У вас є наступний код:

// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;
// Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?

let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
} else {
  //some не є типом string
}
