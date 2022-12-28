const database = [
    {name: "John", country: "Israel", age: 19, isMarried: true},
    {name: "Mary", country: "Israel", age: 29, isMarried: false},
    {name: "Bill", country: "Belgium", age: 10, isMarried: false},
    {name: "Jane", country: "France", age: 30, isMarried: true},
    {name: "Hanna", country: "France", age: 9, isMarried: false},
    {name: "George", country: "Israel", age: 80, isMarried: true}
];
/*1. Select and print all married person. (filter)*/
const personIsMarried = database.filter(function (person) {
    return person.isMarried === true;
});
console.log(JSON.stringify(personIsMarried));
/*2. Print database sorted by age ASC. (min->max) (sort)*/
const databaseSort = database.sort(function (person1, person2) {
    /*if (person1.age < person2.age) return -1;
    if (person1.age > person2.age) return 1;
    if (person1.age = person2.age) return person1.name - person2.name;*/
    return person1.age - person2.age;
});
console.log(JSON.stringify(databaseSort));
/*3. Calculate average age. (reduce)*/
const average = database.reduce(function (accum, item, index, array) {
    accum += item.age;
    if (index === array.length - 1) {
        return accum / array.length
    }
    return accum;
}, 0);
console.log(average);
/*4. Print statistic by country.
{'Israel':3, ...}*/
const statisticByCountry = database.reduce(function (accum, value) {
   /* if(accum[value.country]){
        accum[value.country] ++;
    } else {
        accum[value.country] = 1;
    }*/
    (accum[value.country])?accum[value.country] ++:accum[value.country] = 1;
    return accum;
},{});
console.log(statisticByCountry);

/*5#. Print married person sorted ASC by name, not married DESC by
age and average age of married person.*/
const sortiedMarriedByNameAsc = personIsMarried.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            if (a.name == b.name) return 0;

});
console.log(JSON.stringify(sortiedMarriedByNameAsc));
const averageAgeOfMarried = personIsMarried.reduce(function (accum, item, index, array) {
    accum += item.age;
    if (index === array.length - 1) {
        return accum / array.length
    }
    return accum;
}, 0);
console.log(averageAgeOfMarried);

const personIsNotMarried = database.filter(function (person) {
    return person.isMarried === false;
});
const sortiedAreNotMarriedByAgeDesc = personIsNotMarried.sort(function (a,b) {
    if (a.age > b.age) return -1;
    if (a.age < b.age) return 1;
    if (a.age == b.age) return 0;
});
console.log(JSON.stringify(sortiedAreNotMarriedByAgeDesc));

/*6. Remove user by position.*/

const removeUser = database.filter(function (element) {
    return element.name !='Bill';
});
console.log(JSON.stringify(removeUser));

