// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let book1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(book1);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book2 = {
    title : "Harry Potter",
    pageCount: "248",
    genre: "novel"
};
console.log(book2);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const book3 = {
    title: 'Kobzar',
    pageCount: "720",
    genre: "poetry",
    authors: {
        name: "Taras Shevchenko",
        age: 47
    }
}

const book4 = {
    title: 'Lisova Pisnya',
    pageCount: "152",
    genre: "drama",
    authors: {
        name: "Lesya Ukrainka",
        age: 42
    }
}

const book5 = {
    title: 'Lys Mykyta',
    pageCount: "88",
    genre: "tale",
    authors: {
        name: "Ivan Franko",
        age: 59
    }
}
console.log(book3,book4,book5);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// Footer


let group = [
    {
        user: 'Vasyl',
        username: 'Vasyok',
        password: '111'
    } ,
    {
        user: 'Alexandr',
        username: 'Alex',
        password: '112'
    },
    {
        user: 'Volodymyr',
        username: 'Vova',
        password: '113'
    },
    {
        user: 'Stepan',
        username: 'Styopchik',
        password: '114'
    },
    {
        user: 'Oleg',
        username: 'Olko',
        password: '115'
    },
    {
        user: 'Veronika',
        username: 'Nika',
        password: '116'
    },
    {
        user: 'Iryna',
        username: 'Ira',
        password: '117'
    },
    {
        user: 'Nazar',
        username: 'Nazik',
        password: '118'
    },
    {
        user: 'Svyatoslav',
        username: 'Svyat',
        password: '119',
    },
    {
        user: 'Katerina',
        username: 'Katya',
        password: '120'
    }
]
console.log(group[0].password);
console.log(group[1].password);
console.log(group[2].password);
console.log(group[3].password);
console.log(group[4].password);
console.log(group[5].password);
console.log(group[6].password);
console.log(group[7].password);
console.log(group[8].password);
console.log(group[9].password);

