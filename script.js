// script.js

let currentGift = 0;

function showGifts(){
document.getElementById("bgMusic").play();
  document.querySelector(".main-page").style.display = "none";

  document.getElementById("giftPage").style.display = "flex";

  showNextGift();
}

// Show gifts one by one
function showNextGift(){

  const gifts = document.querySelectorAll(".gift");

  gifts.forEach((gift,index)=>{

    if(index === currentGift){
      gift.style.display = "block";
    }else{
      gift.style.display = "none";
    }

  });

  // Remove old backgrounds
  document.body.classList.remove(
    "teddy-bg",
    "bubble-bg",
    "heart-bg",
    "star-bg"
  );

  // Add new background according to gift
  if(currentGift === 0){
    document.body.classList.add("teddy-bg");
  }

  else if(currentGift === 1){
    document.body.classList.add("bubble-bg");
  }

  else if(currentGift === 2){
    document.body.classList.add("heart-bg");
  }

  else if(currentGift === 3){
    document.body.classList.add("star-bg");
  }

}

function closePopup(){
    

  document.getElementById("popup").style.display = "none";
   document.getElementsById("bgMusic").play();

  currentGift++;

  const gifts = document.querySelectorAll(".gift");

  // Next gift show karo
  if(currentGift < gifts.length){
    showNextGift();
  }
}

function openMessage(){

  document.getElementById("popup").style.display = "flex";

  document.getElementById("popupContent").innerHTML = `
  
  <h2>💖</h2>

  <p>
  Happy Birthday dear 💖<br><br>
  dekho 12 baj gaye h or sabse pehli wish to meri hi honi chahiye😉<br>
  is baar kuch naya try kiya hai first time tumhare liye hi kiya hai agar accha laga to or bhi kar lungi
  😅😆
  <br>tumhare liye 🤔....kya hi bolu😆 samajh nahi aa raha h😂
  <br> kyuki ye unexpected dosti ik bahut hi accha bond ban gayi h. <br>
  hamesa ye aise hi rahe🧿. Tum hamesha hame sunti raho,hum pareshan karte rahe😅.
  <br>  
  Thank you for always being for  me.
  Stay happy forever  🎀

  </p>

  <button class="close-btn" onclick="closePopup()">Close</button>
  
  `;
  currentGift++;
  showNextGift();
}

function openPhotos(){

  document.getElementById("popup").style.display = "flex";

  document.getElementById("popupContent").innerHTML = `
  
  <h2>Memories 📸</h2>
  <div class="slideshow">

  <img id="slideImage" src="images/photo1.jpg" width="100">
  </div>
  <br>

  <button class="close-btn" onclick="closePopup()">Close</button>
  
  `;
  let images = [
    "images/photo1.jpg",
    "images/photo2.jpg"
  ];
  let index = 0;
  setInterval(() =>{
    index++;
    if(index >= images.length){
      index = 0;
    }
    document.getElementById("slideImage").src= images[index];
  },2000);
  currentGift++;
  showNextGift();
}

function openAudio(){
    document.getElementById("bgMusic").pause();

  document.getElementById("popup").style.display = "flex";

  document.getElementById("popupContent").innerHTML = `
  
  <h2>Use Earphones 🎧</h2>

  <audio controls autoplay>
    <source src="media/audio.mp3" type="audio/mp3">
  </audio>

  <br><br>

  <button class="close-btn" onclick="closePopup()">Close</button>
  
  `;
  currentGift++;
  showNextGift();
}

function openVideo(){
 document.getElementById("bgMusic").pause();

  document.getElementById("popup").style.display = "flex";

  document.getElementById("popupContent").innerHTML = `
  
  <h2>For You 🎥</h2>

  <video width="60%" controls id="birthdayVideo">
    <source src="media/video.mp4" type="video/mp4">
  </video>

  <br><br>

  <button class="close-btn" onclick="closePopup()">Close</button>
  
  `;
  setTimeout(()=>{

  const video = document.getElementById("birthdayVideo");

  video.onended = function(){

    document.getElementById("popup").style.display = "none";

    document.getElementById("finalCake").style.display = "flex";

  }

},500);
currentGift++;
  showNextGift();
}
function blowCandle(){

  document.querySelector(".candle").innerHTML = "💨";

  document.getElementById("boom").style.display = "block";

}