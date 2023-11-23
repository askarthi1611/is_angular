import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() { }
  inout(e:any){
    $(e).toggleClass('out')
    $('.layout').toggleClass('mob')    
  }
  ngOnInit(): void { }

}
