let championOverwatch = ['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree', 'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo', 'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

console.log(championOverwatch)
console.log(championOverwatch[2])
console.log(championOverwatch[15])
console.log(championOverwatch[5]="Cole Cassidy")

championOverwatch.push("Ramattra", "nop");
console.log(championOverwatch)

championOverwatch.pop()
console.log(championOverwatch)

console.log(championOverwatch.join())
console.log(championOverwatch.slice(7, 12));

championOverwatch.unshift("champion : 0")
console.log(championOverwatch);

championOverwatch[14] = championOverwatch[14].toUpperCase()
console.log(championOverwatch)

console.log(championOverwatch[14].toUpperCase());
console.log(championOverwatch.length)

let message = "Les héros d'Overwatch sont : [";

championOverwatch.forEach(heros => {
    message += heros + ", ";
});
message = message.slice(0, -2);
message += "]";

console.log(message);





