$( document ).ready(function() {
	$('#showQuote').click(function(){
	  $(".quote-content").empty();
	  $(".quote-author").empty();
	  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(a) {
		  $(".quote-content").append(a.quote);
		  $(".quote-author").append(a.author);
		});
	});
});
