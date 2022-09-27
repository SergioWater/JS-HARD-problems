function showRating(rating){
    let ratings = ""

    for(let i = 0; i < Math.floor(rating); i++){
        ratings = ratings + "*"
        if(i !== Math.floor(rating) - 1){
            ratings = ratings + " "
        }
    }
    if(!Number.isInteger(rating)){
        ratings = ratings + " ."
    }

    return ratings
}
console.log(showRating(1.5))