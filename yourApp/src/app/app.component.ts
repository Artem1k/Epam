import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  myProp:string = 'Go ahead, click that button';

  myArr = [
  {'title':'My task  1', 'desc':'My  task description'},
  {'title':'My task  2', 'desc':'My  task description'}, 
  {'title':'My task  3', 'desc':'My  task description'}, 
];
  private name: string;
  constructor(private data: DataService){}
  ngOnInit(): void{
    this.myArr = this.data.getAll();
  }
  myMethod() {
    this.myProp = 'That button above me was clicked'; }
}