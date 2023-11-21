import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public key:any=''
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.key=event.key
    event.preventDefault();
    console.log(event.key,this.key.length);
    try {
      if (event.ctrlKey) {
        if (event.key === 'ArrowUp') {
          alert("ArrowUp");
        } else if (event.key === 'ArrowDown') {
          alert("ArrowDown");
        } else if (event.key === 'ArrowRight') {
          alert("ArrowRight");
        } else if (event.key === 'ArrowLeft') {
          alert("ArrowLeft");
        } else if (event.key === 's') {
          console.log("s");
        }
      } else if (event.altKey) {
        if (event.key === 'ArrowRight') {
          console.log("ArrowRight");
        } else if (event.key === 'ArrowLeft') {
          console.log("ArrowLeft");
        } else if (event.key === 'k') {
          console.log("k");
        }
        else {
        }
      } else {
        if (event.key === 'Escape') {
          console.log("Escape");
        } else if (event.key === 'Tab') {
          console.log("Tab");
        } else {
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}
