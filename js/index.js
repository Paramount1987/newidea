$(document).ready(function(){

//////////////////////////////menu
$("#trigger-overlay").click(function(){
	$(this).toggleClass("open");
	$("footer").toggleClass("inverse");
});
/////////////////////////////loader
QueryLoader.init();

});