import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  histories: History[] = JSON.parse(localStorage.getItem("search_movie_history"));

  constructor() { }

  ngOnInit(): void {

  }
}