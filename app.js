// map, filter, reduce, find, findIndex, forEach

const animals=[
    { name:"cat"},
    { name:"fox"},
    { name:"bear"},
    { name:"dog"}
];
console.log(animals);

const meStud=animals.map(animal=>{
    return animal.name.toUpperCase()
})

console.log(meStud);
  
  
 