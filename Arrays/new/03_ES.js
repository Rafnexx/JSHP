/*
    Wyjaśnienie:

    .toLocaleDateString - zwraca datę w lokalnym formacie,
    - pierwszy parametr to język: możemy określij w jakim języku ma zwrócić nazwy
    - drugi parametr do dodatkowe opcje do wyoboru: long, short ...

    new Date - zwraca aktualną datę, gdzie:
    - pierwszy parametr to rok,
    - drugi to miesiąc (co w tym przypadku zwiększamy o jeden)
    - ostatni to dzień

    Tych parametrów nie ptrzebujemy

*/
// Zwraca tablicę z nazwami miesięcy
const monthsDays = Array.from({ length: 12 }, (x, i) => {
  return new Date(0, i + 1, 0).toLocaleDateString(undefined, {
    month: "long"
  });
});

// zwraca ilość dni w miesiącu, 0 to ostatni dzień poprzedniego miesiąca
function getDaysCount(month, year) {
  return new Date(year, month, 0).getDate();
}

// tworzy kalendarza na danych miesiąc:
function createCalendar() {
  const actualDate = new Date();
  const month = actualDate.getMonth();
  const year = actualDate.getFullYear();
  const countOfDays = getDaysCount(month + 1, year);

  const result = Array.from({ length: countOfDays }, (x, i) => {
    let name = new Date(0, 0, i + 1).toLocaleDateString(undefined, {
      weekday: "short"
    });
    let numeric = new Date(0, 0, i + 1).toLocaleDateString(undefined, {
      day: "2-digit"
    });
    return {
      [name]: numeric
    };
  });
  return result;
}

const ar2 = createCalendar()
ar2.map(el => console.table(el))
const ar = createCalendar().map(e => Object.entries(e));
console.log(ar.flat())
