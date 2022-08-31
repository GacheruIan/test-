function myFunction(x) {
    x.classList.toggle("change");
  }


  fetch("http://localhost:3000/image1/")
  .then(res => res.json())
 .then(function one(data){
  const storeimg = document.querySelector('.image1').src = data[0].image0
  
 })


fetch("http://localhost:3000/image2")
.then(res => res.json())
.then(function two(object){
const storeimgg = document.querySelector('.image2').src = object[0].image1


})

fetch("http://localhost:3000/image3")
.then(res => res.json())
.then(function three(obj){
const storeimggg = document.querySelector('.image3') .src = obj[0].image2
console.log(obj[0].image2)

})

    // like to increment likes
    var likes = 0;
    var liked = false;
    //capture input from html
    button = document.getElementById("like-button");
    reflect = document.getElementById("like-count");

    function show() {
    reflect.innerHTML = likes + " Likes";
}
    button.onclick = function() {

    if (liked !== true){
        likes++;
    }
    show();
  }