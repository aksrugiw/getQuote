$( document ).ready(function() {
	$('#showQuote').click(function(){
	  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(a) {
		  $(".quote-content").append(a.quote);
		  $(".quote-author").append(a.author);
		});
	});
});
