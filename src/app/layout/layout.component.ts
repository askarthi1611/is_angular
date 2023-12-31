import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() { }
  code_view(e:any){
    console.log(e.target,e);
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  inout(){
    $('.icon').toggleClass('out')
    $('.layout').toggleClass('mob')    
  }
  activeIndex:any=0;
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
