import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import wordsCount from 'words-count';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient) {
  }
  baseUrl = "https://random-data-api.com/api/restaurant/random_restaurant"
  title = 'UT';
  api = new FormControl("");
  name = new FormControl('');
  res:any;
  data:any;
  input:any;
  json:any;
  address:any;
  desc:any;
  name2:any;
  phone:any;
  update(){
    this.name.setValue("Timotius");
  }
	async GetAll() {
		this.res = await fetch(this.baseUrl);
    this.data = await this.res.json();
    console.log(this.data);
    this.address = wordsCount(this.data.address) ;
    this.desc = wordsCount(this.data.description) ;
    this.name2 = wordsCount(this.data.name) ;
    this.phone = wordsCount(this.data.phone_number) ;
	}
}
