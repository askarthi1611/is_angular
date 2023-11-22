import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navscroll',
  templateUrl: './navscroll.component.html',
  styleUrls: ['./navscroll.component.css']
})
export class NavscrollComponent implements OnInit {

  constructor() { }

  nav_link(e: any) {
    let elem:any=document.querySelector(`#${e}`);
    $('.nav_link').map((e, l: any) => { $(l).removeClass('active') });
    window.scrollTo(0, elem.offsetTop-250)
  }
  ngOnInit(): void {
      setInterval(() => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("nav .dos_nav ul li");
        const scroll :any= document.querySelector(".overview.tab-container")
        window.onscroll = () => {
          var current:any = "";
        
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 350) {
              current = section.getAttribute("id"); }
          });
        
          navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
              li.classList.add("active");
            }
          });
        };
      }, 100);
  }

}
