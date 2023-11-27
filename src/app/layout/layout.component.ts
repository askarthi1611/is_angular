import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() { }
<<<<<<< HEAD
  inout(){
    $('.icon').toggleClass('out')
=======
  inout(e:any){
    $(e).toggleClass('out')
>>>>>>> fed8c48d687b7d48a92b80681bfb4fe7e1e9a121
    $('.layout').toggleClass('mob')    
  }
  ngOnInit(): void { }

}
