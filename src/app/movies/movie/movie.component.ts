import { MoviesService } from 'src/app/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: number;
  movie: Movie;
  imgageUrl: string = "https://image.tmdb.org/t/p/w500";

  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setMovieId();
    this.getMovie();
  }

  setMovieId(): void{
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  getMovie(): void{
    this.service.getMovie(this.id).subscribe(movie => {     
      this.movie = movie;
    });
  }
}
