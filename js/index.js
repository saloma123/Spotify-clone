function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
      x.style.opacity="1";
    } else {
      x.style.visibility = "hidden";
      x.style.opacity="0";
    }
  }


let songs1 = [
  {
    image : "./images/TopHits.png",
    text1 : "Today's Top Hits",
    text2 : "Olivia Ridrigo is on top of the Hottest 50!"
  },
  {
    image : "./images/RapCaviar.png",
    text1 : "RapCaviar",
    text2 : "New music from Cardi B, Megan Thee Stalion and..."
  },
  {
    image : "./images/AllOut.png",
    text1 : "All Out 2010s",
    text2 : "The biggest songs of the 2010s"
  },
  {
    image : "./images/RockClassics.png",
    text1 : "Rock Classics",
    text2 : "Rock legends & epic songs that continue to inspire..."
  }
];

let songs2 = [
  {
    image : "./images/PeacefulPiano.png",
    text1 : "Peacful Piano",
    text2 : "Peacful piano to help you slow down,breathe,and..."
  },
  {
    image : "./images/DeepFocus.png",
    text1 : "Deep Focus",
    text2 : "Keep calm and focus with ambient and post-rock..."
  },
  {
    image : "./images/InsturmentalStudy.png",
    text1 : "Instrumental Study",
    text2 : "Focus with soft study music in the background."
  },
  {
    image : "./images/FocusFlow.png",
    text1 : "Focus Flow",
    text2 : "Uptempo insturmental hip hop beasts"
  }
];

let groupElement = document.querySelector(".cards-container");
songs1.forEach((element)=>{
  groupElement.innerHTML += 
  `<div class="card">
  <div class="sora">
    <img style="padding-top: 5px;" src="${element.image}" alt="katba esm 8lt" />
    <div class="play">
      <span class="fa fa-play"></span>
    </div>
  </div>
  <h4>${element.text1}</h4>
  <p>${element.text2}</p>
</div>`
})

let groupElement2 = document.querySelector(".cards-container2");
songs2.forEach((element)=>{
  groupElement2.innerHTML += 
  `<div class="card">
  <div class="sora">
    <img style="padding-top: 5px;" src="${element.image}" alt="katba esm 8lt" />
    <div class="play">
      <span class="fa fa-play"></span>
    </div>
  </div>
  <h4>${element.text1}</h4>
  <p>${element.text2}</p>
</div>`
})