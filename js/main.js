/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("navigation").style.left = "0%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("navigation").style.left = "-100%";
}
function openFilters() {
	document.getElementById("filters").style.left = "0%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeFilters() {
    document.getElementById("filters").style.left = "100%";
}
$(function(){
	
	$(document).on('click', '#menu--button', function(){
			openNav();
	}).on('click', '#button--menu-close', function(){
			closeNav();
	}).on('click', '#filter--button--filter', function(){
			openFilters();
		
	}).on('click', '#filter--button--apply, #filter--button--close', function(){
			closeFilters();
	}).on('click', '.bookmark', function(){
		var button = $(this);
		button.toggleClass('is-bookmarked');
		if (button.hasClass('is-bookmarked')){
			button.find('i').removeClass('fa-bookmark-o').addClass('fa-bookmark');
		}else{
			button.find('i').addClass('fa-bookmark-o').removeClass('fa-bookmark');
		}
			
	}).on('click', '.filter--category__item i', function(){
		var item = $(this).parent().remove();
			
	}).on('keypress', '#filter--add--category', function(event){
		var categoryText = $(this).val();
		if (event.keyCode === 13 && categoryText !== "" ){
			$('#filter--categories').append('<div class="filter--category__item"><label>' + categoryText + '</label><i class="fa fa-times" aria-hidden="true"></i></div>');
		}
			
	});
});