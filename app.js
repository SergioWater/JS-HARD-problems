function showRating(rating){
    let ratings = ""
    for(let i = 0; i < Math.floor(rating); i++){
        ratings += "*"
        if(i !== Math.floor(rating) - 1){
            ratings += " "
        }
    }
    if(!Number.isInteger(rating))
    {
        ratings += ' .'
    }
    return ratings
}
console.log(showRating(3.5))


function sortLowToHigh(array){
    return array.sort((a,b) => a - b)
}
console.log(sortLowToHigh([1,5,0,10,23]))

function sortHighToLow(array){
    return array.sort((a, b) => b.price - a.price)
}
console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 210},
    {id: 3, price: 500}]
    ))
