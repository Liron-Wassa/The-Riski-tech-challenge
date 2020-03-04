import { MoviesService } from 'src/app/movies.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { History } from '../../../history';
import { Movie } from '../../../movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() moviesList: EventEmitter<Movie[]> = new EventEmitter();

  movie: string = "";
  movies: Movie[];
  search: History;
  hasInput: boolean = true;
  history: History[] = JSON.parse(localStorage.getItem("search_movie_history")) || [];

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    // localStorage.clear();
  }

  searchMovie(): void{
    if(this.movie){
      return this.getMovies();
    }
    this.hasInput = false;
  }

  getMovies(): void{
    this.service.getMovies(this.movie).subscribe(movies => {
      this.movies = movies;
      this.moviesList.emit(this.movies);
      this.writeHistory();
    });
  }

  onKeyPress(event: any){    
    if(event.key === "Enter" && this.movie){
      return this.getMovies();
    }
    this.hasInput = true;
  }

  writeHistory(): void{
    this.search = {
      movie_name: this.movie,
      date: Date.now()
    }
    if(this.history){      
      this.history.push(this.search);
      this.saveToHistory();
    }
    else{
      this.history.push(this.search);
      this.saveToHistory();
    }
  }

  saveToHistory(): void{
    localStorage.setItem("search_movie_history", JSON.stringify(this.history));
  }
}