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

// new button for previewing images
const previewBtn = document.getElementById("previewBtn");
const imagesContainer = document.getElementById("Images");

previewBtn.addEventListener("click", function() {
    // clear any previous images
    imagesContainer.innerHTML = "";

    // list of media URLs (images or videos) -- update to your own files
    const mediaURLs = [
        "videos/clip1.mp4",
        "images/picture1.jpg",
        "videos/clip2.mp4",
        "images/picture2.jpg",
        "videos/clip3.mp4",
        "videos/clip4.mp4",
        "videos/clip5.mp4",
        "videos/clip6.mp4",
        "videos/clip7.mp4",
        "videos/clip8.mp4",
        "videos/clip9.mp4",
        "videos/clip10.mp4"
    ];

    mediaURLs.forEach(url => {
        const ext = url.split('.').pop().toLowerCase();
        if (['mp4', 'webm', 'ogg'].includes(ext)) {
            const video = document.createElement('video');
            video.src = url;
            video.controls = true;
            // ensure video is not muted and has volume
            video.muted = false;
            video.volume = 1;
            video.classList.add('preview-media');
            video.style.maxWidth = '100%';
            imagesContainer.appendChild(video);
        } else {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Birthday preview";
            img.classList.add("preview-img");
            imagesContainer.appendChild(img);
        }
    });

    // if the behind section is hidden, make sure it's visible
    imagesContainer.closest(".behind").style.display = "block";
});