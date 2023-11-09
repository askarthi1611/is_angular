import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  constructor() { }
  items:any= [];
  keypress(e:any){
    if (e.key === "Enter") {
          var txt:any = document.getElementById("chipset");
            let val = txt.value;
            if (val !== "") {
              if (this.items.indexOf(val) >= 0) {
                // alert("Tag name is a duplicate");
              } else {
                this.items.unshift(val);
                txt.value = "";
                txt.focus();
              }
            }
          }
  }
  remove(i:any) {    
      if (this.items.indexOf(i) > -1) { // only splice array when item is found
        this.items.splice(this.items.indexOf(i), 1); // 2nd parameter means remove one item only
      }
    }
  ngOnInit(): void {
    console.log($("main")[0].innerHTML)
  }

}
