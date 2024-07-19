/* Дано ціле число N (ввести через prompt). 
 Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N */

const number = prompt('Enter a number');

if (number === null) {
    alert('You canceled!');
} else if (!number.trim()) {
    alert('You entered nothing!');
} else if (isNaN(number) || !Number.isInteger(+number)) {
    alert('Enter a valid number!');
} else {
    const wholeNumber = Math.abs(number);

    for (let i = 1; i <= 100; i++) {
        if (i ** 2 <= wholeNumber) {
          console.log(i);  
    } else {
        break;
    }
}
}