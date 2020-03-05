import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  imageUrl: string = "https://image.tmdb.org/t/p/w500";
  hasInput: boolean = true;
  movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Todo pass inteface and sending "not found message in case of error"
  myMoviesList(data: any){    
    if(data.results.length){
      this.hasInput = true;
    }
    else{      
      this.hasInput = false;
    }
    let moviesList:Movie[] = data.results;
    this.movies = moviesList;
  }
  getMovieId(id: number){
    this.router.navigate(["/movie" ,id]);
  }
}