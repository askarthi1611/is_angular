import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public libs=[
    {
      link:'https://codezup.com/angular-7891011-chart-js-example/',
      title:'Angular 7|8|9|10|11 Chart JS Example',
      offical:'unoffical'
    },
    {
      link:'https://www.chartjs.org/docs/2.9.4/',
      title:'Chart.js',
      offical:'offical'
    },
    {
      link:'https://valor-software.com/ngx-bootstrap/#/',
      title:'ngx-bootstrap',
      offical:'offical'
    },
    {
      link:'https://angel-rs.github.io/css-color-filter-generator/',
      title:'css-color-filter-generator',
      offical:'unoffical'
    },
    {
      link:'https://app-live.browserstack.com/dashboard#os=ios&os_version=12.0&device=Samsung+Galaxy+S22+Ultra&zoom_to_fit=true&full_screen=true&speed=1',
      title:'Browserstack',
      offical:'unoffical'
    },
    {
      link:'https://datatables.net/',
      title:'datatables.net',
      offical:'offical'
    },
    {
      link:'https://pdfviewer.net/extended-pdf-viewer/simple',
      title:'extended-pdf-viewer',
      offical:'offical'
    },
    {
      link:'https://primeng.org/',
      title:'primeng',
      offical:'offical'
    },
  ]
}
