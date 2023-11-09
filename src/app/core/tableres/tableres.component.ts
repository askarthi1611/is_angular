import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableres',
  templateUrl: './tableres.component.html',
  styleUrls: ['./tableres.component.css']
})
export class TableresComponent implements OnInit {
  reponsive_table:any 
  constructor() { }

  ngOnInit(): void {
    this.reponsive_table= {
      initComplete: function () {
        let TableID = 'reponsive_table'
        $('#'+TableID+'_filter').wrap("<div class='data_text_right'><div class='imgexport bt8'></div></div>");
        $(`#${TableID}`).wrap("<div class='tableFixHead' style=' margin-top: 10px !important;overflow:auto;min-height:auto;max-height: calc(100vh - 390px); width:100%;position:relative;'></div>");  
        $('#'+TableID+' tbody').on('click', 'td.dt-control', function () {
          console.log(TableID);
          let tr = $(this).closest('tr')
          let thead_arr: any = []
          let tbody_arr: any = []
          tr.children().map((e,l)=>{tbody_arr.push($(l).text())});
          $('#'+TableID+' thead tr').children().map((e, l) => { thead_arr.push($(l).html()) });  
          let colspan:any=0;
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
                  str += `<tr><td>${thead_arr[i]}</td><td>: ${tbody_arr[i]}</td></tr>`;
              }
          }
          let table=`<tr class="show_chlid_tr${tbody_arr[0]}"><td colspan=${colspan}><table class="sub_table" cellspacing="0" border="0" style="width:100%">${str}</table></td></tr>`
          if (tr.hasClass('dt-hasChild')) {
            $(".show_chlid_tr"+tbody_arr[0]).remove()
            tr.removeClass('dt-hasChild');
          } else {
            $(`${table}`).insertAfter($(tr));
            tr.addClass('dt-hasChild');
          }
        });
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
