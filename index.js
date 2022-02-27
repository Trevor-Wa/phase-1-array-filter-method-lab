const { objectContaining } = require("expect")

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    let matchfind = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    if (matchfind !== undefined){
        return matchfind}
        else {
            return undefined };
}
 
function fuzzyMatch(drivers,string){
    let matchFind = drivers.filter(element => element.startsWith(string))
            return matchFind};

function matchName(drivers, name){
    let matchfind = drivers.filter(hometown => hometown.name === name)
    return matchfind }