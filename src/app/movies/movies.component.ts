import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  imgageUrl: string = "https://image.tmdb.org/t/p/w500";
<<<<<<< HEAD
  hasInput: boolean = true;
=======
  hasMovies: boolean = true;
>>>>>>> a30c201ca8740019b195bcdb65c8b2182f9f3d81
  movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  //Todo pass inteface and sending "not found message in case of error"
  myMoviesList(data: any){    
    if(data.results.length){
      this.hasInput = true;
    }
    else{      
      this.hasInput = false;
=======
  //Todo pass inteface
  myMoviesList(data: any){
    if(data.results.length > 0){
      this.hasMovies = true;
    }
    else{      
      this.hasMovies = false;
>>>>>>> a30c201ca8740019b195bcdb65c8b2182f9f3d81
    }
    let moviesList:Movie[] = data.results;
    this.movies = moviesList;
  }
  getMovieId(id: number){
    this.router.navigate(["/movie" ,id]);
  }
}