import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asplit',
  templateUrl: './asplit.component.html',
  styleUrls: ['./asplit.component.css']
})
export class AsplitComponent implements OnInit {
  public dir:any='horizontal'
  public data_0:any=0
  public data_1:any=1
  change_dir(a:any,b:any,c:any,){
    this.dir=a
    this.data_0=b
    this.data_1=c
  }
  constructor() { }
  ngOnInit(): void {
  }

}
