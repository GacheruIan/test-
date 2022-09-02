function myFunction(x) {
    x.classList.toggle("change");
  }

  const storeimg = document.querySelector('.image1')
  fetch("http://localhost:3000/image1/")
 .then(res => res.json())
 .then(function one(data){
  const storeimg = document.querySelector('.image1').src = data[0].image0
  const storeText0 = document.querySelector('#h31').innerHTML = data[0].title
  console.log(data[0].title)
 

  const addLikes = document.querySelector("#like-count");
  let likes = 0;
  document.querySelector("#like-button").addEventListener("click", () =>{
    likes += 1;
    renderLikes();
})
function renderLikes() {
    document.querySelector("#like-count").textContent = `${likes} likes`;
}
 })


fetch("http://localhost:3000/image2")
.then(res => res.json())
.then(function two(object){
const storeimgg = document.querySelector('.image2').src = object[0].image1
const storeText1= document.querySelector('#h32').innerHTML = object[0].title
const addLikes = document.querySelector("#like-count");
let likes = 0;
document.querySelector("#like-button1").addEventListener("click", () =>{
    likes += 1;
    renderLikes();
})
function renderLikes() {
    document.querySelector("#like-count1").textContent = `${likes} likes`;
}
})

fetch("http://localhost:3000/image3")
.then(res => res.json())
.then(function three(obj){
const storeimggg = document.querySelector('.image3') .src = obj[0].image2
const storeText1= document.querySelector('#h33').innerHTML = obj[0].title
const addLikes = document.querySelector("#like-count");
let likes = 0;
document.querySelector("#like-button2").addEventListener("click", () =>{
    likes += 1;
    renderLikes();
})
function renderLikes() {
    document.querySelector("#like-count2").textContent = `${likes} likes`;
}
})


// new ones


fetch("http://localhost:3000/image4")
.then(res => res.json())
.then(function four(obj4){
    const storeimg4 = document.querySelector('.image4').src = obj4[0].image4
    const storeText4= document.querySelector('#h34').innerHTML = obj4[0].title
    let likes = 0;
document.querySelector("#like-button4").addEventListener("click", () =>{
    likes += 1;
    renderLikes();
})
function renderLikes() {
    document.querySelector("#like-count4").textContent = `${likes} likes`;
}
    
})


fetch("http://localhost:3000/image5")
.then(res => res.json())
.then(function five(obj5){
    const storeimg5 = document.querySelector('.image5').src = obj5[0].image5
    const storeText5= document.querySelector('#h35').innerHTML = obj5[0].title
    let likes = 0;
document.querySelector("#like-button5").addEventListener("click", () =>{
    likes += 1;
    renderLikes();
})
function renderLikes() {
    document.querySelector("#like-count5").textContent = `${likes} likes`;
}
   
})

fetch("http://localhost:3000/image6")
.then(res => res.json())
.then(function five(dat){
const image6 = document.querySelector('.image6').src = dat[0].image6
const title = document.querySelector('#h36').innerHTML = dat[0].title
let likes = 0;
document.querySelector("#like-button6").addEventListener("click", () =>{
    likes += 1;
    renderLikes();
})
function renderLikes() {
    document.querySelector("#like-count6").textContent = `${likes} likes`;
}
   
})

let suggestions = [
    "Tequilla-sunrise",
    "Dry~martini.",
    "Corpse~reviver",
    "Margarita.",
    "Negroni.",
    "Espresso~martini.",
   
 
];
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// feed-back form
const myForm = document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault()
    event.target.reset()
    alert(`Thanks for your the feedback pal`)
    })