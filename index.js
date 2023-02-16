// // Code your solution here
// function findMatching (name, string){
//     return name.filter(
//         (someMatch) => someMatch.toLowerCase() === string.toLowerCase()
//     );
// }

let findMatching = (name, string) => name.filter(
    (someMatch) => someMatch.toLowerCase() === string.toLowerCase()
);

function fuzzyMatch (name, string){
    return name.filter(
        (someMatch) => someMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    );
} 

function matchName (objects, string){
    return objects.filter((record) => record.name === string);
}