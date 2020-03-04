import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  api_key: string = "3ea150464035bc92e08e1ecfd93b9557";
  moviesUrl: string = "https://api.themoviedb.org/3/search/movie";

  url: string = "https://api.themoviedb.org/3/movie/";
  constructor(private http: HttpClient) { }

  //Todo pass inteface
  getMovies(movie: string): Observable<any>{
    return this.http.get(this.moviesUrl, {params: {api_key: this.api_key, query: movie}});
  }

  getMovie(id: number): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}`);
  }
}
