// function showRating(rating){
//     let ratings = ""
//     for(let i = 0; i < Math.floor(rating); i++){
//         ratings += "*"
//         if(i !== Math.floor(rating) - 1){
//             ratings += " "
//         }
//     }
//     if(!Number.isInteger(rating))
//     {
//         ratings += ' .'
//     }
//     return ratings
// }
// console.log(showRating(3.5))


// function sortLowToHigh(array){
//     return array.sort((a,b) => a - b)
// }
// console.log(sortLowToHigh([1,5,0,10,23]))

// function sortHighToLow(array){
//     return array.sort((a, b) => b.price - a.price)
// }
// console.log(sortHighToLow([
//     {id: 1, price: 50},
//     {id: 2, price: 210},
//     {id: 3, price: 500}]
//     ))
async function postByUser(userID){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const results = await promise.json()

    const post = results.filter(element => element.userId === userID)

    console.log(post) 
}

postByUser(5);

async function firstSixIncomplete(completed){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const results = await promise.json()
    const incomplete = results.filter(element => !element.completed).slice(0, 6)
    console.log(incomplete)
}
firstSixIncomplete(6)