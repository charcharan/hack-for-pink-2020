import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router} from '@angular/router';

@Component({
  selector: 'app-angel-view',
  templateUrl: './angel-view.component.html',
  styleUrls: ['./angel-view.component.scss']
})
export class AngelViewComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'age', 'wish', 'sponsor'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private router:Router) { }
  

  ngOnInit() {
  }

  sponsorAWish(){
    this.router.navigate(['/payment']);  
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  age: number;
  wish: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Laura Williams', age: 42, wish: 'I wish to go to Hawaii'},
  {position: 2, name: 'Mary Clara', age: 36, wish: 'I wish to ride a plane'},
  {position: 3, name: 'John Cristy', age: 65, wish: 'I wish to have a chemo care package and home care package'},
  {position: 4, name: 'Lawrence Diana', age: 52, wish: 'As am a huge harry potter fan, I wish to read the books of all 8 seasons.'},
  {position: 5, name: 'Anonymous', age: 38, wish: 'I wish to meet Jackie Chan'},
  {position: 6, name: 'Cathy', age: 44, wish: 'I wish to be a Wonder Woman'},
  {position: 7, name: 'Anonymous', age: 32, wish: 'As I am Big fan of Serena Williams, I wish to play tennis with her'},
  {position: 8, name: 'Oxygen', age: 48, wish: 'It\'s not easy to make someone smile during hard times, But a F.R.I.E.N.D.S show can do ! I wish to have a netflix subscription to smile through my hard days'}
];
