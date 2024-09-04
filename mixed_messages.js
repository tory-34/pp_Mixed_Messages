const when = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const who = ['Mindy', 'Cindy', 'Jack', 'John', 'Mark', 'Miranda', 'Julia', 'Jill', 'Amy', 'Mitchell', 'Darnell'];
const how = ['kissed', 'swam', 'kicked', 'tickled', 'punched', 'cursed', 'fell', 'jumped', 'skipped', 'wrote', 'spoke', 'cooked'];
const what = ['ball', 'needle', 'book', 'axe', 'sofa', 'trunk', 'bus', 'patio'];

var day = when[Math.floor(Math.random() * when.length)];
var name = who[Math.floor(Math.random() * who.length)];
var verb = how[Math.floor(Math.random() * how.length)];
var noun = what[Math.floor(Math.random() * what.length)];

let text = `On ${day}, ${name} ${verb} on the ${noun}.`;

console.log(text);