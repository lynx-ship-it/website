const card= 
document.getElementById("birthdayCard");
const button=
document.getElementById("surpriseBtn");
const message=
document.getElementById("message");
const bgMusic=
document.getElementById("bgMusic");
const heartsContainer=
document.getElementById("heartsContainer");
button.addEventListener("click", function(){
    card.classList.add("flipped")
    setTimeout(()=>
message.classList.add("show"), 1000)
    bgMusic.play()
    generateHearts()
})
function generateHearts(){
    for(let i=0; i<30; i++){
        const heart=
document.createElement("div")
        heart.classList.add("heart")
        heart.style.left=Math.random()*
window.innerWidth+"px"
        heart.style.animationDuration=2+
Math.random()*3+"s"
        heart.textContent="💖"
        heartsContainer.appendChild(heart)
        heart.addEventListener("animationend", ()=>heart.remove())
    }
}