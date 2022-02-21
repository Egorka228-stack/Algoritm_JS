// Алгоритмы

// function isFirstElementOfArray(arr, element){
//     return arr[0]=== element
// }

// const arr = [0,1,2,5,7,8];
// const arr2 = Array(8);
// // если Array дать только 1 число, то он создаст пустой масив. А 1 цифра в нем будет показывать сколько будет елемнтов в масиве, но он все еще пустой
// const num1 = 8;
// const num2 = 0;

// console.time('0(1)')
// // таймер крутит пока его не остановят
// const result1 = isFirstElementOfArray(arr, num1);
// console.timeEnd('0(1)');
// // time i timeEnd показывает в консоле сколько занял времени выполнения кода

// const result2 = isFirstElementOfArray(arr, num2);


const user1 = {
    id: 1,
    name: 'Jahn',
    lastName:'Niklas'
}

const user2 = {
    id: 2,
    name: 'Yehor',
    lastName:'Melnik'
}

const user3 = {
    id: 3,
    name: 'Anton',
    lastName:'Marcowich'
}

const jahnMessages = [
    'Hi.',
    'Who are you?.',
    'Bye.'
]

const yehorMessages = [
    'Намастэ.',
    'pricol.',
    '(-_-)'
]


const antonMessages = [
    'Guten Tag.',
    'Wie gehts?',
    'Auf Wiedersehen.'
]

const map = new Map();
map.set(user1.id, jahnMessages);
map.set(user2.id, yehorMessages);
map.set(user3.id, antonMessages);


function userMassege(id){
    return map.get(id);
}