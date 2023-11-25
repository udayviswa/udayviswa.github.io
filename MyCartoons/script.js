// implementing objects

const movies = [
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "totoro2.jpg",
    movieName: "My Neighbour Totoro"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "https://m.media-amazon.com/images/M/MV5BNTkzNjJhYjQtNjU0Yy00Y2M3LWI2ZDgtNDRhZmNlNDFjMjQ5XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_FMjpg_UX1000_.jpg",
    movieName: "Doraemon"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "totoro2.jpg",
    movieName: "My Neighbour Totoro"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "totoro.jpg",
    movieName: "My Neighbour Totoro"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "totoro.jpg",
    movieName: "My Neighbour Totoro"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "totoro.jpg",
    movieName: "My Neighbour Totoro"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "totoro.jpg",
    movieName: "My Neighbour Totoro"
    }

]

// need to implement better version of loop and variable names
// <p class="movieNames">${movie.movieName}</p> 
// <button type="button" class="movieNames">${movie.movieName}</button>

var index = 0; 
// var listItems = "";
var listItems = "";
while(index < movies.length){
  var movie = movies[index];
  listItems += `<div class="cards" id="cards">
      <a href= ${movie.movieLink}>
      <img src= ${movie.imagePath} alt="">
      <p class="movieNames" id="movieNames">${movie.movieName}</p> 
      </a>
      </div>`;
   index++;
}
document.getElementById("container").innerHTML = listItems;

// dark mode code 
function darkMode(){
    let color1 = document.getElementById("darkMode").innerText;
    if ( color1 == "Light"){
      lightMode();
    }
    else{
      dark();
    }
        // document.getElementById('myImage').src='pic_bulbon.gif'"
}

function dark(){
  document.body.style.backgroundColor = "black";
  document.getElementById("darkMode").style.backgroundColor = "white";
  $(".movieNames").css("background-color", "black");
  $("#header").css("background-color", "black");
  document.getElementById("darkMode").innerText = "Light";
}

function lightMode(){
    document.body.style.backgroundColor = "white";
    document.getElementById("darkMode").style.backgroundColor = "white";
    $(".movieNames").css("background-color", "teal");
    $(".movieNames").css("color", "white");
    $("#header").css("background-color", "teal");
    document.getElementById("darkMode").innerText = "Dark";
}

