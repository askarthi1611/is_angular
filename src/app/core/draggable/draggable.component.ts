import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inBounds = true;
  myOutOfBounds:any = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  };
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true,
  };

  checkEdge(event: { top: boolean; bottom: boolean; left: boolean; right: boolean; }) {
    this.edge = event;
    console.log('edge:', event);
  }

  outOfBounds(position: string | number) {
    if (this.myOutOfBounds[position]) {
      this.myOutOfBounds[position] = false;
    } else {
      this.myOutOfBounds[position] = true;
    }
  }

}
