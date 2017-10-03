import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {
  // myData: Array<any>;
  // constructor(private http: Http) {
  //   this.http.get('https://jsonplaceholder.typicode.com/photos')
  //     .map(response => response.json())
  //     .subscribe(res => this.myData = res);
  // }
  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
