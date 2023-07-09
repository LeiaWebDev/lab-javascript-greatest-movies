// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

 //Iteration 1: All directors
// We need to get the array of all directors. 

function getAllDirectors(moviesArray) {    
    const allDirectors = moviesArray.map((movie)=> movie.director)
    return allDirectors
}



// Iteration 2: Steven Spielberg. The best? - 
// How many drama movies did STEVEN SPIELBERG direct?

//import {movies} from "./data.js"
function howManyMovies(moviesArray) {
    const countSpielbergDramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes("Drama"))
        return countSpielbergDramaMovies.length
}


// Iteration 3: All scores average - 

function scoresAverage(moviesArray) {

let moviesScores = moviesArray.reduce((sumScores, movie) => 
    sumScores += movie.score, 0);
    let averageMoviesScores = moviesScores/moviesArray.length;
    let averageMoviesScoresRounded = Math.round(averageMoviesScores * 100)/100;
    return averageMoviesScoresRounded;
};


// Iteration 4: Drama movies - Get the average of all Drama Movies
//Again, rounded to 2 decimals!

function dramaMoviesScore(moviesArray) {

    const selectDramaMovies = moviesArray.filter(movie => movie.genre && movie.genre.includes("Drama"))
    // if (movie.genre.includes("Drama") === null){
    //     return 0
    // }

    let dramaMoviesScores = selectDramaMovies.reduce((sumDramaScores, movie) => 
    sumDramaScores += movie.score, 0);
    let averageDramaMoviesScores = dramaMoviesScores/selectDramaMovies.length;
    let averageDramaMoviesScoresRounded = Math.round(averageDramaMoviesScores * 100)/100;
    return averageDramaMoviesScoresRounded;
};




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// We need to sort the movies in ascending order by their release year.
// returns a _new sorted array_.

//If two movies have the same year, 
//order them in alphabetical order by their title!

function orderByYear(moviesArray) {

    let moviesArrayCopy = [...moviesArray];
    //moviesArrayCopy = moviesArray.map((movie) => movie)

    const sortedMoviesByYear = moviesArrayCopy.sort((a,b)=> {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year
        }
    
    }); return moviesArrayCopy;
};
    



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let moviesArrayCopyAgain = [...moviesArray];

    //const twentyMovies = moviesArray.filter(movie => movie.title && movie.title.length < 21)

    const sortedByTitle = moviesArrayCopyAgain.sort((a,b)=> a.title.localeCompare(b.title))
    const twentyMovies = sortedByTitle.filter(movie => movie.title && movie.title.length < 21)
        
    return twentyMovies;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // let movieDuration = moviesArray.map(movie => movie.duration )
    //     let movieHoursInmin = movie.duration.slice(0,1)*60
    //     let movieMinutes = movie.duration.slice(3,-3)
    //     let totalDurationInMin = movieHoursInmin + movieMinutes
    //     return movieDuration

    let movieDuration = moviesArray.map(movie => {
        let movieHoursInmin = movie.duration.slice(0,1)*60
        let movieMinutes = movie.duration.slice(3,-3)
        let totalDurationInMin = movieHoursInmin + movieMinutes
        return totalDurationInMin;
    });
  
    return movieDuration;
 

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {


}
