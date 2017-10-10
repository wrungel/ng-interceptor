import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {

  url = '/api/hey';  
  title = 'app2';

  hero: Hero = {
    id: 1,
    name: "Wndstorm"
  }

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get<Hero>(this.url).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  httpRequest() {
    this.title = 'XXX';
    this.http.get<Hero>(this.url)
    .subscribe(data => {
      this.hero = data;
    });
  }
}
