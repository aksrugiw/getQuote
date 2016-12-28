$( document ).ready(function() {

	var colors = [
		{"body": "#A6C5E4", "well": "#387CC2"},
		{"body": "#70B2C4", "well": "#457A8A"},
		{"body": "#7FB57E", "well": "#4F754E"},
		{"body": "#F78383", "well": "#9C3737"},
		{"body": "#FBE58C", "well": "#F7C604"},
		{"body": "#E7D6FF", "well": "#8B7AA3"},
		{"body": "#B8AAE4", "well": "#5C4E89"},
		{"body": "#8F90B5", "well": "#33345A"},
		{"body": "#78778B", "well": "#1D1B30"},
		{"body": "#FFB8B3", "well": "#FF3C2F"},
		{"body": "#FCEBA2", "well": "#F9C801"},
		{"body": "#FFA6C3", "well": "#FF0B5B"},
		{"body": "#EBA2A3", "well": "#C80002"},
		{"body": "#FED1AD", "well": "#FE8220"},
		{"body": "#FF948D", "well": "#BA2C23"},
		{"body": "#DCF174", "well": "#8BA801"},
		{"body": "#73DECB", "well": "#008F75"},
		{"body": "#73BA73", "well": "#005E00"},
		{"body": "#9FDB8F", "well": "#3A8B26"},
		{"body": "#ADEAFF", "well": "#518EA3"}
	];
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
				var randomQuote = $(".quote-content").text();
				var randomAuthor = $(".quote-author").text();
				var urlForTweet = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '\"' + encodeURIComponent(randomQuote + '\" ~ ' + randomAuthor);
				$('.twitter-share-button').attr("href", urlForTweet);

				var randomColor = Math.floor((Math.random() * colors.length));

				$('body').css('background-color', colors[randomColor].body);
				$('.well').css('background-color', colors[randomColor].well);

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
			var randomQuote = $(".quote-content").text();
			var randomAuthor = $(".quote-author").text();
			var urlForTweet = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '\"' + encodeURIComponent(randomQuote + '\" ~ ' + randomAuthor);
			$('.twitter-share-button').attr("href", urlForTweet);

			var randomColor = Math.floor((Math.random() * colors.length));

			$('body').css('background-color', colors[randomColor].body);
			$('.well').css('background-color', colors[randomColor].well);

	    },
	    error: function(err) { alert(err); },
	    beforeSend: function(xhr) {
	    xhr.setRequestHeader("X-Mashape-Authorization", "sZYuSJCwLBmshotkB5Hy6NDNIxMQp1D7WmjjsnUb0PYZLkpVhf"); // Enter here your Mashape key
	    }
	});
	



});
