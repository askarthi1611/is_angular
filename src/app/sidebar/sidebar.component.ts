import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public navlink=[
  {link:'/lib',title:'Package '},
  {link:'/chips',title:' JS Chips '},
  {link:'/table',title:' DataTable '},
  {link:'/table_col',title:' DataTable Colapes '},
  {link:'/asplit',title:'Angular split '},
  {link:'/host-listener',title:'Angular Keyboard HostListener'},
  {link:'/drag',title:'Draggable '},
  {link:'/navscroll',title:'Nav-link Scroll '},
]
}
