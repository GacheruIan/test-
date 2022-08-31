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

})

// feed-back form
const myForm = document.getElementById("form").addEventListener('submit', function(event){
event.preventDefault()
alert("Thanks for your the feedback pal!")
})