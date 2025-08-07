function analyze(){
    var Input = document.getElementById("Input").value
    var text = Input.length
    let wordcount = Input.split(" ").length
    var noSpace = text - (wordcount -1)
    let unique_words = [...new Set(Input.split(" "))]
    let free = {}
    Input.split(" ").map((word) => {
        free[word] = (free[word] || 0)+1
    }) 
    for(let x in free){
        console.log(x+" : "+free[x])
    }
    console.log("Space " + noSpace)
    console.log("Total Number Of  text " + text)
    console.log("Total Numner OF word " + wordcount)
    console.log(Input.match(/[.!?]/g))
    console.log(unique_words)
}