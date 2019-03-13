 /*modal*/

$(function(){
	n01();
	n02();
	n03();
  clickBtn1();
});

function n01(){
	var modal = $('#modal'),
	    modalContent = $('#modal_content'),
	    btnOpen = $("#btn_open"),
	    btnClose = $(".Decision");

	$(btnOpen).on('click', function() {
	    modal.show();
	});

	$(modal).on('click', function(event) {
		if(!($(event.target).closest(modalContent).length)||($(event.target).closest(btnClose).length)){
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
  $('.ChangeElem_Btn').each(function () {
    $(this).on('click', function () {
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
  $('#category_all').on('click', function() {
    $('.category').prop('checked', this.checked);
  });

  $('.category').on('click', function() {
    if ($('#categories :checked').length == $('#categories :input').length){
      $('#category_all').prop('checked', 'checked');
    }else{
      $('#category_all').prop('checked', false);
    }
  });

}

function clickBtn1(){
	const arr1 = [];
	const category = document.form1[0].category_01;

	for (let i = 0; i < category.length; i++){
		if(category[i].checked){ //(color1[i].checked === true)と同じ
			arr1.push(category[i].value);
		}
	}
	document.getElementById("span1").textContent = arr1;
}
