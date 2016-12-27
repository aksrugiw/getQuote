$( document ).ready(function() {

	$('#showQuote').click(function(){
		$(".quote-content").empty();
		$(".quote-author").empty();
		$.ajax({
		    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		    type: 'GET', // The HTTP Method
		    datatype: 'json',
		    cache: false,
		    success: function(data) { 
		    	var json = JSON.parse(data);
		    	$(".quote-content").append(json.quote);
				$(".quote-author").append(json.author);
		    },
		    error: function(err) { alert(err); },
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "sZYuSJCwLBmshotkB5Hy6NDNIxMQp1D7WmjjsnUb0PYZLkpVhf"); // Enter here your Mashape key
		    }
		});
	});

	$.ajax({
	    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
	    type: 'GET', // The HTTP Method
	    datatype: 'json',
	    success: function(data) { 
	    	var json = JSON.parse(data);
	    	$(".quote-content").append(json.quote);
	  $(".quote-author").append(json.author);
	    },
	    error: function(err) { alert(err); },
	    beforeSend: function(xhr) {
	    xhr.setRequestHeader("X-Mashape-Authorization", "sZYuSJCwLBmshotkB5Hy6NDNIxMQp1D7WmjjsnUb0PYZLkpVhf"); // Enter here your Mashape key
	    }
	});

});
