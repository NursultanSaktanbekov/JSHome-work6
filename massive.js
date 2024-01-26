'use strict'

// const dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ['1', '2', '3', '4']];

// const secondArr = dayOfTheWeek.slice() /* правильное взаимодействие с массивом */

// dayOfTheWeek.pop()

// dayOfTheWeek.pop(); /* удаляет последний элемент в массиве */

// dayOfTheWeek.indexOf('sunday')    /* под каким индексом находиться тот или ной элемент?? */

// dayOfTheWeek.includes('Sunday') /* узнает сначала есть ли такой элемент и выдает булевое значение true or false */  

// dayOfTheWeek.lastIndexOf('Saturday') /* ищет с конца */

// console.log(dayOfTheWeek.at(-1)) /* выводит последний массив */

// dayOfTheWeek.push('добавлен в конец массива'); /* добавляет в конец массива  */

/* Push работает быстрее чем unshift */

// dayOfTheWeek.unshift('string one') /* Добавили в начало массива */


/*  */

// const numbersArr = []
// for (let i = 0; i <= 1000; i += 2) {
//     numbersArr.push(i)
// }

// numbersArr.shift() /* удаляет 1-ый элемент в массиве * 



/* 1) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result. */

// const array = [1, 2, 3, 4, 5]
// let counter = 0;
// for (let i = 0; i < array.length; i++) {
//     counter = array[i] + counter;
// }
// console.log(counter);

/* 2) Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. */

// const array = [1, -2, -3, -4, 5]
// let counter = 0;
// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 0) {
//         counter += array[i]
//     }
// }
// console.log(counter);

/* 3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо. */

// const array = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i = 0; i < array.length; i ++) {
//     if(array[i] === 4) {
//         console.log('Есть!');
//         break;
//     }
// }

/* 4) Дан массив с элементами ['Привет,', 'мир', '!']. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.*/
// const arr = ['Привет,', 'мир', '!']
// const text = arr.join('');
// console.log(text)

/* 5) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе. */
// const letter = ['a', 'b', 'c']
// const num = [1, 2, 3]
// const finalArr = letter.concat(num)
// console.log(finalArr)

/* 6) Дан массив ['a', 'b', 'c']. Добавьте ему в начало элементы 1, 2, 3. И отдельно добавьте в конец массива 1,2,3 */
// const letter = ['a', 'b', 'c']
// const newNum = letter.unshift('1, 2, 3')
// console.log(letter)

// const lastNum = letter.push('1, 2, 3')
// console.log(letter)

/* 7) Создайте массив ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'. */
// let arr = ['a', 'b', 'c', 'd'];
// let result = arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3];
// console.log(result);

/* 8) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. */
// const firstArr = [1, 2, 3, 4, 5]
// const transformArr = firstArr.slice(0,3)
// console.log(transformArr)

/* 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. */
// const number = [1, 2, 3, 4, 5]
// number.splice(1,2)
// console.log(number)

/* 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */
// const firstArr = [1, 2, 3, 4, 5];
// firstArr.splice(1,0, 'a', 'b');
// firstArr.splice(6, 0, 'c')
// firstArr.splice(8, 0, 'e')
// console.log(firstArr)

/* 11) Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и отдельно последний элемент. Используйте shift, pop */
// const firstArr = ['js', 'css', 'jq']
// firstArr.shift(1)
// firstArr.pop()
// console.log(firstArr)

.



