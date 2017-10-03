import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    console.log(this.data.isUserLoggedIn);
  }

  login(){
    this.data.isUserLoggedIn = true;
    this.router.navigate(['/books']);
  }

  signOut(){
    this.data.isUserLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
