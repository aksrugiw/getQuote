$( document ).ready(function() {
	$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(a) {
	  $(".quote-content").append(a.quote);
	  $(".quote-author").append(a.author);
	});
	$('#showQuote').click(function(){
	  $(".quote-content").empty();
	  $(".quote-author").empty();
	  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(a) {
		  $(".quote-content").append(a.quote);
		  $(".quote-author").append(a.author);
		});
	});
});
