$( document ).ready(function() {

	function showRandomQuote(json){
		$(".quote-content").append(json.quote);
	  $(".quote-author").append(json.author);
	  console.log(json);
	}
	

	$('#showQuote').click(function(){
	  $.ajax({
		  url: "http://quotes.stormconsultancy.co.uk/random.json",
		  dataType: "jsonp",
		  jsonpCallback: "showRandomQuote",
		  cashe: false
		});
	});
});
