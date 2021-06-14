 $("#search").hide()
 $("#checkbox").hide()
 function showSearch(){
     $("#search").show()
     $("#checkbox").hide()
 }

 function showQuick(){
     $("#search").hide()
     $("#checkbox").show()
 }
 


 function getMovie(){
      const movie = $("#movie").val()
        const split  = movie.split(' ')
         var title;
       if(split[0] == movie){
         title = movie
           console.log(title)
          }
         else{
            var first = split[0]
          for(i = 1; i<split.length; i++)
         title = first += "+" + split[i]
         console.log(title)
           }
                                    
            fetch('http://www.omdbapi.com/?apikey=2469208&t=' + title + '&plot=full&r=json')
             .then(function(response) {return response.json();})
            .then(function(json) {
             moviePlot = json.Plot;
             movieTitle = json.Title;
             Actors = json.Actors;
             director = json.Director;
             moviePoster = json.Poster
             document.getElementById('title').innerHTML = movieTitle;
        document.getElementById('director').innerHTML = director;
        document.getElementById('plot').innerHTML = moviePlot;
        document.getElementById('actors').innerHTML = Actors;
        document.getElementById("poster").src = moviePoster
             });			
  }
  
  function getDD(){
    const movie =  document.getElementsByClassName("w3-check")
    var title;
    const SW = movie[0]
    const TESB = movie[1]
    const ROTJ = movie[2]
    if(SW.checked == true && TESB.checked == false && ROTJ.checked == false){
        const split = SW.value.split(' ')
        for(i=1; i<split.length; i++){
            title = split[0] += "+" + split[i]
        }
        fetch('http://www.omdbapi.com/?apikey=2469208&t=' + title + '&plot=full&r=json')
        .then(function(response) {return response.json();})
       .then(function(json) {
        moviePlot = json.Plot;
        movieTitle = json.Title;
        Actors = json.Actors;
        director = json.Director;
        moviePoster = json.Poster
        document.getElementById('title').innerHTML = movieTitle;
        document.getElementById('director').innerHTML = director;
        document.getElementById('plot').innerHTML = moviePlot;
        document.getElementById('actors').innerHTML = Actors;
        document.getElementById("poster").src = moviePoster
        console.log(title)
        });			
    }

    else if(TESB.checked == true && SW.checked == false && ROTJ.checked == false){
        const split1 = TESB.value.split(' ')
        for(i=1; i<split1.length; i++){
            title = split1[0] += "+" + split1[i]
        }
        fetch('http://www.omdbapi.com/?apikey=2469208&t=' + title + '&plot=full&r=json')
        .then(function(response) {return response.json();})
       .then(function(json) {
        moviePlot = json.Plot;
        movieTitle = json.Title;
        Actors = json.Actors;
        director = json.Director;
        moviePoster = json.Poster
        document.getElementById('title').innerHTML = movieTitle;
        document.getElementById('director').innerHTML = director;
        document.getElementById('plot').innerHTML = moviePlot;
        document.getElementById('actors').innerHTML = Actors;
        document.getElementById("poster").src = moviePoster
        console.log(title)
        });			
    }

    else if(ROTJ.checked == true && SW.checked == false && TESB.checked == false){
        const split2 = ROTJ.value.split(' ')
        for(i=1; i<split2.length; i++){
            title = split2[0] += "+" + split2[i]
        }
        fetch('http://www.omdbapi.com/?apikey=2469208&t=' + title + '&plot=full&r=json')
        .then(function(response) {return response.json();})
       .then(function(json) {
        moviePlot = json.Plot;
        movieTitle = json.Title;
        Actors = json.Actors;
        director = json.Director;
        moviePoster = json.Poster;
        document.getElementById('title').innerHTML = movieTitle;
        document.getElementById('director').innerHTML = director;
        document.getElementById('plot').innerHTML = moviePlot;
        document.getElementById('actors').innerHTML = Actors;
        document.getElementById("poster").src = moviePoster
        console.log(title)
        });			
    }

    else if(ROTJ.checked == true && SW.checked == true && TESB.checked == true){
        document.getElementById("SW").click()
        document.getElementById("ROTJ").click()
        document.getElementById("TESB").click()
        alert("Please make one selection")
    }

    else if(ROTJ.checked == true && SW.checked == true){
        document.getElementById("SW").click()
        document.getElementById("ROTJ").click()
        alert("Please make one selection")
    }

    else if(SW.checked == true && TESB.checked == true){
        document.getElementById("SW").click()
        document.getElementById("TESB").click()
        alert("Please make one selection")
    }

    else if(TESB.checked == true && ROTJ.checked == true){
        document.getElementById("TESB").click()
        document.getElementById("ROTJ").click()
        alert("Please make one selection")
    }
  }                               

 