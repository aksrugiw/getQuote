$( document ).ready(function() {
	$.getJSON("https://crossorigin.me/https://quotes.stormconsultancy.co.uk/random.json", function(a) {
	  $(".quote-content").append(a.quote);
	  $(".quote-author").append(a.author);
	});
	$('#showQuote').click(function(){
	  $(".quote-content").empty();
	  $(".quote-author").empty();
	  $.getJSON("https://crossorigin.me/https://quotes.stormconsultancy.co.uk/random.json", function(a) {
		  $(".quote-content").append(a.quote);
		  $(".quote-author").append(a.author);
		});
	});
});
