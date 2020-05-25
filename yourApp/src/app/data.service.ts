import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

getAll(): any[] { //Add a new method getAll()
return [
{'title':'My task 1', 'desc':'My taskdescription'},
{'title':'My task 2', 'desc':'My taskdescription'},
{'title':'My task 3', 'desc':'My taskdescription'},

];
}

  constructor() { }
}
