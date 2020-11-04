import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Winshow = 1;
  showInfo(){
   if(this.Winshow == 1){
    this.Winshow = 0;
     return true;
     
   }else{
    this.Winshow = 1;
     return false;
   }
  }
}
