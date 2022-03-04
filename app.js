var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var icon = document.querySelector('.icon');
var button= document.querySelector('.submit');
const targetDiv=document.getElementById("container");
targetDiv.style.display = "none";
function showDiv(){
 
    targetDiv.style.display = "block";
}



 function weatherapi(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())


.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var iconimage = data['weather'][0]['icon'];
  console.log(iconimage);

  main.innerHTML = nameValue;
  desc.innerHTML = "Description : "+descValue;
  temp.innerHTML = "Temperature : "+tempValue+"&deg;C";
  icon.src= 'https://openweathermap.org/img/wn/'+iconimage+'.png';
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
}
button.addEventListener('click', function(){
  showDiv();
  weatherapi();
});
