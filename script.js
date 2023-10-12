
function rock() {
    let cs = 'You Choose Rock'
    document.getElementById('choise').innerHTML = cs
    var pcc = Math.floor(Math.random ()* 3)

    if (pcc === 1) {
        document.getElementById("pcc").innerHTML = "You lose"
        document.getElementById("img").src ='Paper.png'
       }
   
       else{
        if (pcc === 0){
            document.getElementById("img").src ='Scissors.png'
        }
        if (pcc === 2){
            document.getElementById("img").src ='Rock.png'
            document.getElementById("pcc").innerHTML= "Draw"
        }
        else{
        document.getElementById("pcc").innerHTML = "You win"  
        }   
       }
}
function paper() {
    let cs = 'You Choose Paper'
    document.getElementById('choise').innerHTML = cs
    var pcc = Math.floor(Math.random ()* 3)
    if (pcc === 1) {
        document.getElementById("pcc").innerHTML = "You lose"
        document.getElementById("img").src ='Scissors.png'
       }
   
       else{
        if (pcc === 0){
            document.getElementById("img").src ='Rock.png'
        }
        if (pcc === 2){
            document.getElementById("img").src ='Paper.png'
            document.getElementById("pcc").innerHTML= "Draw"
        }
        else{
        document.getElementById("pcc").innerHTML = "You win"  
        }   
       }
}
function Scissors() {
    let cs = 'You Choose Scissors'
    document.getElementById('choise').innerHTML = cs
    var pcc = Math.floor(Math.random ()* 3)
    if (pcc === 1) {
        document.getElementById("pcc").innerHTML = "You lose"
        document.getElementById("img").src ='Rock.png'
       }
   
       else{
        if (pcc === 0){
            document.getElementById("img").src ='Paper.png'
        }
        if (pcc === 2){
            document.getElementById("img").src ='Scissors.png'
            document.getElementById("pcc").innerHTML= "Draw"
        }
        else{
        document.getElementById("pcc").innerHTML = "You win"  
        }   
       }
}










