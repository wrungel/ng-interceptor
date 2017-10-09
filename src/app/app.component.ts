import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app2';
  hero: Hero = {
    id: 1,
    name: "Wndstorm"
  }

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    let url = '/api/hey';
    let url2 = 'https://api.github.com/users/wrungel';
    this.http.get(url).subscribe(data => {
      console.log(data);
    });
  }
}
