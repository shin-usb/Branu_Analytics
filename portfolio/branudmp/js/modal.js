 /*modal*/

 $(function() {
   n01();
   n02();
   n03();
   n04();
   n05();
   n06();
   n07();
   clickBtn1();
 });

 function n01() {
   var modal = $('#modal'),
     modalContent = $('#modal_content'),
     btnOpen = $("#btn_open"),
     btnClose = $(".Decision");

   $(btnOpen).on('click', function() {
     modal.show();
   });

   $(modal).on('click', function(event) {
     if (!($(event.target).closest(modalContent).length) || ($(event.target).closest(btnClose).length)) {
       modal.hide();
     }
   });
 }

 /*タブの切り替え*/

 function n02() {
   /*初期表示*/
   $('.ChangeElem_Panel').hide();
   $('.ChangeElem_Panel').eq(0).show();
   $('.ChangeElem_Btn').eq(0).addClass('is-active');
   /*クリックイベント*/
   $('.ChangeElem_Btn').each(function() {
     $(this).on('click', function() {
       var index = $('.ChangeElem_Btn').index(this);
       $('.ChangeElem_Btn').removeClass('is-active');
       $(this).addClass('is-active');
       $('.ChangeElem_Panel').hide();
       $('.ChangeElem_Panel').eq(index).show();
     });
   });
 }



 /*全部チェック*/
 function n03() {
   $('#category_all_construction').on('click', function() {
     $('.construction_checkbox').prop('checked', this.checked);
   });

   $('.construction_checkbox').on('click', function() {
     if ($('#categories_construction :checked').length == $('#categories_construction :input').length) {
       $('#category_all_construction').prop('checked', 'checked');
     } else {
       $('#category_all_construction').prop('checked', false);
     }
   });
 }

 function n04() {
   $('#category_all_shipping').on('click', function() {
     $('.shipping_checkbox').prop('checked', this.checked);
   });

   $('.shipping_checkbox').on('click', function() {
     if ($('#categories_shipping :checked').length == $('#categories_shipping :input').length) {
       $('#category_all_shipping').prop('checked', 'checked');
     } else {
       $('#category_all_shipping').prop('checked', false);
     }
   });

 }

 function n05() {
   $('#category_all_manufacturing').on('click', function() {
     $('.manufacturing_checkbox').prop('checked', this.checked);
   });

   $('.manufacturing_checkbox').on('click', function() {
     if ($('#categories_manufacturing :checked').length == $('#categories_manufacturing :input').length) {
       $('#category_all_manufacturing').prop('checked', 'checked');
     } else {
       $('#category_all_manufacturing').prop('checked', false);
     }
   });

 }

 function n06() {
   $('#category_all_wholesale').on('click', function() {
     $('.wholesale_checkbox').prop('checked', this.checked);
   });

   $('.wholesale_checkbox').on('click', function() {
     if ($('#categories_wholesale :checked').length == $('#categories_wholesale :input').length) {
       $('#category_all_wholesale').prop('checked', 'checked');
     } else {
       $('#category_all_wholesale').prop('checked', false);
     }
   });

 }

 function n07() {
   $('#category_all_other').on('click', function() {
     $('.other_checkbox').prop('checked', this.checked);
   });

   $('.other_checkbox').on('click', function() {
     if ($('#categories_other :checked').length == $('#categories_other :input').length) {
       $('#category_all_other').prop('checked', 'checked');
     } else {
       $('#category_all_other').prop('checked', false);
     }
   });

 }



 function clickBtn1() {
   const arr1 = [];
   const category = document.form1.category_01;

   for (let i = 0; i < category.length; i++) {
     if (category[i].checked) { //(color1[i].checked === true)と同じ
       arr1.push(category[i].value);
       console.log(category[i].value)
     }
   }
   document.getElementById("span1").textContent = arr1;
 }
