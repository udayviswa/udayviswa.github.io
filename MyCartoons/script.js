// implementing objects

const movies = [
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
var index = 0; 
// var listItems = "";
var listItems = "";
while(index < movies.length){
  var movie = movies[index];
  listItems += `<div class="cards" id="cards">
      <a href= ${movie.movieLink}>
      <img src= ${movie.imagePath} alt="">
      <p class="movieNames">${movie.movieName}</p>
      </a>
      </div>`;
   index++;
}
document.getElementById("container").innerHTML = listItems;

// dark mode code 
function darkMode(){
    document.body.style.backgroundColor = "black";
    document.getElementById("darkMode").style.backgroundColor = "black";
    // left at p element color change 
    
    // element.querySelectorAll(".movieNames").style.backgroundColor = "black";
    // const movieName = document.getElementById("movieNames");
    // movieName.style.backgroundColor = "black";
    // document.getElementsByTagName("P").style.backgroundColor = "black";
}