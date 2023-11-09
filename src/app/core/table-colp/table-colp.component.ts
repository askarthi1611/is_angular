import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-colp',
  templateUrl: './table-colp.component.html',
  styleUrls: ['./table-colp.component.css']
})
export class TableColpComponent implements OnInit {

  reponsive_table:any 
  constructor() { }

  ngOnInit(): void {
    this.reponsive_table= {
      initComplete: function () {
        let TableID = 'reponsive_table' //set id of datatable
        $('#'+TableID+'_filter').wrap("<div class='data_text_right'><div class='imgexport bt8'></div></div>");
        $('#'+TableID).wrap("<div class='tableFixHead' style=' margin-top: 10px !important;overflow:auto;min-height:auto;max-height: calc(100vh - 390px); width:100%;position:relative;'></div>");  
        $('#'+TableID+' tbody').on('click', 'td.dt-control', function () { //Every CLick td mobile view Add Button to open Child Table
          let tr = $(this).closest('tr') //return nearest table row (tr) in clicking td
          let thead_arr: any = [] //table head array
          let tbody_arr: any = [] //table body row data array
          tr.children().map((e,l)=>{tbody_arr.push($(l).text())}); //push element in tbody_arr return nearest table row (tr) in clicking td
          $('#'+TableID+' thead tr').children().map((e, l) => { thead_arr.push($(l).html()) });  //push element in thead_arr table thead tr th
          let colspan:any=0; //this colspan is used for creating subtable td colspan
              let str = ""; 
              let only: any = []
              $('#'+TableID+' tbody tr').children().map((e, l) => {
                if ($(l).hasClass("hide_data")) {
                  only.push(e)
              }else{
                colspan++
              }
            });
            for (let i = 1; i < tbody_arr.length - 1; i++) {
              if (only.includes(i)) {
                  str += `<tr><td>${thead_arr[i]}</td><td><div style='display:flex'><div>:</div> <div>${tbody_arr[i]}</div></div></td></tr>`;
              }
          }
          let table=`<tr class="chlid_tr show_chlid_tr${tbody_arr[0]}"><td colspan=${colspan}><table class="sub_table" cellspacing="0" border="0" style="width:100%">${str}</table></td></tr>`
          if (tr.hasClass('dt-hasChild')) {
            $(".show_chlid_tr"+tbody_arr[0]).remove()
            tr.removeClass('dt-hasChild');
          } else {
            $('#'+TableID+' tbody tr').map((e,l)=>{$(l).removeClass('dt-hasChild')})
            $('.chlid_tr').map((e,l)=>{$(l).remove()})
            $(`${table}`).insertAfter($(tr));
            tr.addClass('dt-hasChild');
          }
        });
      },
      drawCallback: function( settings:any ) {
        $('.dt-hasChild').map((e,l)=>{$(l).removeClass('dt-hasChild')})
      },
      dom: 'lftrip',
      pagingType: 'full_numbers',
      autoWidth: false,
      pageLength: 10,
      responsive: true,
      lengthMenu: [10, 25, 50, 100],
      processing: true,
      columnDefs: [{
        'targets': [], /* 0 to 6 */
        'orderable': false,
      }],
      language: {
        search: '',
        searchPlaceholder: 'Search',
        paginate: {
          last: '<i class="fa fa-angle-double-right"></i>',
          first: '<i class="fa fa-angle-double-left"></i>',
          previous: '<i class="fa fa-angle-left"></i>',
          next: '<i class="fa fa-angle-right"></i>',
        },
      },
    };
  }
}
