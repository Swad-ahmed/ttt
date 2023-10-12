function rock() {
    let cs = 'You Choose Rock'
    document.getElementById('choise').innerHTML = cs
    var pcc = Math.floor(Math.random ()* 3)

   if (pcc === 0) {
    document.getElementById("pcc").innerHTML = "You lose"
   }
   else{
    document.getElementById("pcc").innerHTML = "You win"
   }
}
function paper() {
    let cs = 'You Choose Paper'
    document.getElementById('choise').innerHTML = cs
    var pcc = Math.floor(Math.random ()* 3)
    if (pcc === 1) {
        document.getElementById("pcc").innerHTML = "You lose"
       }
       else{
        document.getElementById("pcc").innerHTML = "You win"
       }
}
function Scissors() {
    let cs = 'You Choose Scissors'
    document.getElementById('choise').innerHTML = cs
    var pcc = Math.floor(Math.random ()* 3)
    if (pcc === 2) {
        document.getElementById("pcc").innerHTML = "You lose"
       }
       else{
        document.getElementById("pcc").innerHTML = "You win"
       }
}





