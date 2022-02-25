function findMatching(array, match){
    return array.filter(item => item.toLowerCase() === match.toLowerCase())
}

function matchName(drivers, match){
    return drivers.filter(item => item.name === match)
}

function fuzzyMatch(drivers, string){
    //const testLength = string.length
    return drivers.filter(function(item){
        return item.substring(0, string.length) === string
    })
}

//const testArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']