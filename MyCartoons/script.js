// implementing objects

const movies = [
    {
    movieLink: "https://www.wcofun.tv/anime/scooby-doo-where-are-you-1969",
    imagePath: "https://m.media-amazon.com/images/M/MV5BN2EyMmIyMWItZTRiYy00MmE1LTkyOTAtMTliMzYwZGJlYmFjXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
    movieName: "Scooby Doo",
    genre:"cartoon"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "https://m.media-amazon.com/images/M/MV5BNTkzNjJhYjQtNjU0Yy00Y2M3LWI2ZDgtNDRhZmNlNDFjMjQ5XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_FMjpg_UX1000_.jpg",
    movieName: "Doraemon",
    genre:"cartoon"
    },
    {
    movieLink: "https://www.wcofun.tv/anime/ben-10",
    imagePath: "https://m.media-amazon.com/images/M/MV5BZjg2ZjViMTktNWQ1Yy00ODZiLWE1OTgtNDY3MjI0OGUyNjNhXkEyXkFqcGdeQXVyNTk4NDI4NTE@._V1_.jpg",
    movieName: "Ben 10",
    genre:"cartoon"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_.jpg",
    movieName: "Phineas and Ferb",
    genre:"cartoon"
    },
    {
    movieLink: "https://www.wcofun.tv/anime/avatar-the-last-airbender-book-1-water",
    imagePath: "https://m.media-amazon.com/images/I/916XiNKSc6L._AC_UF1000,1000_QL80_.jpg",
    movieName: "Avatar the last airbender",
    genre:"serial"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "https://m.media-amazon.com/images/M/MV5BMTY2NGRlZTgtZWU1ZC00NzhkLTgyMmYtYTQyZDgzYmE0ZmYzXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    movieName: "Mr Bean",
    genre:"cartoon"
    },
    {
    movieLink: "https://archive.org/details/totoro-foxdub",
    imagePath: "totoro.jpg",
    movieName: "My Neighbour Totoro",
    genre:"movie"
    },
    {
      movieLink: "https://www.wcofun.tv/anime/the-legend-of-korra",
      imagePath: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9157227_b_v9_aw.jpg",
      movieName: "The Legend of Korra",
      genre:"serial"
      },
      {
        movieLink: "https://www.wcofun.tv/anime/the-legend-of-korra",
        imagePath: "https://m.media-amazon.com/images/M/MV5BMTM1MTI5ODU4MV5BMl5BanBnXkFtZTcwNTYyNTU4Mg@@._V1_.jpg",
        movieName: "A Christmas Carol",
        genre:"movie"
        }

]



// need to implement better version of loop and variable names
// <p class="movieNames">${movie.movieName}</p> 
// <button type="button" class="movieNames">${movie.movieName}</button>
//<p class="movieNames" id="movieNames">${movie.movieName}</p> 
// <span class="fa fa-heart" onclick="favourite()"></span>

var index = 0; 
// var listItems = "";
var listItems = "";
while(index < movies.length){
  var movie = movies[index];
  listItems += `<div class="cards ${movie.genre}" id="cards">
      <a href= ${movie.movieLink}>
      <img src= ${movie.imagePath} alt="">
      <p class="movieNames" id="movieNames">${movie.movieName}</p> 
      </a>
      </div>`;
   index++;
}
document.getElementById("container").innerHTML = listItems;


// search function 

$(document).ready(function(){
  $("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#cards ").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


function favourite(){
}
// dark mode code 
function darkMode(){
    let color1 = document.getElementById("darkMode").innerText;
    if ( color1 == "Light"){
      lightMode();
    }
    else{
      dark();
    }
}

function dark(){
  document.body.style.backgroundColor = "black";
  document.getElementById("darkMode").style.backgroundColor = "white";
  $(".movieNames").css("background-color", "black");
  $("#header").css("background-color", "black");
  // $(".filter-item").css("color", "white");
  document.getElementById("darkMode").innerText = "Light";
}

function lightMode(){
    document.body.style.backgroundColor = "white";
    document.getElementById("darkMode").style.backgroundColor = "white";
    $(".movieNames").css("background-color", "teal");
    $(".movieNames").css("color", "white");
    $("#header").css("background-color", "teal");
    // $(".filter-item").css("color", "teal");
    // $(".active-filter").css("background-color", "teal");
    // $(".active-filter").css("color", "white");
    document.getElementById("darkMode").innerText = "Dark";
}

// filter function 

$(document).ready(function () {
  $(".filter-item").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "all"){
          $(".cards").show("3000")
      } else{
          $(".cards")
              .not("." + value)
              .hide(1000);
          $(".cards")
          .filter("." + value)
          .show("3000")
      }
  });
  $(".filter-item").click(function () {
      $(this).addClass("active-filter").siblings().removeClass("active-filter")
  });
});


// add new form 

// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
//   else{
//     window.location="sucessMsg.html";  
//   }
// }


