import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gittab',
  templateUrl: './gittab.component.html',
  styleUrls: ['./gittab.component.css']
})
export class GittabComponent implements OnInit {
  activeIndex:any=0;
  constructor() { }
  github_link=[
    {name:'html',link:'https://raw.githubusercontent.com/askarthi1611/is_angular/main/src/app/core/table-colp/table-colp.component.html',type:'github_link',code:''},
    {name:'css',link:'https://raw.githubusercontent.com/askarthi1611/is_angular/main/src/app/core/table-colp/table-colp.component.css',type:'github_link',code:''},
    {name:'ts',link:'https://raw.githubusercontent.com/askarthi1611/is_angular/main/src/app/core/table-colp/table-colp.component.ts',type:'github_link',code:''},
    {name:'ref',link:'https://raw.githubusercontent.com/askarthi1611/is_angular/main/src/app/core/table-colp/table-colp.component.ts',type:'reference_link',code:''}
  ]
  async ngOnInit(): Promise<void> {
    for (let link of this.github_link) {
      if (link.type=='github_link') {
        await fetch(link.link).then(response => response.text()).then(html => link.code=html)        
      }
    }
  }

}
