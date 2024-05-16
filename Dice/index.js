const mybtn = document.getElementById("mybtn");
const mylbl = document.getElementById("mylbl");

const min = 1;
const max = 6;

let randomNum;

mybtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    mylbl.textContent = randomNum;
}