$(document).ready(function() {

	var url=$(this).attr("href");
	$("#definicion a").click(function(){
		$("Contenidos_externos").load(url + " #definicion");
		return false;
	});


			
}); 