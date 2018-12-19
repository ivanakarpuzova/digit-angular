import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-tile',
  templateUrl: './home-tile.component.html',
  styleUrls: ['./home-tile.component.css']
})
export class HomeTileComponent implements OnInit {

  //public posts: any;

  constructor(private router: Router) { }
  //private httpClient: HttpClient
  ngOnInit() { 
  //   this.httpClient.get("http://localhost:3000/posts/1").subscribe((res) => {
  //     this.posts = res;
  //     console.log(res);
  //   }, (err) => {
  //     console.log(err);
  //   }
  //   )
  // }
} 
 find(): void{
  console.log("FIND FIND FIND");
  this.router.navigate(['/find']);
  }

  report(): void{
    console.log("repoRTTTTTT");
  }
}

